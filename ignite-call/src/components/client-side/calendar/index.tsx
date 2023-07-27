import { api } from '@/lib/axios'
import { dayFormat } from '@/lib/dayjs'
import { getWeekDays } from '@/utils/date/get-week-days'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { useParams } from 'next/navigation'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { useMemo, useState } from 'react'
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from './styles'

type BlockedDatesType = {
  unavailableWeekdays: number[]
  blockedDates: number[]
}

export type CalendarWeek = {
  week: number
  days: Array<{
    date: dayjs.Dayjs
    disabled: boolean
  }>
}

export type CalendarWeeks = CalendarWeek[]

export interface CalendarProps {
  selectedDate?: Date | null
  onChangeSelectedDate: (date: Date) => void
}

export function Calendar({
  selectedDate,
  onChangeSelectedDate,
}: CalendarProps) {
  const params = useParams()
  const [currentDate, setCurrentDate] = useState(() => {
    if (selectedDate) return dayjs(selectedDate)

    return dayjs().set('date', 1)
  })

  function handlePreviousMonth() {
    const previousMonth = currentDate.subtract(1, 'month')

    setCurrentDate(previousMonth)
  }

  function handleNextMonth() {
    const nextMonth = currentDate.add(1, 'month')

    setCurrentDate(nextMonth)
  }

  const shortWeekDays = getWeekDays({ short: true })

  const currentMonth = dayFormat(currentDate, 'MMMM')
  const currentYear = dayFormat(currentDate, 'YYYY')

  const defaultMonth = String(currentDate.get('month') + 1).padStart(2, '0')
  const defaultYear = currentDate.get('year')

  const username = params?.username

  const { data: blockedDates } = useQuery<BlockedDatesType>({
    queryKey: ['blocked-dates', defaultYear, defaultMonth],
    queryFn: async (): Promise<BlockedDatesType> => {
      const response = await api.get<BlockedDatesType>(
        `/users/${username}/blocked-dates`,
        {
          params: {
            year: defaultYear,
            month: defaultMonth,
          },
        },
      )

      return response.data
    },
  })

  const calendarWeeks = useMemo(() => {
    const totalDaysInCurrentMonth = currentDate.daysInMonth()

    const currentMonthDaysArray = Array.from({
      length: totalDaysInCurrentMonth,
    }).map((_, i) => currentDate.set('date', i + 1))

    // Always returns the amount of days till the first day of the month
    const firstWeekday = currentDate.get('day')

    const previousMonthFillArray = Array.from({
      length: firstWeekday,
    })
      .map((_, i) => currentDate.subtract(i + 1, 'day'))
      .reverse()

    const lastDayInCurrentMonth = currentDate.set(
      'date',
      totalDaysInCurrentMonth,
    )
    const lastWeekday = lastDayInCurrentMonth.get('day')
    const nextMonthFillArray = Array.from({
      length: 7 - (lastWeekday + 1),
    }).map((_, i) => lastDayInCurrentMonth.add(i + 1, 'day'))

    const calendarDays = [
      ...previousMonthFillArray.map((date) => ({
        disabled: true,
        date,
      })),
      ...currentMonthDaysArray.map((date) => ({
        disabled:
          date.endOf('day').isBefore(new Date()) ||
          !!blockedDates?.unavailableWeekdays.includes(date.get('day')) ||
          !!blockedDates?.blockedDates.includes(date.get('date')),
        date,
      })),
      ...nextMonthFillArray.map((date) => ({
        disabled: true,
        date,
      })),
    ]

    const calendarWeeks = calendarDays.reduce<CalendarWeeks>(
      (weeks, currentItem, index, originalArray) => {
        const hasWeekStarted = index % 7 === 0

        if (hasWeekStarted) {
          weeks.push({
            week: index / 7 + 1,
            days: originalArray.slice(index, index + 7),
          })
        }

        return weeks
      },
      [],
    )

    return calendarWeeks
  }, [currentDate, blockedDates])

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          {currentMonth} <span>{currentYear}</span>
        </CalendarTitle>

        <CalendarActions>
          <button title="Previous month" onClick={handlePreviousMonth}>
            <CaretLeft />
          </button>
          <button title="Next month" onClick={handleNextMonth}>
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendarWeeks.map(({ week, days }) => (
            <tr key={week}>
              {days.map(({ date, disabled }) => (
                <td key={date.toString()}>
                  <CalendarDay
                    disabled={disabled}
                    data-active={date.isSame(selectedDate, 'date')}
                    onClick={() => onChangeSelectedDate(date.toDate())}
                  >
                    {date.get('date')}
                  </CalendarDay>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}
