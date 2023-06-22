import {
  ButtonHTMLAttributes,
  ElementType,
  ForwardRefRenderFunction,
  ReactNode,
  forwardRef,
} from 'react'
import styled from 'windstitch'

const ButtonComponent = styled('button', {
  className:
    'w-12 h-12 leading-none rounded-md hover:brightness-125 transition-filter flex items-center justify-center',
  variants: {
    scheme: {
      base: 'bg-gray-800 text-gray-400',
      primary: 'bg-green-500 text-white',
    },
  },
  defaultVariants: {
    scheme: 'base',
  },
})

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  scheme?: 'base' | 'primary'
  as: string | undefined
}

const ButtonBase: ForwardRefRenderFunction<
  HTMLButtonElement,
  IconButtonProps
> = ({ children, scheme = 'base', as = 'button', ...props }, ref) => {
  return (
    <ButtonComponent
      scheme={scheme}
      as={as as ElementType}
      {...props}
      ref={ref}
    >
      {children}
    </ButtonComponent>
  )
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ButtonBase,
)
