import { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from '@ignite-d-kja/react'
import { ArrowRight } from 'phosphor-react'

export default {
  component: Button,
  title: 'Form/button',
  tags: ['autodocs'],
  args: {
    children: 'Example',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    children: {
      type: 'string',
      name: 'content',
      defaultValue: 'Example',
    },
    size: {
      control: {
        type: 'inline-radio',
      },
      options: ['sm', 'md'],
    },
    variant: {
      control: {
        type: 'inline-radio',
      },
      options: ['primary', 'secondary', 'tertiary'],
    },
    disabled: {
      type: 'boolean',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
