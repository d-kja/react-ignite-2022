import { SubmitHandler, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'lucide-react'

import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { FormAnnotation, FormContainer } from './styles'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Minimo de 3 letras' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'Nome só de pode ter letras de A-Z e hifens',
    }),
})

type claimUsernameFormFieldsType = z.infer<typeof claimUsernameFormSchema>

export const ClaimUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<claimUsernameFormFieldsType>({
    resolver: zodResolver(claimUsernameFormSchema),
  })
  const router = useRouter()

  const claimUsernameFormSubmit: SubmitHandler<
    claimUsernameFormFieldsType
  > = async (data) => {
    const { username } = data

    router.push(`/register?username=${username}`)
  }

  return (
    <>
      <FormContainer as="form" onSubmit={handleSubmit(claimUsernameFormSubmit)}>
        <TextInput
          size={'sm'}
          prefix="ignite.com/"
          placeholder="seu-usuario"
          {...register('username')}
        />
        <Button size={'sm'} type="submit" disabled={isSubmitting}>
          Reservar <ArrowRight />
        </Button>
      </FormContainer>

      <FormAnnotation>
        <Text as="span">
          {errors.username
            ? errors.username.message
            : 'Digite o nome de usuario desejado'}
        </Text>
      </FormAnnotation>
    </>
  )
}
