import { Meta, StoryObj } from '@storybook/react'

import { Box, Text, TextProps } from '@ignite-d-kja/react'

export default {
  title: 'Typography/text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos possimus a, accusantium dolorem quisquam pariatur molestiae hic necessitatibus voluptate velit animi perferendis aliquid officia perspiciatis excepturi facere culpa ab quis!',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    size: {
      control: {
        type: 'inline-radio',
      },
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
    },
  },
  decorators: [(Story) => <Box>{Story()}</Box>],
} as Meta<TextProps>
export const Base: StoryObj<TextProps> = {}
export const Variant: StoryObj<TextProps> = {
  args: {
    size: '2xl',
  },
}
