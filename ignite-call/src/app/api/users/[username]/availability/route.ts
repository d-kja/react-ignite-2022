/* eslint-disable camelcase */
import { prisma } from '@/lib/prisma'
import dayjs from 'dayjs'
import { NextRequest, NextResponse } from 'next/server'
import { UsersDynamicParams } from '../users-route-type'

export const GET = async (
  request: NextRequest,
  { params }: UsersDynamicParams,
) => {
  const dateSearchParam = request.nextUrl.searchParams.get('date')
  const { username } = params

  if (!dateSearchParam)
    return new Response(
      JSON.stringify({ message: 'Missing date search parameter' }),
      {
        status: 400,
      },
    )

  const referenceDate = dayjs(dateSearchParam)
  const weekDay = referenceDate.get('day')

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (!user)
    return new Response(JSON.stringify({ message: 'User not found' }), {
      status: 400,
    })

  const userTimeInvertals = await prisma.userTimeInterval.findFirst({
    where: {
      user_id: user.id,
      week_day: weekDay,
    },
  })

  if (!userTimeInvertals) return NextResponse.json([]) // no hours available to schedule

  const { time_start_in_minutes, time_end_in_minutes } = userTimeInvertals

  const startTime = time_start_in_minutes / 60
  const endTime = time_end_in_minutes / 60

  const possibleAvailableTimeSpan = Array.from({
    length: endTime - startTime,
  }).map((_, i) => startTime + i)

  const unavailableTimeSpan = await prisma.scheduling.findMany({
    select: {
      date: true,
    },
    where: {
      user_id: user.id,
      date: {
        gte: referenceDate.set('hour', startTime).toDate(),
        lte: referenceDate.set('hour', endTime).toDate(),
      },
    },
  })

  const availableTimeSpan = possibleAvailableTimeSpan.map((time) => {
    const isUnavailable = unavailableTimeSpan.some(
      (unavailableTime) => unavailableTime.date.getHours() === time,
    )

    const isTimeInPast = referenceDate.set('hour', time).isBefore(new Date())

    if (isUnavailable || isTimeInPast) return { time, available: false }

    return { time, available: true }
  })

  return NextResponse.json(availableTimeSpan)
}
