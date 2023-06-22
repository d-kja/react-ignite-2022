import { ReactNode } from 'react'
import { TooltipContainer } from './styles'

interface TooltipProps {
  children: ReactNode
  message?: string
}

export const Tooltip = ({ children, message = '' }: TooltipProps) => {
  return (
    <>
      <TooltipContainer>
        {!!message.length && <span>{message}</span>}
      </TooltipContainer>

      {children}
    </>
  )
}
