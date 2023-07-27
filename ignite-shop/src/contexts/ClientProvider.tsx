'use client'

import { FC, ReactNode } from 'react'
import { CartProvider } from './cart/context'

interface ClientProviderProps {
  children: ReactNode
}

export const ClientProvider: FC<ClientProviderProps> = ({ children }) => {
  return (
    <>
      <CartProvider>{children}</CartProvider>
    </>
  )
}
