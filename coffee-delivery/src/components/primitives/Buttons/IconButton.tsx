import {
  ButtonHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
} from 'react'

import { ButtonSizes, ButtonVariants, SquaredButton } from './buttons.styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariants
  size?: ButtonSizes
}

const ButtonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, variant = 'base', size = 'md', ...props }: ButtonProps,
  ref,
) => {
  return (
    <SquaredButton size={size} variant={variant} {...props} ref={ref}>
      {children}
    </SquaredButton>
  )
}

export const IconButton = forwardRef(ButtonBase)
