import { Box, Input, InputProps, Text } from '@ignite-d-kja/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/text input',
  component: Input,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '$2',
          '&:has(input:not(:disabled)):hover': {
            cursor: 'pointer',
          },
        }}
      >
        <Text size="sm">Your name</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<InputProps>

export const base: StoryObj<InputProps> = {
  args: {
    placeholder: 'type something here...',
  },
}
export const disabled: StoryObj<InputProps> = {
  args: {
    disabled: true,
  },
}
export const withPrefix: StoryObj<InputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'username',
  },
}
