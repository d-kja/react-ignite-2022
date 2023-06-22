import {
  forwardRef,
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  RefAttributes,
} from "react"
import { Slot, SlotProps } from "@radix-ui/react-slot"

import clsx from "clsx"

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  className?: string
  asChild?: boolean
}

const InputBase: ForwardRefRenderFunction<
  | ForwardRefExoticComponent<SlotProps & RefAttributes<HTMLElement>>
  | "textarea",
  InputProps
> = ({ className = "", asChild = false, ...props }: InputProps, ref) => {
  const InputComponent = asChild ? Slot : "textarea"

  return (
    <InputComponent
      className={clsx(
        "h-24 w-full rounded-lg bg-gray-900 flex ring-green-500 px-4 pt-[14px] text-gray-300 placeholder:font-normal placeholder:text-base placeholder:text-gray-500 transition-shadow duration-150 hover:ring-2 focus-within:ring-2 focus:outline-none",
        className
      )}
      {...props}
      ref={ref as any}
    />
  )
}

export const Input = forwardRef(InputBase)
