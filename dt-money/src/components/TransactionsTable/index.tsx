import { useTransactions } from '../../contexts/Transactions/context'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { TransactionsSearchBar } from '../TransactionsSearchBar'
import {
  Body,
  Data,
  PriceHighlight,
  Row,
  Table,
  TransactionsContainer,
} from './style'

export const TransactionsTable = () => {
  const { transactions } = useTransactions(['transactions'])

  return (
    <TransactionsContainer>
      <TransactionsSearchBar />

      <Table>
        <Body>
          {transactions.map((transaction) => (
            <Row key={transaction.id}>
              <Data>{transaction.description}</Data>
              <Data>
                <PriceHighlight variant={transaction.type}>
                  {transaction.type === 'outcome' && '- '}
                  {priceFormatter.format(transaction.price)}
                </PriceHighlight>
              </Data>
              <Data>{transaction.category}</Data>
              <Data>
                {dateFormatter.format(new Date(transaction.createdAt))}
              </Data>
            </Row>
          ))}
        </Body>
      </Table>
    </TransactionsContainer>
  )
}
