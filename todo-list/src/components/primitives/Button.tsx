import { ButtonHTMLAttributes, ReactNode } from "react"
import clsx from "clsx"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  variant?: "fill" | "outline" | "square"
  scheme?: "primary" | "secondary" | null
}

export const Button = ({
  children,
  variant = "fill",
  scheme = null,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "btn border-none text-gray-100 font-bold text-sm flex gap-2 focus-within:ring ring-offset-2 ring-offset-gray-600",
        {
          "bg-blue-dark ring-blue-dark hover:bg-blue-default":
            variant === "fill" && scheme === "primary",
          "bg-purple-dark ring-purple-dark hover:bg-purple-default":
            variant === "fill" && scheme === "secondary",
        },
        {
          "btn-square btn-xs rounded": variant === "square",
          "bg-transparent ring-1": variant === "outline",
          "hover:bg-blue-default ring-blue-dark": scheme === "primary",
          "hover:bg-purple-default ring-purple-dark": scheme === "secondary",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
