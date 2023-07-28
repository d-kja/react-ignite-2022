import { getGoogleOAuthToken } from '@/lib/google'
import { prisma } from '@/lib/prisma'
import dayjs from 'dayjs'
import { google } from 'googleapis'
import { NextRequest } from 'next/server'
import { fromZodError } from 'zod-validation-error'
import { UsersDynamicParams } from '../users-route-type'
import { CreateScheduleBody } from './types'

export const POST = async (
  request: NextRequest,
  { params }: UsersDynamicParams,
) => {
  const body = await request.json()
  const { username } = params

  try {
    const { date, email, name, observations } = CreateScheduleBody.parse(body)
    const scheduleDate = dayjs(date).startOf('hour')

    if (scheduleDate.isBefore(new Date()))
      return new Response(
        JSON.stringify({ message: 'The time specified is in the past' }),
        {
          status: 400,
        },
      )

    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    })

    if (!user)
      return new Response(JSON.stringify({ message: 'User not found' }), {
        status: 400,
      })

    const hasConflictingSchedule = await prisma.scheduling.findFirst({
      where: {
        user_id: user.id,
        date: scheduleDate.toDate(),
      },
    })

    if (hasConflictingSchedule)
      return new Response(
        JSON.stringify({
          message: 'The specified time was already scheduled by someone else',
        }),
        {
          status: 400,
        },
      )

    const schedule = await prisma.scheduling.create({
      data: {
        email,
        name,
        observations,
        user_id: user.id,
        date: scheduleDate.toDate(),
      },
    })

    const auth = await getGoogleOAuthToken(user.id)

    const calendar = google.calendar({
      version: 'v3',
      auth,
    })

    await calendar.events.insert({
      calendarId: 'primary',
      conferenceDataVersion: 1,
      requestBody: {
        start: {
          dateTime: scheduleDate.format(),
        },
        end: {
          dateTime: scheduleDate.add(1, 'hour').format(),
        },

        summary: `Ignite Call: ${name}`,
        description: observations,

        attendees: [
          {
            email,
            displayName: name,
          },
        ],
        conferenceData: {
          createRequest: {
            requestId: schedule.id,
            conferenceSolutionKey: {
              type: 'hangoutsMeet',
            },
          },
        },
      },
    })

    return new Response(
      JSON.stringify({
        message: 'Schedule was created',
      }),
      {
        status: 201,
      },
    )
  } catch (error: any) {
    const zError = fromZodError(error)

    console.error('[Username/schedule] - validation error', zError)
    return new Response(
      JSON.stringify({
        message: zError.message,
        stack: zError.stack,
      }),
      {
        status: 400,
      },
    )
  }
}
