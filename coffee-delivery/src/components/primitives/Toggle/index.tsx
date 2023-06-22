import { ReactNode } from 'react'
import { ToggleItem, ToggleRoot as ToggleBody } from './Toggle.style'

interface ToggleButtonProps {
  children: ReactNode
  value: string
}

export const ToggleButton = ({ children, value }: ToggleButtonProps) => {
  return <ToggleItem value={value}>{children}</ToggleItem>
}

interface ToggleRootProps {
  children: ReactNode
}

export const ToggleRoot = ({ children }: ToggleRootProps) => (
  <ToggleBody type="single">{children}</ToggleBody>
)
