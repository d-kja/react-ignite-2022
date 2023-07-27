import styled from 'styled-components'

export const InputBase = styled.input`
  background-color: transparent;
  height: 4rem;
  border: 0;

  border-bottom: 2px solid ${(props) => props.theme['base-400']};
  color: ${(props) => props.theme['base-100']};

  font-weight: inherit;
  font-family: inherit;

  padding: 0 0.8rem;

  &:focus {
    box-shadow: none;
    border-bottom-color: ${(props) => props.theme['green-500']};
  }
  &::placeholder {
    color: ${(props) => props.theme['base-400']};
  }
`

export const TaskInput = styled(InputBase)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const TimeInput = styled(InputBase)`
  width: 6.4rem;
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.8rem;
  flex-wrap: wrap;

  font-size: 1.8rem;
  font-weight: bold;
  color: ${(props) => props.theme['base-100']};
`
