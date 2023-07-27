import Carousel from '@/components/Carousel'
import { stripe } from '@/lib/stripe'

import 'keen-slider/keen-slider.min.css'
import Stripe from 'stripe'

export const revalidate = 86400 // 60 * 60 * 24 (24 hours)

export const metadata = {
  title: 'Ignite Shop | Products',
  description: 'Available products for purchase',
}

export default async function Home() {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const formattedProducts = response.data?.map((product) => {
    const price = (product.default_price as Stripe.Price).unit_amount ?? 0
    const priceId = (product.default_price as Stripe.Price).id

    return {
      id: product.id,
      name: product.name,
      src: product.images[0],
      price: price / 100,
      priceId,
    }
  })

  return <Carousel products={formattedProducts} />
}
