import type { ReactNode } from 'react'

// Context types

export type ProductType = {
  id: string
  product: {
    id: string
    default_price: string
    description: string
    images: string[]
    name: string
  }
  unit_amount: number
  formattedPrice?: string
  quantity?: number
}

export interface CartProviderProps {
  children: ReactNode
}

export interface CartContextType {
  cart: ProductType[]
  addProduct: (id: string) => void
  removeProduct: (id: string) => void
  closeCart: () => Promise<void>
}

// Reducer types

export type CartState = (ProductType & {
  quantity: number
})[]

// Actions types

type CartActionTypes = 'ADD' | 'REMOVE'
export type CartAction = {
  type: CartActionTypes
  payload: {
    data: any
  }
}

export type addProductPayload = ProductType
export type removeProductPayload = { id: string }
