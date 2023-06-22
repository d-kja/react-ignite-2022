import type {
  CartAction,
  addProductPayload,
  removeProductPayload,
} from './types'

export const addProductAction = (product: addProductPayload): CartAction => ({
  type: 'ADD',
  payload: {
    data: product,
  },
})

export const removeProductAction = ({
  id,
}: removeProductPayload): CartAction => ({
  type: 'REMOVE',
  payload: {
    data: { id },
  },
})
