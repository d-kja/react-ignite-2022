import { Cycle } from './reducer'

export const addNewCycleAction = (newCycle: Cycle) => ({
  type: 'ADD' as const,
  payload: {
    data: newCycle,
  },
})
export const markActiveCycleAsFinishedAction = () => ({
  type: 'FINISH_CURRENT' as const,
  payload: {
    data: null,
  },
})
export const markActiveCycleAsInterruptedAction = () => ({
  type: 'INTERRUPT_CURRENT' as const,
  payload: {
    data: null,
  },
})
export const changeActiveCycleAction = (cycleId: string) => ({
  type: 'CHANGE_CURRENT_CYCLE' as const,
  payload: {
    data: cycleId,
  },
})
