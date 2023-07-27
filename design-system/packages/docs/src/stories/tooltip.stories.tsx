import { Box, Button, Tooltip, TooltipProps } from '@ignite-d-kja/react'
import { Meta, StoryObj } from '@storybook/react'
export default {
  title: 'actions/tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    trigger: <Button>Hover me</Button>,
    text: 'Tooltip example!',
  },
  argTypes: {
    trigger: {
      control: {
        type: null,
      },
      description: 'Source to hover, receives a ReactNode as child',
    },
    text: {
      type: 'string',
      defaultValue: 'Tooltip example',
      description: 'Tooltip text',
    },
    open: {
      type: 'boolean',
      description: 'Defines whether the tooltip is open or not',
    },
  },
  decorators: [(Story) => <Box>{Story()}</Box>],
} as Meta<TooltipProps>
export const base: StoryObj<TooltipProps> = {}
export const alwaysOpen: StoryObj<TooltipProps> = {
  args: {
    open: true,
  },
}
