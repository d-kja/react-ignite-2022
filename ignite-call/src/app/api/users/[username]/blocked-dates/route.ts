/* eslint-disable camelcase */
import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { UsersDynamicParams } from '../users-route-type'

export const GET = async (
  request: NextRequest,
  { params }: UsersDynamicParams,
) => {
  const monthSearchParam = request.nextUrl.searchParams.get('month')
  const yearSearchParam = request.nextUrl.searchParams.get('year')
  const { username } = params

  if (!yearSearchParam || !monthSearchParam)
    return new Response(
      JSON.stringify({ message: 'Missing month or the year search parameter' }),
      {
        status: 400,
      },
    )

  const formattedYearAndMonth = `${yearSearchParam}-${monthSearchParam}`

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (!user)
    return new Response(JSON.stringify({ message: 'User not found' }), {
      status: 400,
    })

  const availableWeekdays = await prisma.userTimeInterval.findMany({
    where: {
      user_id: user.id,
    },
    select: {
      week_day: true,
    },
  })

  const unavailableWeekdays = Array.from({
    length: 7, // days in a week
  })
    .map((_, index) => index) // filling the array
    .filter(
      (weekday) =>
        !availableWeekdays.some(
          (availableWeekday) => availableWeekday.week_day === weekday,
        ),
    )

  const blockedDatesRaw = await prisma.$queryRaw<Array<{ date: number }>>`
    SELECT 
      EXTRACT(DAY FROM S.date) AS date,
      ((UTI.time_end_in_minutes - UTI.time_start_in_minutes) / 60) as available_time_span,
      COUNT(S.date) as occupied_slots

    FROM schedulings AS S

    LEFT JOIN user_time_intervals AS UTI
      ON UTI.week_day = WEEKDAY(DATE_ADD(S.date, INTERVAL 1 DAY))
  
    WHERE DATE_FORMAT(S.date, '%Y-%m') = ${formattedYearAndMonth}

    GROUP BY 
      EXTRACT(DAY FROM S.date),
      ((UTI.time_end_in_minutes - UTI.time_start_in_minutes) / 60)

    HAVING occupied_slots >= available_time_span
      OR available_time_span = null
  `

  const blockedDates = blockedDatesRaw.map((schedule) => schedule.date)

  return NextResponse.json({ unavailableWeekdays, blockedDates })
}
