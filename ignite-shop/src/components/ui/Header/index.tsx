import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/Logo.png'

import { CartModal } from './Cart/CartModal'
import { HeaderComponent } from './styles'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <HeaderComponent>
      <Link href="/" title="Go back to home">
        <Image src={logo} loading="lazy" alt="logo" />
      </Link>

      <CartModal />
    </HeaderComponent>
  )
}
