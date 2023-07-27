import { z } from 'zod'

export const CreateScheduleBody = z.object({
  date: z.string().datetime(),
  name: z.string().min(3),
  email: z.string().email(),
  observations: z.string().nullable(),
})
