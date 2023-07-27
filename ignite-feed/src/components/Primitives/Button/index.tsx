import { ButtonHTMLAttributes, ReactNode } from "react"
import { Slot } from "@radix-ui/react-slot"

import clsx from "clsx"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
  variant?: "fill" | "outline" | "ghost" | "danger"
  className?: string
}

export const Button = ({
  children,
  asChild = false,
  variant = "fill",
  className = "",
  ...props
}: ButtonProps) => {
  const ButtonComponent = asChild ? Slot : "button"

  return (
    <ButtonComponent
      className={clsx(
        "flex items-center justify-center gap-[.625rem] h-[3.125rem] rounded-lg font-bold text-base hover:text-white transition-colors a11y-focus",
        {
          "hover:bg-green-400 bg-green-500 w-full  px-6": variant === "fill",
          "text-green-500 hover:bg-green-500 border-2 border-green-500 after:-inset-[0.25rem] w-full  px-6":
            variant === "outline",
          "active:text-green-500 h-auto focus-within:text-green-500 focus-within:hover:text-green-400":
            variant === "ghost",
          "hover:text-red-500 h-auto after:ring-red-500 focus-within:text-red-500":
            variant === "danger",
        },
        className
      )}
      {...props}
    >
      {children}
    </ButtonComponent>
  )
}
