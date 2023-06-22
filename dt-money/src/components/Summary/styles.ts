import styled from 'styled-components'

export const SummaryContainer = styled.section`
  max-width: 1120px;
  width: 100%;

  margin: -5rem auto 0;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

enum SummaryCardVariantTypes {
  'income' = 'green-500',
  'outcome' = 'red-300',
  'total' = 'white',
}

type VariantTypes = 'income' | 'outcome' | 'total'

interface SummaryCardType {
  variant: VariantTypes
}

export const SummaryCard = styled.div<SummaryCardType>`
  background-color: ${(props) =>
    props.variant === 'total'
      ? props.theme['green-700']
      : props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  svg {
    color: ${(props) => props.theme[SummaryCardVariantTypes[props.variant]]};
  }
`
