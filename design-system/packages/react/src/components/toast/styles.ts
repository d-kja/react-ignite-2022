import { keyframes, styled } from '@/styles'
import * as RadixToast from '@radix-ui/react-toast'

const slideRight = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: 'translateX(100%)',
  },
})

export const Container = styled(RadixToast.Root, {
  all: 'unset',
  backgroundColor: '$gray-800',
  padding: '$3 $5',

  maxWidth: '22.5rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  border: '1px solid',
  borderColor: '$gray-600',
  borderRadius: '$sm',
  position: 'relative',

  "&[data-swipe='move']": {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  "&[data-swipe='cancel']": {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  "&[data-swipe='end']": {
    animation: `${slideRight} 100ms ease-out`,
  },
})
export const Provider = styled(RadixToast.Provider)
export const Action = styled(RadixToast.Action)

export const Close = styled(RadixToast.Close, {
  all: 'unset',
  position: 'absolute',
  top: '$4',
  right: '$4',
  width: '$5',
  height: '$5',
  color: '$gray-200',

  transition: 'color .2s',

  '&:hover': {
    cursor: 'pointer',
    color: '$gray-100',
  },
})

export const TitleBase = styled(RadixToast.Title)
export const DescriptionBase = styled(RadixToast.Description, {
  color: '$gray-200',
})
