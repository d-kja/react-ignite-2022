import { Trash } from '@phosphor-icons/react'
import { Product } from '../../../context/Cart/@types/cart-context'
import { useCart } from '../../../context/Cart/CartContext'
import { SelectAmount } from '../../primitives/Select'
import {
  ProductCardSimpleButton,
  ProductCardSimpleContainer,
  ProductCardSimpleControls,
  ProductCardSimpleDisplay,
  ProductCardSimpleImage,
  ProductCardSimpleInfo,
} from './ProductCardSimple.style'

interface ProductCardSmallProps {
  product: Product
}

export const ProductCardSmall = ({ product }: ProductCardSmallProps) => {
  const { id, imageUrl, name, price: rawPrice, quantity = 1 } = product
  const { deleteProduct, removeProduct, addProduct } = useCart()

  const priceInDefaultFormat = (rawPrice / 100) * quantity

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(priceInDefaultFormat)

  const price = formattedPrice

  const handleRemoveProduct = () => {
    deleteProduct(id)
  }

  const handleUpdateProduct = (amount: any) => {
    if (quantity < amount) {
      addProduct({
        product,
        quantity: amount - quantity,
      })
      return
    }

    removeProduct(id)
  }

  return (
    <ProductCardSimpleContainer>
      <ProductCardSimpleImage src={imageUrl} alt={name} />
      <ProductCardSimpleInfo>
        <ProductCardSimpleDisplay>
          <p>{name}</p>
          <strong>{price}</strong>
        </ProductCardSimpleDisplay>
        <ProductCardSimpleControls>
          <SelectAmount onChange={handleUpdateProduct} value={quantity} />
          <ProductCardSimpleButton
            type="button"
            variant="base"
            size="sm"
            onClick={handleRemoveProduct}
          >
            <Trash size={16} />
            REMOVER
          </ProductCardSimpleButton>
        </ProductCardSimpleControls>
      </ProductCardSimpleInfo>
    </ProductCardSimpleContainer>
  )
}
