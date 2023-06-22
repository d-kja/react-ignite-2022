import { Box, Checkbox, CheckboxProps, Text } from '@d-kja/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    checked: false,
  },
  argTypes: {
    checked: {
      name: 'Is checked?',
      type: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{
          display: 'flex',
          flexDirection: 'row',
          gap: '$2',
          '&:has(button[role=checkbox]):hover': {
            cursor: 'pointer',
          },
        }}
      >
        {Story()}
        <Text size="sm">Observations</Text>
      </Box>
    ),
  ],
} as Meta<CheckboxProps>

export const Base: StoryObj<CheckboxProps> = {}
export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}
