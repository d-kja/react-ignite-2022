import React from 'react'

import { Viewport } from '@radix-ui/react-toast'
import { Heading } from '../heading'
import { Text } from '../text'

import * as ToastStyle from './styles'
import { Container, DescriptionBase, Provider, TitleBase } from './styles'

export interface ToastProps extends React.ComponentProps<typeof Container> {}
export interface ToastProviderProps
  extends React.ComponentProps<typeof Provider> {}
export interface TitleProps extends React.ComponentProps<typeof TitleBase> {}
export interface DescriptionProps
  extends React.ComponentProps<typeof DescriptionBase> {}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  ...props
}) => {
  return (
    <Provider {...props}>
      {children}
      <Viewport />
    </Provider>
  )
}

ToastProvider.displayName = 'ToastProvider'

const Title = ({ children, ...props }: TitleProps) => {
  return (
    <TitleBase asChild {...props}>
      <Heading as={'strong'} size={'xs'}>
        {children}
      </Heading>
    </TitleBase>
  )
}

const Description = ({ children, ...props }: DescriptionProps) => {
  return (
    <DescriptionBase asChild {...props}>
      <Text as={'span'} size={'sm'}>
        {children}
      </Text>
    </DescriptionBase>
  )
}

export const Toast = { ...ToastStyle, Title, Description }
