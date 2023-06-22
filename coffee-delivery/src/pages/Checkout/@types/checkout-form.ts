import { z } from 'zod'

export const checkoutFormSchema = z.object({
  cep: z
    .string()
    .min(9)
    .transform((value) => value.replace('-', '')),
  address: z.string().min(6).trim(),
  addressNumber: z.string().min(2).max(5),
  additionalInfo: z.string().min(3).max(225).trim().optional(),
  state: z.string().min(6).max(30).trim(),
  city: z.string().min(6).max(30).trim(),
  uf: z
    .string()
    .min(1)
    .max(2)
    .trim()
    .regex(/([A-Za-z])\w+/),
})

export type CheckoutFormType = z.infer<typeof checkoutFormSchema>
