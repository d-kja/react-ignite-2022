import clsx from "clsx"
import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { className = "", error, ...props }: InputProps,
  ref
) => {
  return (
    <div className="relative">
      <input
        className={clsx(
          "h-[3.375rem] max-w-[32.75rem] w-full rounded-lg",
          "input bg-gray-500 text-gray-100 placeholder:text-gray-300",
          "focus-within:outline-purple-dark ",
          className
        )}
        ref={ref}
        {...props}
      />
      {!!error && (
        <div className="absolute left-2 -bottom-5">
          <span className="text-danger text-xs opacity-70">{error}</span>
        </div>
      )}
    </div>
  )
}

export const Input = forwardRef(InputBase)
