import { Box, Text, TextArea, TextAreaProps } from '@d-kja/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/text area',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '$2',
          '&:has(textarea:not(:disabled)):hover': {
            cursor: 'pointer',
          },
        }}
      >
        <Text size="sm">Observations</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextAreaProps>

export const base: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observation...',
  },
}
export const disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
