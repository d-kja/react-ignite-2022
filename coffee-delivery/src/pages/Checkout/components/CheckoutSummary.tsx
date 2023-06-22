import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductCardSmall } from '../../../components/Cards/ProductCardSmall'
import { Button } from '../../../components/primitives/Buttons/Default'
import { useCart } from '../../../context/Cart/CartContext'
import {
  CheckoutSummary,
  CheckoutSummaryCard,
  Divider,
  SummaryPrice,
  SummaryPriceContainer,
} from '../checkout.style'

export const CheckoutSummaryForm = () => {
  const navigate = useNavigate()
  const { products = [] } = useCart()

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  useEffect(() => {
    if (products.length === 0) {
      navigate('/')
    }
  }, [products, navigate])

  const totalCart = products.reduce((acc, product) => {
    const productPrice = (product.price / 100) * (product.quantity ?? 1)

    return acc + productPrice
  }, 0)

  const shippingTax = 3.5
  const formattedTotalCart = formatter.format(totalCart)
  const formattedShippingTax = formatter.format(shippingTax)
  const formattedTotalSum = formatter.format(shippingTax + totalCart)

  return (
    <CheckoutSummary>
      <strong>Cafés selecionados</strong>
      <CheckoutSummaryCard className="mt-4">
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <ProductCardSmall product={product} />
              <Divider />
            </div>
          ))}
          <SummaryPriceContainer>
            <SummaryPrice>
              <p>Total de itens</p>
              <span>{formattedTotalCart}</span>
            </SummaryPrice>
            <SummaryPrice>
              <p>Entrega</p>
              <span>{formattedShippingTax}</span>
            </SummaryPrice>
            <SummaryPrice>
              <strong>Total</strong>
              <strong>{formattedTotalSum}</strong>
            </SummaryPrice>
          </SummaryPriceContainer>
        </div>

        <Button variant="primary" size="full" type="submit">
          CONFIRMAR PEDIDO
        </Button>
      </CheckoutSummaryCard>
    </CheckoutSummary>
  )
}
