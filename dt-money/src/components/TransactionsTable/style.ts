import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  max-width: 1120px;
  width: 100%;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`
export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
`
export const Body = styled.tbody``
export const Row = styled.tr`
  width: 100%;
`
export const Data = styled.td`
  padding: 1.25rem 2rem;
  background-color: ${({ theme }) => theme['gray-700']};

  &:first-child {
    width: 50%;

    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  &:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`

enum PriceHighlightColors {
  'income' = 'green-300',
  'outcome' = 'red-300',
}

type PriceHighlightVariants = 'income' | 'outcome'

interface PriceHighlightProps {
  variant: PriceHighlightVariants
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) => props.theme[PriceHighlightColors[props.variant]]};
`
