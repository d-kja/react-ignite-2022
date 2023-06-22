import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer, ButtonVariants } from './Button.styles'

interface ExampleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
}

export const ExampleButton = ({ variant = 'primary' }: ExampleButtonProps) => {
  return <ButtonContainer variant={variant}>Example</ButtonContainer>
}
