import produce from 'immer'

export type Cycle = {
  id: string
  task: string
  minutesAmount: number
  startTime: Date
  interruptedDate?: Date
  finishedDate?: Date
}

type CyclesReducerStateType = {
  cycles: Cycle[]
  activeCycleId: string | null
}

type ActionTypes =
  | 'ADD'
  | 'UPDATE_CURRENT'
  | 'INTERRUPT_CURRENT'
  | 'FINISH_CURRENT'
  | 'CHANGE_CURRENT_CYCLE'

type CyclesReducerActionType = {
  type: ActionTypes
  payload: {
    data: any
  }
}

export function cyclesReducer(
  state: CyclesReducerStateType,
  action: CyclesReducerActionType,
) {
  switch (action.type) {
    case 'ADD':
      return produce(state, (draft) => {
        draft.activeCycleId = action.payload.data.id
        draft.cycles.push(action.payload.data)
      })

    case 'FINISH_CURRENT': {
      const activeCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      )

      if (activeCycleIndex < 0) return state

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[activeCycleIndex].finishedDate = new Date()
      })
    }

    case 'INTERRUPT_CURRENT': {
      const activeCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      )

      if (activeCycleIndex < 0) return state

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[activeCycleIndex].interruptedDate = new Date()
      })
    }

    case 'CHANGE_CURRENT_CYCLE':
      return produce(state, (draft) => {
        draft.activeCycleId = action.payload.data
      })

    default:
      return state
  }
}
