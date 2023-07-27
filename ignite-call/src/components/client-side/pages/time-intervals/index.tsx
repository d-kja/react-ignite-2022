'use client'

import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Container, Header } from '../register/styles'
import {
  FormError,
  IntervalBox,
  IntervalContainer,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
} from './styles'

import { api } from '@/lib/axios'
import { getWeekDays } from '@/utils/date/get-week-days'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form'
import {
  TimeIntervalsFormInput,
  TimeIntervalsFormOutput,
  TimeIntervalsFormType,
  defaultIntervalsValue,
  timeIntervalsFormSchema,
} from './time-intervals-form'

export function TimeIntervals() {
  const {
    control,
    register,
    watch,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<TimeIntervalsFormInput, any, TimeIntervalsFormOutput>({
    resolver: zodResolver(timeIntervalsFormSchema),
    defaultValues: {
      intervals: defaultIntervalsValue,
    },
  })

  const { fields } = useFieldArray({
    control,
    name: 'intervals',
  })

  const router = useRouter()

  const intervals = watch('intervals')
  const weekDays = getWeekDays()

  const handleSetTimeIntervals: SubmitHandler<TimeIntervalsFormType> = async (
    data,
  ) => {
    const { intervals } = data

    await api.post('/users/time-intervals', { intervals })
    router.push('/register/update-bio')
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Quase lá</Heading>
        <Text>
          Defina o intervalo de horário que você está disponível em cada dia da
          semana.
        </Text>

        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox as="form" onSubmit={handleSubmit(handleSetTimeIntervals)}>
        <IntervalContainer>
          {fields.map((field, index) => (
            <IntervalItem key={field.id}>
              <IntervalDay>
                <Controller
                  name={`intervals.${index}.checked`}
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(isChecked) =>
                        field.onChange(isChecked === true)
                      }
                    />
                  )}
                />
                <Text>{weekDays[field.weekDay]}</Text>
              </IntervalDay>
              <IntervalInputs>
                <TextInput
                  size="sm"
                  type="time"
                  step={60}
                  disabled={intervals[index].checked === false}
                  {...register(`intervals.${index}.startTime`)}
                />
                <TextInput
                  size="sm"
                  type="time"
                  step={60}
                  disabled={intervals[index].checked === false}
                  {...register(`intervals.${index}.endTime`)}
                />
              </IntervalInputs>
            </IntervalItem>
          ))}
        </IntervalContainer>

        {errors.intervals && <FormError>{errors.intervals.message}</FormError>}

        <Button type="submit" disabled={isSubmitting}>
          Próximo passo
          <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  )
}
