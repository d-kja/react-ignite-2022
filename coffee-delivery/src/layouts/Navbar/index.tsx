import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import { NavLink, Outlet } from 'react-router-dom'
import { Button } from '../../components/primitives/Buttons/Default'
import { IconButton } from '../../components/primitives/Buttons/IconButton'
import { useCart } from '../../context/Cart/CartContext'
import {
  AmountOfProducts,
  NavbarContainer,
  NavbarImage,
  NavbarOptions,
} from './navbar.style'

export function Navbar() {
  const { products } = useCart()

  const productsAmount = products.length

  return (
    <>
      <NavbarContainer>
        <NavLink to="/">
          <NavbarImage src="/Logo.svg" alt="Coffee Delivery logo" />
        </NavLink>
        <NavbarOptions>
          <Button variant="secondary-alt" size="sm">
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </Button>
          <NavLink to={productsAmount > 0 ? '/checkout' : '/'}>
            <IconButton variant="primary-alt">
              <ShoppingCartSimple size={22} weight="fill" />
              <AmountOfProducts amount={String(productsAmount)} />
            </IconButton>
          </NavLink>
        </NavbarOptions>
      </NavbarContainer>
      <Outlet />
    </>
  )
}
