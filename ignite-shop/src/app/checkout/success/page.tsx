import { stripe } from '@/lib/stripe'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import styled from 'windstitch'

export const metadata = {
  title: 'Ignite Shop | Payment successful',
  description: 'Success page for the payment',
}

const SuccessPageContainer = styled('main', {
  className: 'flex flex-col items-center justify-center h-[656px] mx-auto',
})
const SuccessPageImageContainer = styled('div', {
  className:
    'w-full max-w-[140px] h-[140px] bg-gradient-to-b from-[#1ea483] to-[#7465d4] rounded-full p-1 flex items-center justify-center mt-16 [&:not(:first-child)]:-ml-14 drop-shadow-xl shadow-xl shadow-gray-900/50',
})

interface SuccessPageProps {
  searchParams: {
    session_id: string
  }
}

const SuccessPage = async ({
  searchParams: { session_id: sessionId },
}: SuccessPageProps) => {
  if (!sessionId) throw new Error('Session id is undefined')

  const stripeCheckoutSession = await stripe.checkout.sessions.retrieve(
    sessionId,
    {
      expand: ['line_items', 'line_items.data.price.product'],
    },
  )
  console.log(stripeCheckoutSession.line_items?.data)

  // const stripeProduct = (
  //   stripeCheckoutSession.line_items?.data[0].price as Stripe.Price
  // ).product as Stripe.Product
  // const product = {
  //   name: stripeProduct.name,
  //   url: stripeProduct.images[0],
  // }

  const customerName = stripeCheckoutSession.customer_details?.name
  const products = stripeCheckoutSession.line_items?.data.map((data: any) => {
    const product = data.price.product as Stripe.Product

    console.log(product)

    return {
      name: product.name,
      url: product.images[0],
    }
  })

  return (
    <SuccessPageContainer>
      <h1 className="text-[2rem] font-bold">Payment successful</h1>

      <div className="flex">
        {products?.map((product) => (
          <SuccessPageImageContainer key={product.name}>
            <Image
              src={product.url}
              width={140}
              height={140}
              alt={product.name}
            />
          </SuccessPageImageContainer>
        ))}
      </div>

      <p className="text-2xl text-gray-300 max-w-[560px] text-center mt-8 leading-[1.4]">
        Thank you for your purchase, <strong>{customerName}</strong>. We hope
        you enjoy your new goodies
      </p>

      <Link
        href="/"
        className="mt-20 text-green-500 font-bold text-xl hover:text-green-300 transition-colors"
      >
        Go back
      </Link>
    </SuccessPageContainer>
  )
}

export default SuccessPage
