import { z } from 'zod'

export const updateBioBodySchema = z.object({
  bio: z.string(),
})

export type UpdateBioBodyType = z.output<typeof updateBioBodySchema>
