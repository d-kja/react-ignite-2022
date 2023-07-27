import { stripe } from '@/lib/stripe'
import { NextResponse } from 'next/server'
import { ProductGetRequestParams } from './product'

export async function GET(
  request: Request,
  { params: { id } }: ProductGetRequestParams,
) {
  console.log(id)

  if (id) {
    try {
      const product = await stripe.prices.retrieve(id, {
        expand: ['product'],
      })
      return NextResponse.json({ product })
    } catch (error: any) {
      return NextResponse.json({
        message: error?.raw?.message,
        stack: error,
      })
    }
  }

  return NextResponse.json({
    message: 'Missing id',
  })
}
