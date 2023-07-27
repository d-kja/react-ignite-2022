import { SummaryCard, SummaryContainer } from './styles'

import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useSummary } from '../../hooks/useSummary'
import { priceFormatter } from '../../utils/formatter'

export const Summary = () => {
  const summary = useSummary()

  const summaryFormattedIncome = priceFormatter.format(summary.income)
  const summaryFormattedOutcome = priceFormatter.format(summary.outcome)
  const summaryFormattedTotal = priceFormatter.format(summary.total)

  return (
    <SummaryContainer title="summary">
      <SummaryCard variant="income">
        <header>
          <span>Income</span>
          <ArrowCircleUp size={32} />
        </header>

        <strong>{summaryFormattedIncome}</strong>
      </SummaryCard>
      <SummaryCard variant="outcome">
        <header>
          <span>Outcome</span>
          <ArrowCircleDown size={32} />
        </header>

        <strong>{summaryFormattedOutcome}</strong>
      </SummaryCard>
      <SummaryCard variant="total">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </header>

        <strong>{summaryFormattedTotal}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
