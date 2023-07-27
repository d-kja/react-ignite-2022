import { tw } from '@/libs/utils/tw-classes-utility'
import { VariantProps, cva } from 'class-variance-authority'
import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from 'react'

const inputVariants = cva(
  'bg-base-input text-base-text border border-base-border rounded-md outline-base-input input h-[3.125rem] px-4 py-3 placeholder:text-base-label placeholder:font-normal placeholder:text-base focus-within:border-base-blue focus-within:outline-base-blue',
)

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { className = '', ...props },
  ref,
) => {
  return (
    <input className={tw(inputVariants({ className }))} {...props} ref={ref} />
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputBase)
