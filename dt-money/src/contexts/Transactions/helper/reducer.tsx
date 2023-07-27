import { ReducerPayload, Transaction } from '../@types/transactions'

import produce from 'immer'

export const transactionsReducer = (
  state: Transaction[],
  action: ReducerPayload,
) => {
  switch (action.type) {
    case 'SET_INITIAL_DATA': {
      return action.payload.data
    }

    case 'ADD': {
      const updatedState = produce(state, (draft) => {
        draft.unshift(action.payload.data)
        return draft
      })

      return updatedState
    }

    default:
      return state
  }
}
