import InputMask from 'react-input-mask'
import styled from 'styled-components'

interface InputContainerProps {
  required?: boolean
}

export const InputContainer = styled(InputMask)<InputContainerProps>`
  border: none;
  border-radius: 4px;

  max-width: 43.5rem;
  width: 100%;
  height: 4.2rem;

  padding: 1.2rem;

  background-color: ${(props) => props.theme['base-200']};
  color: ${(props) => props.theme['base-600']};

  &::placeholder {
    color: ${(props) => props.theme['base-500']};
    font-size: ${(props) => props.theme['font-md']};
  }

  &:placeholder-shown + span {
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;

    ::after {
      font-size: ${(props) => props.theme['font-sm']};
      line-height: 130%;

      content: 'Optional';
      color: ${(props) => props.theme['base-500']};

      font-style: italic;
    }
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 1px ${(props) => props.theme['primary-600']};
  }
`

export const InputLabel = styled.label`
  display: flex;
  max-width: 43.5rem;
  width: 100%;

  position: relative;
`
