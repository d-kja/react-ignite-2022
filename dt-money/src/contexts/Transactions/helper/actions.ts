import { ReducerPayload, Transaction } from '../@types/transactions'

export const setInitialDataTransactionAction = (
  data: Transaction[],
): ReducerPayload => ({
  type: 'SET_INITIAL_DATA',
  payload: {
    data,
  },
})
export const addTransactionAction = (data: Transaction): ReducerPayload => ({
  type: 'ADD',
  payload: {
    data,
  },
})
