import { differenceInSeconds } from 'date-fns'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  addNewCycleAction,
  changeActiveCycleAction,
  markActiveCycleAsFinishedAction,
  markActiveCycleAsInterruptedAction,
} from '../reducers/cycles/actions'
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer'

type CyclesContextType = {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  addNewCycle: (cycle: Cycle) => void
  changeActiveCycle: (id: string) => void
  changeAmountSecondsPassed: (value: number) => void
  markActiveCycleAsFinished: () => void
  markActiveCycleAsInterrupted: () => void
}

const CyclesContext = createContext({} as CyclesContextType)

interface CyclesProviderProps {
  children: ReactNode
}

export const CyclesProvider = ({ children }: CyclesProviderProps) => {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      activeCycleId: null,
      cycles: [],
    },
    (initialState) => {
      const storedCyclesStateJSON = localStorage.getItem(
        '@ignite-timer/cycles-state-1.0.0',
      )

      if (storedCyclesStateJSON) {
        return JSON.parse(storedCyclesStateJSON)
      }

      return initialState
    },
  )

  const { activeCycleId, cycles } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle)
      return differenceInSeconds(new Date(), new Date(activeCycle.startTime))

    return 0
  })

  useEffect(() => {
    const cyclesStateAsJSON = JSON.stringify(cyclesState)
    localStorage.setItem('@ignite-timer/cycles-state-1.0.0', cyclesStateAsJSON)
  }, [cyclesState])

  const addNewCycle = (newCycle: Cycle) => {
    dispatch(addNewCycleAction(newCycle))
  }

  const changeAmountSecondsPassed = (value: number) =>
    setAmountSecondsPassed(value)

  const markActiveCycleAsFinished = () => {
    dispatch(markActiveCycleAsFinishedAction())
  }

  const markActiveCycleAsInterrupted = () => {
    dispatch(markActiveCycleAsInterruptedAction())
  }

  const changeActiveCycle = (cycleId: string) =>
    dispatch(changeActiveCycleAction(cycleId))

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        addNewCycle,
        changeActiveCycle,
        changeAmountSecondsPassed,
        markActiveCycleAsFinished,
        markActiveCycleAsInterrupted,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}

export const useCyclesContext = () => useContext(CyclesContext)
