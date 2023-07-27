import { forwardRef, ForwardRefRenderFunction } from 'react'

import { Props as InputMaskProps } from 'react-input-mask'
import { InputContainer, InputLabel } from './inputWithMask.style'

interface InputBaseProps extends InputMaskProps {
  label?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputBaseProps> = (
  { required = false, label = '', ...props },
  ref,
) => {
  return (
    <InputLabel>
      <InputContainer
        placeholder={label}
        {...props}
        ref={ref as any}
        required={required}
      />
      {!required && <span />}
    </InputLabel>
  )
}

export const InputWithMask = forwardRef(InputBase)
