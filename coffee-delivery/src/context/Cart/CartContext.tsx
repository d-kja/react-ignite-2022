import { Product } from './@types/cart-context'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import {
  addNewProductAction,
  AddNewProductActionType,
  clearProductAction,
  deleteProductAction,
  removeProductAction,
} from './reducers/Products/action'
import { ProductsReducer } from './reducers/Products/reducer'

interface CartContextProps {
  products: Product[]
  addProduct: (data: AddNewProductActionType) => void
  removeProduct: (productId: string) => void
  deleteProduct: (productId: string) => void
  clearCart: () => void
}

const CartContext = createContext({} as CartContextProps)

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [products, dispatch] = useReducer(
    ProductsReducer,
    [],
    (initialState) => {
      const cartStorageData = localStorage.getItem(
        '@Coffee-delivery/products-v1.0.0',
      )

      if (cartStorageData) {
        return JSON.parse(cartStorageData)
      }

      return initialState
    },
  )

  useEffect(() => {
    const stringifiedProducts = JSON.stringify(products)
    localStorage.setItem(
      '@Coffee-delivery/products-v1.0.0',
      stringifiedProducts,
    )
  }, [products])

  const addProduct = ({ product, quantity }: AddNewProductActionType) =>
    dispatch(
      addNewProductAction({
        product,
        quantity,
      }),
    )

  const removeProduct = (productId: string) =>
    dispatch(removeProductAction(productId))

  const deleteProduct = (productId: string) =>
    dispatch(deleteProductAction(productId))

  const clearCart = () => dispatch(clearProductAction())

  return (
    <CartContext.Provider
      value={{ products, addProduct, removeProduct, deleteProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
