import { useMemo } from 'react'
import { useTransactions } from '../contexts/Transactions/context'

export const useSummary = () => {
  const { transactions } = useTransactions(['transactions'])

  const summary = useMemo(
    () =>
      transactions.reduce(
        (acc, item) => {
          switch (item.type) {
            case 'income': {
              acc.income += item.price
              acc.total += item.price
              break
            }
            case 'outcome': {
              acc.outcome += item.price
              acc.total -= item.price
              break
            }
          }

          return acc
        },
        {
          income: 0,
          outcome: 0,
          total: 0,
        },
      ),
    [transactions],
  )

  return summary
}
