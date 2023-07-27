import { Card } from '@/components/Product/Card'
import { stripe } from '@/lib/stripe'
import { priceFormatter } from '@/lib/utils/formatter'
import Stripe from 'stripe'

interface PageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params: { id } }: PageProps) {
  // const productResponse = await stripe.products.retrieve(id, {
  //   expand: ['default_price'],
  // })

  // const productName = productResponse?.name ?? 'Product'

  // return {
  //   title: `Ignite Shop | ${productName}`,
  //   description: 'Single product display',
  // }

  // In order to show the loading boundary I'm going to keep things simple
  return {
    title: `Ignite Shop | Product`,
    description: 'Single product display',
  }
}

export const revalidate = 86400 // 60 * 60 * 24 (24 hours)

const Page = async ({ params: { id } }: PageProps) => {
  const productResponse = await stripe.products.retrieve(id, {
    expand: ['default_price'],
  })

  const price = productResponse?.default_price as Stripe.Price

  const product = {
    id: productResponse.id,
    name: productResponse?.name,
    description: productResponse?.description ?? '',
    src: productResponse.images[0],
    price: priceFormatter.format((price.unit_amount ?? 0) / 100),
    defaultPriceId: price.id,
  }

  return <Card product={product} />
}

export default Page
