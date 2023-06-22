import { useState } from 'react'

import { IconButton } from '../../primitives/Buttons/IconButton'
import { SelectAmount } from '../../primitives/Select'
import {
  CardBody,
  CardContainer,
  CardImage,
  CardInfo,
  CardOptions,
  CardText,
  PriceContainer,
  Tag,
  TagsContainer,
} from './card.style'

import { ShoppingCartSimple } from '@phosphor-icons/react'
import { useCart } from '../../../context/Cart/CartContext'

type Product = {
  id: string
  name: string
  description: string
  tags: string[]
  price: number
  imageUrl: string
}

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addProduct } = useCart()

  const { description, imageUrl, name, price, tags } = product
  const [amount, setAmount] = useState(1)

  const priceInDefaultFormat = price / 100

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(priceInDefaultFormat)
    .replace('R$', '')
    .trim()

  const changeProductQuantity = (value: number) => setAmount(value)

  const handleAddProduct = () => {
    addProduct({
      product,
      quantity: amount,
    })
  }

  return (
    <CardContainer title={name}>
      <CardImage src={imageUrl} alt={`${name} preview`} />
      <CardBody>
        <CardInfo>
          <TagsContainer>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagsContainer>
          <CardText>
            <strong>{name}</strong>
            <span>{description}</span>
          </CardText>
        </CardInfo>
        <CardOptions>
          <PriceContainer>
            R$ <strong>{formattedPrice}</strong>
          </PriceContainer>
          <div>
            <SelectAmount onChange={changeProductQuantity} value={amount} />
            <IconButton variant="secondary" onClick={handleAddProduct}>
              <ShoppingCartSimple weight="fill" />
            </IconButton>
          </div>
        </CardOptions>
      </CardBody>
    </CardContainer>
  )
}
