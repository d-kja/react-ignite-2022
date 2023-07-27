import { Calendar } from '@/components/client-side/calendar'
import { api } from '@/lib/axios'
import { dayFormat } from '@/lib/dayjs'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import {
  AvailableTimeSpanType,
  availableTimeSchema,
} from './schedule-form-types'
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './styles'

interface CalendarStepProps {
  onChangeDate: (date: Date) => void
}

export function CalendarStep({ onChangeDate }: CalendarStepProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const selectedDateWithoutTime = selectedDate
    ? dayjs(selectedDate).format('YYYY-MM-DD')
    : null

  const params = useParams()
  const username = params?.username

  const { data: availableTimeSpan } = useQuery<AvailableTimeSpanType>({
    queryKey: ['date-availability', selectedDateWithoutTime],
    queryFn: async (): Promise<AvailableTimeSpanType> => {
      const response = await api.get(`/users/${username}/availability`, {
        params: {
          date: dayjs(selectedDate).format('YYYY-MM-DD'),
        },
      })

      const timeSpan = availableTimeSchema.parse(response?.data)
      return timeSpan
    },
    enabled: !!selectedDate,
  })

  const isDateSelected = !!selectedDate
  const selectedWeekday = selectedDate ? dayFormat(selectedDate, 'dddd') : null
  const selectedExtensiveDate = selectedDate
    ? dayFormat(selectedDate, 'DD[ de ]MMMM')
    : null

  const formattedAvailableTimeSpan = availableTimeSpan
    ? availableTimeSpan.map((timeSpan) => ({
        ...timeSpan,
        time: String(timeSpan.time).padStart(2, '0'),
      }))
    : []

  const handleUpdateDateTime = (time: string, available: boolean) => {
    if (!available) return

    const dateWithTime = dayjs(selectedDate)
      .set('hour', Number(time))
      .startOf('hour')
      .toDate()

    onChangeDate(dateWithTime)
  }

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar
        selectedDate={selectedDate}
        onChangeSelectedDate={setSelectedDate}
      />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            {selectedWeekday} <span>{selectedExtensiveDate}</span>
          </TimePickerHeader>

          <TimePickerList>
            {formattedAvailableTimeSpan.map(({ time, available }) => (
              <TimePickerItem
                key={time}
                disabled={!available}
                onClick={() => handleUpdateDateTime(time, available)}
              >
                {time}:00h
              </TimePickerItem>
            ))}
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  )
}
