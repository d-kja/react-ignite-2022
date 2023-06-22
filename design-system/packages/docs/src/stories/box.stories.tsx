import { Box, BoxProps, Text } from '@d-kja/react'
import { Meta, StoryObj } from '@storybook/react'

const lorem =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quis animi tenetur consequatur error qui dolor ducimus ea, nulla nobis officiis sequi inventore, iure hic pariatur numquam nostrum reprehenderit impedit!'

export default {
  title: 'Surfaces/box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: lorem,
  },
  argTypes: {
    children: {
      type: 'string',
      defaultValue: lorem,
      name: 'Content',
      description: 'Text inside the box',
    },
  },
  decorators: [(Story) => <Text>{Story()}</Text>],
} as Meta<BoxProps>

export const base: StoryObj<BoxProps> = {}
