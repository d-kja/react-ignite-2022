import { z } from 'zod'

export const availableTimeSchema = z.array(
  z.object({
    time: z.number().min(0).max(24),
    available: z.boolean(),
  }),
)

export type AvailableTimeSpanType = z.input<typeof availableTimeSchema>
