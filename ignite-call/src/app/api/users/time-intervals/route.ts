import { authConfig } from '@/lib/auth/next-auth'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'
import { timeIntervalsBodySchema } from './time-intervals'

export const POST = async (request: NextRequest) => {
  const body = await request.json()

  try {
    const { intervals } = timeIntervalsBodySchema.parse(body)
    const session = await getServerSession(authConfig)

    if (!session) throw new Error('Unable to find user session')

    await Promise.all(
      intervals.map(async (interval) =>
        prisma.userTimeInterval?.create({
          data: {
            week_day: interval.weekDay,
            time_start_in_minutes: interval.startTimeInMinutes,
            time_end_in_minutes: interval.endTimeInMinutes,
            user_id: session.user.id,
          },
        }),
      ),
    )

    return new Response(null, {
      status: 201,
    })
  } catch (error) {
    console.error('[Users/time-intervals] - an error ocurred', error)
    return NextResponse.error()
  }
}
