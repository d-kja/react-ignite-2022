import { Product } from '../../@types/cart-context'
import { ActionType } from '../../@types/products-reducer'

export interface AddNewProductActionType {
  product: Product
  quantity: number
}

export const addNewProductAction = (
  data: AddNewProductActionType,
): ActionType => ({
  type: 'ADD',
  payload: {
    data,
  },
})

export const removeProductAction = (productId: string): ActionType => ({
  type: 'REMOVE',
  payload: {
    data: productId,
  },
})

export const deleteProductAction = (productId: string): ActionType => ({
  type: 'DELETE',
  payload: {
    data: productId,
  },
})
export const clearProductAction = (): ActionType => ({
  type: 'CLEAR',
  payload: {
    data: null,
  },
})
