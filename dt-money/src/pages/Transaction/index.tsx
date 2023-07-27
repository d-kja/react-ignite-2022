import { TransactionsContainer } from './styles'

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsTable } from '../../components/TransactionsTable'

export const Transactions = () => {
  return (
    <TransactionsContainer>
      <Header />
      <Summary />
      <TransactionsTable />
    </TransactionsContainer>
  )
}
