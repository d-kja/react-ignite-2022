'use client'

import { Handbag } from '@phosphor-icons/react'
import { IconButton } from '../../Buttons/IconButton'

export const CartButton = () => {
  return (
    <IconButton as="span">
      <Handbag size={24} />
    </IconButton>
  )
}
