import { styled } from '@/styles'
import { ComponentProps, ElementType } from 'react'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,
  color: '$gray-100',

  variants: {
    size: {
      xxs: {
        fontSize: '$lg',
      },
      xs: {
        fontSize: '$xl',
      },
      sm: {
        fontSize: '$2xl',
      },
      md: {
        fontSize: '$4xl',
      },
      lg: {
        fontSize: '$5xl',
      },
      xl: {
        fontSize: '$6xl',
      },
      '2xl': {
        fontSize: '$7xl',
      },
      '4xl': {
        fontSize: '$4xl',
      },
      '5xl': {
        fontSize: '$8xl',
      },
      '6xl': {
        fontSize: '$9xl',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}

Heading.displayName = 'Heading'
