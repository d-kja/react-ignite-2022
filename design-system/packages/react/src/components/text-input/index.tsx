import React from 'react'

import { Prefix, TextInput, TextInputContainer } from './styles'

export interface InputProps extends React.ComponentProps<typeof TextInput> {
  prefix?: string
}

export const Input: React.FC<InputProps> = ({ prefix, ...props }) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}

      <TextInput {...props} />
    </TextInputContainer>
  )
}

Input.displayName = 'Input'
