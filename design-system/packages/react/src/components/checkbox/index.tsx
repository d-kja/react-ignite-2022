import { Check } from 'phosphor-react'
import React from 'react'
import { CheckboxContainer, CheckboxIndicator } from './style'

export interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxContainer> {}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
