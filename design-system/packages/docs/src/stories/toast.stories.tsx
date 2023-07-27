import { Box, Text, ToastProvider } from '@ignite-d-kja/react'
import { Meta, StoryObj } from '@storybook/react'
import { StyledToast, StyledToastProps } from '../components/toast'

export default {
  title: 'actions/toast',
  component: StyledToast,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    duration: {
      type: 'number',
      defaultValue: 3000,
    },
    isOpen: {
      type: 'boolean',
    },
    setIsOpen: {
      type: 'function',
      control: {
        type: null,
      },
      description: 'Handles the `isOpen` variable',
    },
    title: {
      type: 'string',
      defaultValue: 'Appointment created!',
      description:
        'The title used on the toast, it uses a strong tag by default',
    },
    description: {
      type: 'string',
      description:
        'Description given to the toast, it uses a span tag by default',
    },
  },
  decorators: [
    (Story) => (
      <Box
        css={{
          height: '115px',
          width: 'full',
        }}
      >
        <ToastProvider swipeDirection="right">{Story()}</ToastProvider>
      </Box>
    ),
  ],
} as Meta<StyledToastProps>
export const base: StoryObj<StyledToastProps> = {
  args: {
    isOpen: true,
  },
}
export const withDuration: StoryObj<StyledToastProps> = {
  args: {
    duration: 5000,
  },
  decorators: [
    (Story) => (
      <>
        <Text>5 seconds duration</Text>
        {Story()}
      </>
    ),
  ],
}
