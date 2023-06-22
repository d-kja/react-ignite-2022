import { styled } from '@/styles'

import * as Avatar from '@radix-ui/react-avatar'

export const AvatarRoot = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  backgroundColor: '$gray-200',
  width: '$12',
  height: '$12',
  overflow: 'hidden',
})
export const AvatarImage = styled(Avatar.AvatarImage, {
  width: '100%',
  heigth: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})
export const AvatarFallback = styled(Avatar.AvatarFallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray-600',
  color: '$gray-800',

  svg: {
    width: '$10',
    heigth: '$10',
  },
})
