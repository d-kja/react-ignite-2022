import { Toast, ToastProps } from '@ignite-d-kja/react'
import { X } from 'phosphor-react'
import { FC } from 'react'

export interface StyledToastProps extends ToastProps {
  title: string
  description: string
  duration: number
  isOpen: boolean
}

export const StyledToast: FC<StyledToastProps> = ({
  title = 'Appointment created!',
  description = null,
  duration,
  isOpen,
  ...props
}) => {
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    weekday: 'long',
  })

  return (
    <Toast.Container {...props} open={isOpen} duration={duration}>
      <Toast.Title>{title}</Toast.Title>
      <Toast.Description>
        {description || dateFormatter.format(new Date())}
      </Toast.Description>
      <Toast.Close>
        <X weight="bold" />
      </Toast.Close>
    </Toast.Container>
  )
}
