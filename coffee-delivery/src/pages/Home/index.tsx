import {
  Coffee,
  Package,
  ShoppingCartSimple,
  Timer,
} from '@phosphor-icons/react'
import { ProductCard } from '../../components/Cards/ProductCard'

import { products } from '../../in-memory/api-data'
import {
  Header,
  HeaderImage,
  HeaderInfo,
  HeaderTitleContent,
  HomeContainer,
  HomeContent,
  Item,
  ProductsContainer,
  ProductsSection,
  ProductsTitle,
} from './home.style'

export const Home = () => {
  return (
    <HomeContainer>
      <HomeContent>
        <Header>
          <div>
            <HeaderTitleContent>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </HeaderTitleContent>
            <HeaderInfo>
              <div>
                <Item variant="orange">
                  <ShoppingCartSimple weight="fill" />
                  Compra simples e segura
                </Item>

                <Item variant="yellow">
                  <Timer weight="fill" />
                  Entrega rápida e rastreada
                </Item>
              </div>

              <div>
                <Item variant="gray">
                  <Package weight="fill" />
                  Embalagem mantém o café intacto
                </Item>

                <Item variant="purple">
                  <Coffee weight="fill" /> O café chega fresquinho até você
                </Item>
              </div>
            </HeaderInfo>
          </div>

          <HeaderImage src="/coffee-example.svg" alt="Coffee example" />
        </Header>
        <ProductsSection title="Products">
          <ProductsTitle title="Title">Nossos cafés</ProductsTitle>
          <ProductsContainer>
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </ProductsContainer>
        </ProductsSection>
      </HomeContent>
    </HomeContainer>
  )
}
