import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { useTransactions } from '../../contexts/Transactions/context'
import { SearchBarContainer } from './style'

const searchFormSchema = z.object({
  query: z.string().min(1),
})

type searchFormSchemaType = z.infer<typeof searchFormSchema>

export const TransactionsSearchBar = () => {
  const { fetchTransactions } = useTransactions(['fetchTransactions'])

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<searchFormSchemaType>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchTransactions: SubmitHandler<searchFormSchemaType> = async (
    data,
  ) => {
    await fetchTransactions(data.query)
  }

  return (
    <SearchBarContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input type="text" placeholder="Search" {...register('query')} />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchBarContainer>
  )
}
