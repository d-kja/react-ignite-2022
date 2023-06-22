import { checkoutFormSchema, CheckoutFormType } from './@types/checkout-form'

import { CheckoutContainer } from './checkout.style'
import { CheckoutSummaryForm } from './components/CheckoutSummary'
import { OrderForm } from './components/OrderForm'

import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/Cart/CartContext'

export const Checkout = () => {
  const navigate = useNavigate()
  const { clearCart } = useCart()
  const CheckoutFormHook = useForm<CheckoutFormType>({
    resolver: zodResolver(checkoutFormSchema),
  })

  const { handleSubmit, watch, setValue } = CheckoutFormHook
  const cepValue = watch('cep')

  useEffect(() => {
    const prefetchAddressWithCep = async () => {
      if (!cepValue || (cepValue && cepValue.length < 8)) return

      const unmaskedCep = cepValue.replace(/-/, '')
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${unmaskedCep}/json/`,
        )
        const addressData = await response.json()

        setValue('uf', addressData.uf)
        setValue('address', addressData.logradouro)
        setValue('city', addressData.localidade)
      } catch (error) {
        console.error(
          "[Checkout/form] - An error ocurred while fetching address data with the user's CEP",
          error,
        )
      }
    }

    prefetchAddressWithCep()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cepValue])

  const onCheckoutFormSubmit: SubmitHandler<CheckoutFormType> = async (
    data,
  ) => {
    try {
      await toast.promise<any>(
        new Promise((resolve) => setTimeout(() => resolve(true), 2000)),
        {
          loading: 'Processando...',
          success: <span>Pedido realizado com sucesso!</span>,
          error: <span>Não conseguimos proceder com o pedido</span>,
        },
      )

      toast.loading('Redirecionando...', {
        duration: 1000,
      })

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(true)
        }, 1500),
      )

      clearCart()
      localStorage.setItem(
        '@coffee-delivery/user-address-v1.0.0',
        JSON.stringify(data),
      )
      navigate('/summary')
    } catch (error) {}
  }

  return (
    <FormProvider {...CheckoutFormHook}>
      <CheckoutContainer onSubmit={handleSubmit(onCheckoutFormSubmit)}>
        <OrderForm />
        <CheckoutSummaryForm />
      </CheckoutContainer>
    </FormProvider>
  )
}
