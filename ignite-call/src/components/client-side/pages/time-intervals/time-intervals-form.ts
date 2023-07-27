import { convertStringTimeToMinutes } from '@/utils/date/convert-string-time-to-minutes'
import { z } from 'zod'

export const timeIntervalsFormSchema = z.object({
  intervals: z
    .array(
      z.object({
        weekDay: z.number().min(0).max(6),
        checked: z.boolean(),
        startTime: z.string().default('08:00'),
        endTime: z.string().default('18:00'),
      }),
    )
    .length(7)
    .transform((intervals) => intervals.filter((interval) => interval.checked))
    .refine((intervals) => intervals.length > 0, {
      message: 'Você precisa selecionar pelo menos um dia da semana',
    })
    .transform((intervals) =>
      intervals.map((interval) => ({
        weekDay: interval.weekDay,
        startTimeInMinutes: convertStringTimeToMinutes(interval.startTime),
        endTimeInMinutes: convertStringTimeToMinutes(interval.endTime),
      })),
    )
    .refine(
      (intervals) => {
        return intervals.every(
          (interval) =>
            interval.endTimeInMinutes - 60 >= interval.startTimeInMinutes,
        )
      },
      {
        message:
          'O horário de inicio deve ter pelo menos 1h de distancia do de termino',
      },
    ),
})

export type TimeIntervalsFormType = z.infer<typeof timeIntervalsFormSchema>
export type TimeIntervalsFormInput = z.input<typeof timeIntervalsFormSchema>
export type TimeIntervalsFormOutput = z.output<typeof timeIntervalsFormSchema> // same as infer

export const defaultIntervalsValue = [
  {
    weekDay: 0,
    checked: false,
    startTime: '08:00',
    endTime: '18:00',
  },
  {
    weekDay: 1,
    checked: true,
    startTime: '08:00',
    endTime: '18:00',
  },
  {
    weekDay: 2,
    checked: true,
    startTime: '08:00',
    endTime: '18:00',
  },
  {
    weekDay: 3,
    checked: true,
    startTime: '08:00',
    endTime: '18:00',
  },
  {
    weekDay: 4,
    checked: true,
    startTime: '08:00',
    endTime: '18:00',
  },
  {
    weekDay: 5,
    checked: true,
    startTime: '08:00',
    endTime: '18:00',
  },
  {
    weekDay: 6,
    checked: false,
    startTime: '08:00',
    endTime: '18:00',
  },
]
