export type Transaction = {
  id: number
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
  createdAt: string
}

type ReducerPayloadType = 'ADD' | 'REMOVE' | 'UPDATE' | 'SET_INITIAL_DATA'

export type ReducerPayload = {
  type: ReducerPayloadType
  payload: {
    data: any
  }
}
