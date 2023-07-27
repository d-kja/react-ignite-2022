import { api } from '@/lib/axios'
import { dayFormat } from '@/lib/dayjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { Clock } from 'lucide-react'
import { useParams } from 'next/navigation'
import { CalendarBlank } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { z } from 'zod'
import { ConfirmForm, FormActions, FormError, FormHeader } from './styles'

const confirmFormSchema = z.object({
  name: z.string().min(3, { message: 'O nome precisa no mínimo 3 caracteres' }),
  email: z.string().email({ message: 'Digite um e-mail válido' }),
  observations: z.string().nullable(),
})

type ConfirmFormData = z.infer<typeof confirmFormSchema>

interface ConfirmStepProps {
  scheduleDate: Date
  onCancelSchedule: () => void
}

export function ConfirmStep({
  onCancelSchedule,
  scheduleDate,
}: ConfirmStepProps) {
  const params = useParams()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormSchema),
  })

  const username = params.username

  async function handleConfirmScheduling(data: ConfirmFormData) {
    const { email, name, observations } = data

    try {
      const response = await api.post(`/users/${username}/schedule`, {
        email,
        name,
        observations,
        date: scheduleDate,
      })

      toast.success(response.data?.message)
    } catch (error: any) {
      toast.error(error?.response?.data?.message ?? 'Não foi possivel agendar')
    } finally {
      onCancelSchedule()
    }
  }

  const formattedDate = dayFormat(scheduleDate, 'DD[ de ]MMMM[ de ]YYYY')
  const formattedTime = dayFormat(scheduleDate, 'HH:mm[h]')

  return (
    <ConfirmForm as="form" onSubmit={handleSubmit(handleConfirmScheduling)}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          {formattedDate}
        </Text>
        <Text>
          <Clock />
          {formattedTime}
        </Text>
      </FormHeader>

      <label>
        <Text size="sm">Nome completo</Text>
        <TextInput placeholder="Seu nome" {...register('name')} />
        {errors.name && <FormError size="sm">{errors.name.message}</FormError>}
      </label>

      <label>
        <Text size="sm">Endereço de e-mail</Text>
        <TextInput
          type="email"
          placeholder="johndoe@example.com"
          {...register('email')}
        />
        {errors.email && (
          <FormError size="sm">{errors.email.message}</FormError>
        )}
      </label>

      <label>
        <Text size="sm">Observações</Text>
        <TextArea {...register('observations')} />
      </label>

      <FormActions>
        <Button type="button" variant="tertiary" onClick={onCancelSchedule}>
          Cancelar
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          Confirmar
        </Button>
      </FormActions>
    </ConfirmForm>
  )
}