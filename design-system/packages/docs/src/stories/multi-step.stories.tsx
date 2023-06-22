import { Box, Multistep, MultistepProps } from '@d-kja/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/multi step',
  component: Multistep,
  tags: ['autodocs'],
  args: {
    currentStep: 2,
    steps: 4,
  },
  argTypes: {
    currentStep: {
      control: {
        type: 'range',
        min: 1,
        max: 25,
      },
    },
    steps: {
      control: {
        type: 'range',
        min: 1,
        max: 25,
      },
    },
  },
  decorators: [(Story) => <Box>{Story()}</Box>],
} as Meta<MultistepProps>
export const Base: StoryObj<MultistepProps> = {}
export const Completed: StoryObj<MultistepProps> = {
  args: {
    currentStep: 4,
    steps: 4,
  },
}
