'use client'

import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'lucide-react'
import { Container, Form, FormError, Header } from './styles'

import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@lib/axios'
import { AxiosError } from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { z } from 'zod'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa de pelo menos 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, { message: 'Apenas letras de A-Z e hiphens' })
    .transform((value) => value.toLocaleLowerCase()),
  name: z
    .string()
    .min(3, { message: 'O usuário precisa de pelo menos 3 letras.' }),
})

type RegisterFormType = z.infer<typeof registerFormSchema>

export const RegisterPage = () => {
  const queryParams = useSearchParams()
  const router = useRouter()

  const usernameQueryParam = queryParams.get('username')

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setValue,
  } = useForm<RegisterFormType>({
    resolver: zodResolver(registerFormSchema),
  })

  useEffect(() => {
    if (usernameQueryParam) setValue('username', usernameQueryParam)
    return () => setValue('username', '')
  }, [usernameQueryParam, setValue])

  const handleRegisterForm: SubmitHandler<RegisterFormType> = async (data) => {
    try {
      const { name, username } = data

      await api.post('/users', {
        username,
        name,
      })

      router.push('/register/connect-calendar')
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message)
      }

      console.error('[Register/handle-register-form] - an error ocurred', error)
    }
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>

      <Form as="form" onSubmit={handleSubmit(handleRegisterForm)}>
        <label>
          <Text size="sm">Nome de usuário</Text>
          <TextInput
            prefix="ignite.com/"
            placeholder="seu-usuário"
            {...register('username')}
          />
          {errors.username && (
            <FormError size="sm">{errors.username.message}</FormError>
          )}
        </label>

        <label>
          <Text size="sm">Nome completo</Text>
          <TextInput placeholder="Seu nome" {...register('name')} />
          {errors.name && (
            <FormError size="sm">{errors.name.message}</FormError>
          )}
        </label>

        <Button type="submit" disabled={isSubmitting}>
          Próximo passo
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
