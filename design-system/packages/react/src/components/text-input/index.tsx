import React, { ElementRef, ForwardRefRenderFunction, forwardRef } from 'react'

import { Prefix, TextInput, TextInputContainer } from './styles'

export interface InputProps extends React.ComponentProps<typeof TextInput> {
  prefix?: string
}

const InputBase: ForwardRefRenderFunction<
  ElementRef<typeof TextInput>,
  InputProps
> = ({ prefix, ...props }, ref) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}

      <TextInput ref={ref} {...props} />
    </TextInputContainer>
  )
}

export const Input = forwardRef(InputBase)

Input.displayName = 'Input'
