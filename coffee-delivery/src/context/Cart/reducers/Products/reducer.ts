import produce from 'immer'
import { Product } from '../../@types/cart-context'
import { ActionType } from '../../@types/products-reducer'
import { AddNewProductActionType } from './action'

export const ProductsReducer = (state: Product[], action: ActionType) => {
  switch (action.type) {
    case 'ADD': {
      const { product: newProduct, quantity: newProductQuantity } = action
        .payload.data as AddNewProductActionType

      const mutatedProductState = produce(state, (draft) => {
        const productIndex = draft.findIndex(
          (product) => product.id === newProduct.id,
        )

        if (productIndex >= 0) {
          const productQuantity = draft[productIndex]?.quantity ?? 0
          draft[productIndex].quantity = productQuantity + newProductQuantity

          return draft
        }

        const copyOfProduct = { ...newProduct, quantity: newProductQuantity }
        draft.push(copyOfProduct)
        return draft
      })

      console.info('[Reducer] - Updating values', {
        state,
        action,
        mutatedProductState,
      })

      return mutatedProductState
    }

    case 'REMOVE': {
      const productIdToBeRemoved = action.payload.data

      const mutatedProductState = produce(state, (draft) => {
        const productIndex = draft.findIndex(
          (product) => product.id === productIdToBeRemoved,
        )

        if (productIndex >= 0) {
          const productQuantity = draft[productIndex]?.quantity ?? 0
          draft[productIndex].quantity = productQuantity - 1
          return draft
        }

        draft.filter((product) => product.id !== productIdToBeRemoved)
        return draft
      })

      return mutatedProductState
    }

    case 'DELETE': {
      const productIdToDelete = action.payload.data

      const mutatedProductState = produce(state, (draft) =>
        draft.filter((product) => product.id !== productIdToDelete),
      )

      return mutatedProductState
    }

    case 'CLEAR':
      return []

    default:
      return state
  }
}
