import { z } from 'zod'

export const timeIntervalsBodySchema = z.object({
  intervals: z
    .array(
      z.object({
        weekDay: z.number().min(0).max(6),
        startTimeInMinutes: z.number(),
        endTimeInMinutes: z.number(),
      }),
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

export type TimeIntervalsBodyType = z.output<typeof timeIntervalsBodySchema>
