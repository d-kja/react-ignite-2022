import { CountdownDisplay } from './components/CountdownDisplay'
import { CountdownForm } from './components/CountdownForm'
import { HomeContainer, StartButton, StopButton } from './styles'

import { HandPalm, Play } from 'phosphor-react'

import { useCyclesContext } from '../../context/CyclesContext'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const newCycleFormValidationSchema = z.object({
  task: z.string().trim().min(1, 'Inform the task'),
  minutesAmount: z.number().min(5).max(60),
})
export type TNewCycleFormData = z.infer<typeof newCycleFormValidationSchema>

export const Home = () => {
  const {
    activeCycle,
    markActiveCycleAsInterrupted,
    addNewCycle,
    changeAmountSecondsPassed,
    changeActiveCycle,
  } = useCyclesContext()
  const newCycleForm = useForm<TNewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      minutesAmount: 25,
      task: '',
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const handleNewCycleFormSubmit: SubmitHandler<TNewCycleFormData> = (data) => {
    const id = String(new Date().getTime())

    const newCycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startTime: new Date(),
    }

    addNewCycle(newCycle)
    changeAmountSecondsPassed(0)
    changeActiveCycle(id)

    reset()
  }

  const taskValue = watch('task')
  const isSubmitDisabled = !taskValue

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleNewCycleFormSubmit)}>
        <FormProvider {...newCycleForm}>
          <CountdownForm />
        </FormProvider>
        <CountdownDisplay />

        {activeCycle ? (
          <StopButton type="button" onClick={markActiveCycleAsInterrupted}>
            <HandPalm size={24} />
            Stop
          </StopButton>
        ) : (
          <StartButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Start
          </StartButton>
        )}
      </form>
    </HomeContainer>
  )
}
