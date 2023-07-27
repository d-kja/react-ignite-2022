import { stripe } from '@/lib/stripe'
import { NextRequest } from 'next/server'
import { z } from 'zod'
import { fromZodError } from 'zod-validation-error'

const baseUrl = process.env.NEXT_URL ?? 'http://localhost:3000'

const checkoutSessionBodySchema = z.object({
  products: z
    .array(
      z.object({
        price: z.string(),
        quantity: z.number().min(1),
      }),
    )
    .min(1),
})

type PostBodyType = z.infer<typeof checkoutSessionBodySchema>

export const POST = async (request: NextRequest) => {
  try {
    const body: PostBodyType = await request.json()
    const { products } = checkoutSessionBodySchema.parse(body)

    console.log(`${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`)

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: products,
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: baseUrl,
    })

    return new Response(
      JSON.stringify({
        session: {
          id: stripeCheckoutSession.id,
          url: stripeCheckoutSession.url,
        },
      }),
    )
  } catch (error: any) {
    console.log({ error })
    const errorMessage = fromZodError(error)

    return new Response(
      JSON.stringify({
        error: errorMessage,
      }),
    )
  }
}
