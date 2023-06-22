import * as Dialog from '@radix-ui/react-dialog'
import {
  ModalCloseButton,
  ModalContent,
  ModalForm,
  ModalHeader,
  ModalOverlay,
  ModalTransactionType,
  ModalTransactionTypeButton,
} from './styles'

import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

import { zodResolver } from '@hookform/resolvers/zod'
import { memo } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { useTransactions } from '../../../contexts/Transactions/context'

const createNewTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormType = z.infer<typeof createNewTransactionFormSchema>

export const NewTransactionModalComponent = () => {
  const { createTransaction } = useTransactions(['createTransaction'])

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormType>({
    resolver: zodResolver(createNewTransactionFormSchema),
  })

  const handleCreateNewTransactions: SubmitHandler<
    NewTransactionFormType
  > = async (data) => {
    const { category, description, price, type } = data
    await createTransaction({
      category,
      description,
      price,
      type,
    })

    reset()
  }

  return (
    <Dialog.Portal>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Dialog.Title>New transaction</Dialog.Title>
          <ModalCloseButton>
            <X size={24} />
          </ModalCloseButton>
        </ModalHeader>

        <ModalForm onSubmit={handleSubmit(handleCreateNewTransactions)}>
          <input
            type="text"
            placeholder="Description"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Price"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Category"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <ModalTransactionType
                onValueChange={field.onChange}
                value={field.value}
              >
                <ModalTransactionTypeButton
                  value="income"
                  variant="income"
                  type="button"
                >
                  <ArrowCircleUp size={24} /> Input
                </ModalTransactionTypeButton>
                <ModalTransactionTypeButton
                  value="outcome"
                  variant="outcome"
                  type="button"
                >
                  <ArrowCircleDown size={24} />
                  Output
                </ModalTransactionTypeButton>
              </ModalTransactionType>
            )}
          />

          <button type="submit" disabled={isSubmitting}>
            Create new transaction
          </button>
        </ModalForm>
      </ModalContent>
    </Dialog.Portal>
  )
}

export const NewTransactionModal = memo(NewTransactionModalComponent)
