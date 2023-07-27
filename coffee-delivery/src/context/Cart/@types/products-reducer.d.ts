type ActionOptions = 'ADD' | 'REMOVE' | 'DELETE' | 'CLEAR'

export type ActionType = {
  type: ActionOptions
  payload: {
    data: any
  }
}
