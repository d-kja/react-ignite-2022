import {
  ButtonHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
} from 'react'

import { ButtonDefault, ButtonSizes, ButtonVariants } from './buttons.styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  size?: ButtonSizes
  variant?: ButtonVariants
}

const ButtonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, size = 'md', variant = 'base', ...props }: ButtonProps,
  ref,
) => {
  return (
    <ButtonDefault variant={variant} size={size} {...props} ref={ref}>
      {children}
    </ButtonDefault>
  )
}

export const Button = forwardRef(ButtonBase)
