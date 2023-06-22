import styled from 'styled-components'

import { Button } from '../../primitives/Buttons/Default'

export const ProductCardSimpleContainer = styled.div`
  display: flex;
  padding: 0.8rem;

  gap: 2rem;
`
export const ProductCardSimpleImage = styled.img`
  max-width: 6.4rem;
  height: 6.4rem;

  border-radius: 12px;
`
export const ProductCardSimpleInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 0.8rem;
`
export const ProductCardSimpleDisplay = styled.div`
  display: flex;
  justify-content: space-between;

  p,
  strong {
    font-size: ${(props) => props.theme['font-lg']};
    line-height: 130%;
  }
  strong {
    font-weight: 700;
  }
`
export const ProductCardSimpleControls = styled.div`
  display: flex;
  gap: 0.8rem;

  svg {
    color: ${(props) => props.theme['secondary-500']};
  }
`

export const ProductCardSimpleButton = styled(Button)`
  max-width: min-content;
`
