import { produce } from 'immer'
import { CartAction, CartState, addProductPayload } from './types'

export const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case 'ADD': {
      const product = action.payload.data as addProductPayload
      const productIndex = state.findIndex((item) => item.id === product.id)

      return produce(state, (draft) => {
        if (productIndex < 0) {
          draft.push({
            ...product,
            quantity: 1,
          })
        } else {
          draft[productIndex].quantity += 1
        }
      })
    }
    case 'REMOVE': {
      const productId = action.payload.data.id
      const productIndex = state.findIndex((item) => item.id === productId)
      if (productIndex < 0) return state

      return produce(state, (draft) => {
        const productQuantity = draft[productIndex].quantity

        if (productQuantity > 1) {
          draft[productIndex].quantity -= 1
        } else {
          return draft.filter((item) => item.id !== productId)
        }
      })
    }

    default: {
      console.error('[Cart-reducer] - payload', action)
      throw new Error('[Cart-reducer] - Invalid action')
    }
  }
}
