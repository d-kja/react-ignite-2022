import styled from 'styled-components'

export const SearchBarContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    border-radius: 6px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme['green-300']};
    color: ${({ theme }) => theme['green-300']};
    font-weight: bold;
    padding: 0.875rem 2rem;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme['green-500']};
      border: 1px solid ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`
