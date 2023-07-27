import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'
import { InputContainer, InputLabel } from './input.style'

interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
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
        ref={ref}
        required={required}
      />
      {!required && <span />}
    </InputLabel>
  )
}

export const Input = forwardRef(InputBase)
