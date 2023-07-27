import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const ModalOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;

  background-color: rgba(0, 0, 0, 0.75);
`
export const ModalContent = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${({ theme }) => theme['gray-800']};
`
export const ModalCloseButton = styled(Dialog.Close)``
export const ModalTitle = styled(Dialog.Title)``
export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: transparent;
    border: 0;
    border-radius: 6px;

    line-height: 0;
    top: 1.5rem;
    right: 1.5rem;

    position: absolute;

    color: ${({ theme }) => theme['gray-300']};
  }
`
export const ModalForm = styled.form`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    border-radius: 6px;
    border: 0;

    background-color: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};

    padding: 1rem;
    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button[type='submit'] {
    height: 58px;
    border-radius: 6px;
    border: 0;

    background-color: ${({ theme }) => theme['green-500']};
    color: ${({ theme }) => theme.white};

    font-weight: bold;
    margin-top: 1.5rem;
    padding: 0 1.25rem;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme['green-700']};
      transition: background-color 0.2s;
    }
  }
`

export const ModalTransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`
type TransactionVariants = 'income' | 'outcome'
enum TransactionSvgColors {
  'income' = 'green-300',
  'outcome' = 'red-300',
}
enum TransactionSelectedButtonColors {
  'income' = 'green-500',
  'outcome' = 'red-500',
}
interface ModalTransactionTypeButtonType {
  variant: TransactionVariants
}
export const ModalTransactionTypeButton = styled(
  RadioGroup.Item,
)<ModalTransactionTypeButtonType>`
  border-radius: 6px;
  border: 0;
  cursor: pointer;

  background-color: ${({ theme }) => theme['gray-700']};
  color: ${({ theme }) => theme['gray-300']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 1rem;

  &[data-state='unchecked']:hover {
    background-color: ${({ theme }) => theme['gray-600']};
    transition: background-color 0.2s;
  }

  svg {
    color: ${(props) => props.theme[TransactionSvgColors[props.variant]]};
  }

  &[data-state='checked'] {
    color: ${({ theme }) => theme.white};
    background: ${(props) =>
      props.theme[TransactionSelectedButtonColors[props.variant]]};

    svg {
      color: ${({ theme }) => theme.white};
    }
  }
`
