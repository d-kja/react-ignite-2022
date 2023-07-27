"use client"

import { LabelHTMLAttributes, ReactNode, useState } from "react"

import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import clsx from "clsx"

interface CheckboxProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
  indicator: ReactNode
  isCompleted: boolean
  onToggleTask: () => void
}

export const Checkbox = ({
  children,
  indicator,
  isCompleted = false,
  onToggleTask,
  htmlFor,
  ...props
}: CheckboxProps) => {
  const handleCheckChange = () => onToggleTask()

  return (
    <div className="flex gap-2 w-full">
      <CheckboxPrimitive.Root
        onCheckedChange={handleCheckChange}
        checked={isCompleted}
        id={htmlFor}
        className={clsx(
          "min-w-[1.091rem] h-[1.091rem] rounded-full mt-[3px] transition-all",
          {
            "bg-purple-dark hover:bg-purple-default border-0": isCompleted,
            "border-blue-default hover:border-blue-dark border-2": !isCompleted,
          }
        )}
      >
        <CheckboxPrimitive.Indicator asChild>
          {indicator}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <label
        htmlFor={htmlFor}
        className={clsx("text-gray-100 flex-1", {
          "text-gray-300 line-through": isCompleted,
        })}
        {...props}
      >
        {children}
      </label>
    </div>
  )
}
