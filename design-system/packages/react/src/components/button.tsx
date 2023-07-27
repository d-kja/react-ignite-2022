import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray-100',
  },

  transition: 'background-color .2s',

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$green-500',

        '&:not(:disabled):hover': {
          background: '$green-300',
        },

        '&:disabled': {
          backgroundColor: '$gray-200',
        },
      },

      secondary: {
        color: '$green-300',
        border: '2px solid $green-500',

        '&:not(:disabled):hover': {
          background: '$green-500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray-200',
          borderColor: '$gray-200',
        },
      },

      tertiary: {
        color: '$gray-100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray-600',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
