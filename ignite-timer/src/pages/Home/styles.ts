import styled from 'styled-components'

export const HomeContainer = styled.main`
  height: 100%;

  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 5.6rem;
  }
`

const BaseButton = styled.button`
  border: none;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.8rem;

  border-radius: 9px;
  padding: 1.6rem;

  font-weight: bold;

  color: ${(props) => props.theme['base-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartButton = styled(BaseButton)`
  background-color: ${(props) => props.theme['green-500']};
  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-600']};
  }
`
export const StopButton = styled(BaseButton)`
  background-color: ${(props) => props.theme['red-500']};
  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['red-600']};
  }
`
