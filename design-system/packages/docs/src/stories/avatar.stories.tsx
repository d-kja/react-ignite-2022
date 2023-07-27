import { AvatarProps } from '@ignite-d-kja/react'
import { Meta, StoryObj } from '@storybook/react'
import { AvatarComponent } from '../components/avatar'

export default {
  title: 'Data display/avatar',
  component: AvatarComponent,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/d-kja.png',
    alt: 'D-kja',
  },
  argTypes: {
    src: {
      type: 'string',
    },
  },
} as Meta<AvatarProps>
export const Base: StoryObj<AvatarProps> = {}
export const Fallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
