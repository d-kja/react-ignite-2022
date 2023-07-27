import { prisma } from '@/lib/prisma'
import dayjs from 'dayjs'
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

    await prisma.scheduling.create({
      data: {
        email,
        name,
        observations,
        user_id: user.id,
        date: scheduleDate.toDate(),
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
