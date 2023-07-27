import styled from 'styled-components'

export const CountDownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;

  font-size: 16rem;
  line-height: 12.8rem;
  color: ${(props) => props.theme['base-100']};

  display: flex;
  gap: 1.6rem;

  span {
    background-color: ${(props) => props.theme['base-600']};
    padding: 3.2rem 1.6rem;
    border-radius: 8px;
  }
`

export const SeparatorContainer = styled.div`
  padding: 3.2rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 6.4rem;
  overflow: hidden;

  display: flex;
  justify-content: center;
`
