'use client'

import * as DesignSystem from '@ignite-ui/react'
import { ElementType, FC, ReactNode } from 'react'

/**
 * @usecase A generic client side component used to avoid the recreation of each
 * component of the design system as client-side as I'm using Stitches =D
 */

interface ClientComponentProps {
  children: ReactNode
  as?: string
  componentProps?: any // Object containing all the props/variants
}

export const ClientComponent: FC<ClientComponentProps> = ({
  children,
  componentProps,
  as: TypeOfComponent = null,
}) => {
  const Container = TypeOfComponent
    ? // @ts-ignore
      (DesignSystem[TypeOfComponent] as ElementType)
    : 'div'

  return <Container {...componentProps}>{children}</Container>
}
