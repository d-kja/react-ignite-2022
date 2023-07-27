import { styled } from '@/styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray-900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray-900',
  display: 'flex',
  alignItems: 'baseline',

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },

  '&:has(input:focus)': {
    borderColor: '$green-300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray-400',
  fontWeight: 'regular',
})

export const TextInput = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray-400',
  },
})
