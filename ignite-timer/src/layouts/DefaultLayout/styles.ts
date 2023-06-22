import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 112rem;
  height: calc(100vh - 16rem);

  padding: 4rem;
  margin: 8rem auto;
  border-radius: 0.8rem;

  background-color: ${(props) => props.theme['base-700']};
`
