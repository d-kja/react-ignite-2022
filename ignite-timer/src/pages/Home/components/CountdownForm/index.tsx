import { Tooltip } from '../../../../components/Tooltip'
import { FormContainer, TaskInput, TimeInput } from './styles'

import { useFormContext } from 'react-hook-form'
import { useCyclesContext } from '../../../../context/CyclesContext'
import { TNewCycleFormData } from '../../index'

export const CountdownForm = () => {
  const { activeCycle } = useCyclesContext()
  const {
    register,
    formState: { errors },
  } = useFormContext<TNewCycleFormData>()

  const isDisabled = !!activeCycle

  return (
    <FormContainer aria-describedby="Work form">
      <label htmlFor="task">{"I'm going to work with"}</label>
      <Tooltip message={errors.task?.message ?? ''}>
        <TaskInput
          id="task"
          list="task-suggestion"
          placeholder="Give it a name"
          disabled={isDisabled}
          {...register('task')}
        />
      </Tooltip>

      <datalist id="task-suggestion">
        <option value="Banana =D" />
      </datalist>

      <label htmlFor="minutesAmount">for</label>
      <Tooltip message={errors.minutesAmount?.message ?? ''}>
        <TimeInput
          type="number"
          id="minutesAmount"
          step={5}
          placeholder="00"
          disabled={isDisabled}
          {...register('minutesAmount', {
            valueAsNumber: true,
          })}
        />
      </Tooltip>
      <span>minutes</span>
    </FormContainer>
  )
}
