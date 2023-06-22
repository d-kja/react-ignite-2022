import { User } from 'phosphor-react'
import React from 'react'
import { AvatarFallback, AvatarImage, AvatarRoot } from './style'

export interface AvatarProps extends React.ComponentProps<typeof AvatarImage> {}

export const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <AvatarRoot>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarRoot>
  )
}

Avatar.displayName = 'Avatar'
