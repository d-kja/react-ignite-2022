import styled from 'styled-components'

export const SelectContainer = styled.div`
  max-width: 7.2rem;
  width: 100%;

  padding: 0.9rem 0.8rem;

  border-radius: 6px;

  background-color: ${(props) => props.theme['base-300']};
  color: ${(props) => props.theme['base-800']};

  font-size: ${(props) => props.theme['font-lg']};
  font-weight: 400;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SelectBaseButton = styled.button`
  width: 1.4rem;
  height: 1.4rem;

  padding: 0;

  background-color: transparent;
  color: ${(props) => props.theme['secondary-500']};

  transition: color 0.2s;

  :hover {
    color: ${(props) => props.theme['secondary-600']};
  }
`
export const SelectDecreaseButton = styled(SelectBaseButton)``
export const SelectIncreaseButton = styled(SelectBaseButton)``
