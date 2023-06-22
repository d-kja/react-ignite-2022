'use client'

import { useCart } from '@/contexts/cart/context'
import { FC } from 'react'
import {
  CardButton,
  CardContainer,
  CardDetails,
  CardImage,
  CardImageContainer,
} from './style'

interface CardProps {
  product: {
    name: string
    price: string
    src: string
    id: string
    description: string
    defaultPriceId: string
  }
}

export const Card: FC<CardProps> = ({
  product: { description, id, name, price, src, defaultPriceId },
}) => {
  // const [isRedirectingToCheckout, setIsRedirectingToCheckout] = useState(false)
  const { addProduct } = useCart()

  // const handleCreateCheckoutWithProduct = async () => {
  //   try {
  //     setIsRedirectingToCheckout(true)
  //     await closeCart()
  //   } catch (error) {
  //   } finally {
  //     setIsRedirectingToCheckout(false)
  //   }
  // }

  const handleAddProductToCart = () => addProduct(defaultPriceId)

  return (
    <CardContainer key={id}>
      <CardImageContainer>
        <CardImage src={src} alt={name} width={520} height={480} />
      </CardImageContainer>
      <CardDetails>
        <h1 className="text-[2rem] text-gray-300 font-bold">{name}</h1>
        <span className="mt-4 text-[2rem] text-green-300 font-medium">
          {price}
        </span>
        <p className="mt-10 text-lg leading-relaxed text-gray-300">
          {description}
        </p>
        <CardButton onClick={handleAddProductToCart}>Buy now</CardButton>
      </CardDetails>
    </CardContainer>
  )
}
