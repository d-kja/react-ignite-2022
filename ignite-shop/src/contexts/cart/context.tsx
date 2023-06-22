import { FC, createContext, useContext, useEffect, useReducer } from 'react'

import { stripeClient } from '@/lib/stripe'
import axios from 'axios'

import { addProductAction, removeProductAction } from './utils/actions'
import { cartReducer } from './utils/reducer'
import type {
  CartContextType,
  CartProviderProps,
  ProductType,
} from './utils/types'

import { priceFormatter } from '@/lib/utils/formatter'
import { toasterClasses } from '@/lib/utils/toaster'
import { toast } from 'react-hot-toast'

const CartContext = createContext({} as CartContextType)

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(
    cartReducer,
    [],
    (initialState) => {
      const storedCartStateJSON = localStorage.getItem(
        '@ignite-shop/cart-state-1.0.0',
      )

      if (storedCartStateJSON) {
        return JSON.parse(storedCartStateJSON)
      }

      return initialState
    },
  )

  const addProduct = async (id: string) => {
    await fetch(`/api/product/${id}`, {
      cache: 'force-cache',
      next: {
        revalidate: 60 * 60 * 24 * 300, // 300 days
      },
    })
      .then((res) => res.json())
      .then((data: { product: ProductType }) => {
        const product = data.product
        const formattedPrice = priceFormatter.format(
          (product.unit_amount ?? 0) / 100,
        )
        cartDispatch(addProductAction({ ...product, formattedPrice }))
      })
  }
  const removeProduct = (id: string) =>
    cartDispatch(removeProductAction({ id }))

  const closeCart = async () => {
    try {
      toast.loading('Redirecting to checkout', {
        duration: 1000 * 3, // 3 seconds
        className: toasterClasses,
      })

      const cartItems = cartState.map((product) => ({
        price: product.id,
        quantity: product.quantity,
      }))

      const createCheckoutSessionResponse = await axios.post(
        '/api/checkout/session',
        {
          products: cartItems,
        },
      )

      const { session } = createCheckoutSessionResponse.data

      localStorage.removeItem('@ignite-shop/cart-state-1.0.0')

      // 1° to redirect the client to another application
      // window.location.href = session.url

      // 2² way is using stripe-client-sdk
      const stripe = await stripeClient()
      await stripe?.redirectToCheckout({
        sessionId: session.id,
      })
    } catch (error) {
      toast.error('Failed to redirect to checkout')
      console.log(error)
    }
  }

  useEffect(() => {
    const cartStateAsJSON = JSON.stringify(cartState)
    localStorage.setItem('@ignite-shop/cart-state-1.0.0', cartStateAsJSON)
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        cart: cartState,
        addProduct,
        removeProduct,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
