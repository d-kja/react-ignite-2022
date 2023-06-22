import { Meta, StoryObj } from '@storybook/react'

import { Box, Heading, HeadingProps } from '@d-kja/react'

export default {
  title: 'Typography/heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'H2 heading by default',
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
      options: ['sm', 'md', 'lg', '2xl', '5xl', '6xl'],
    },
  },
  decorators: [(Story) => <Box>{Story()}</Box>],
} as Meta<HeadingProps>
export const Base: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    size: 'lg',
    as: 'h1',
    children: 'Component using H1 tag',
  },
}
