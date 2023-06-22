'use client'

import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Handbag } from '@phosphor-icons/react'
import styled from 'windstitch'

import { useCart } from '@/contexts/cart/context'
import { priceFormatter } from '@/lib/utils/formatter'
import { IconButton } from '../Buttons/IconButton'

const CardComponent = styled(Link, {
  className:
    'bg-gradient-to-b from-[#1ea483] to-[#7465d4] rounded-lg p-1 relative flex items-center justify-center group overflow-hidden group',
})

const ImageComponent = styled(Image, {
  className:
    'object-cover group-hover:scale-110 transition-transform ease-in-out duration-200',
})

const FooterComponent = styled('footer', {
  className:
    'absolute left-1 bottom-1 right-1 rounded flex items-center justify-between bg-black/60 p-8 translate-y-[110%] opacity-0 transition-all duration-200 easy-in-out group-hover:opacity-100 group-hover:translate-y-0',
})

interface CardProps {
  product: {
    id: string
    src: string
    name: string
    price: number
    priceId: string
  }
  alt?: string
  className?: string
}

export const Card: FC<CardProps> = ({
  product: { id, name, price, src, priceId },
  alt = '',
  className = '',
}) => {
  const { addProduct } = useCart()

  const formattedPrice = priceFormatter.format(price)

  const handleAddProduct = (event: any) => {
    event.preventDefault() // avoid anchor tag redirect
    addProduct(priceId)
  }

  return (
    <CardComponent
      href={`/products/${id}`}
      prefetch={false}
      className={className}
    >
      <ImageComponent src={src} alt={alt} width={520} height={480} />
      <FooterComponent>
        <div className="flex flex-col gap-1">
          <strong className="text-xl">{name}</strong>
          <span className="text-2xl font-bold text-green-300">
            {formattedPrice}
          </span>
        </div>
        <IconButton as="button" scheme="primary" onClick={handleAddProduct}>
          <Handbag size={24} />
        </IconButton>
      </FooterComponent>
    </CardComponent>
  )
}
