import styled from 'styled-components'

export const SummaryContainer = styled.section`
  max-width: 112rem;
  margin: 4.8rem auto 0;

  display: flex;
  flex-direction: column;

  padding: 3.2rem 0;

  h1 {
    font-size: ${(props) => props.theme['font-4xl']};
    color: ${(props) => props.theme['primary-600']};
  }
  p {
    font-size: ${(props) => props.theme['font-2xl']};
    color: ${(props) => props.theme['base-700']};
    margin-top: 0.4rem;
    margin-bottom: 4rem;
  }
`

export const SummaryCard = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SummaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  max-width: 52.6rem;
  width: 100%;

  height: min-content;

  padding: 4rem;

  border: 1px solid transparent;
  border-radius: 6px 36px;
  background: linear-gradient(
      to right,
      ${(props) => props.theme['bg-base']},
      ${(props) => props.theme['bg-base']}
    ),
    linear-gradient(
      to right,
      ${(props) => props.theme['primary-500']},
      ${(props) => props.theme['secondary-500']}
    );
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`

export const SummarySlip = styled.div`
  display: flex;
  gap: 1.2rem;
  color: ${(props) => props.theme['base-600']};

  span {
    font-size: ${(props) => props.theme['font-lg']};
  }

  div {
    display: flex;
    flex-direction: column;
  }
`

type SummaryIconsVariants = 'primary' | 'secondary' | 'alt'
enum SummaryIconsVariantsColors {
  'primary' = 'primary-500',
  'secondary' = 'secondary-500',
  'alt' = 'primary-600',
}

interface SummaryIconsProps {
  variant: SummaryIconsVariants
}

export const SummaryIcons = styled.span<SummaryIconsProps>`
  background-color: ${(props) =>
    props.theme[SummaryIconsVariantsColors[props.variant]]};
  color: ${(props) => props.theme['base-100']};

  height: 3.3rem;
  width: 3.3rem;
  padding: 0.8rem;
  border-radius: 9999px;
`
