import { tw } from '@/libs/utils/tw-classes-utility'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps, cva } from 'class-variance-authority'
import { ReactNode } from 'react'

const rootVariants = cva(
  'p-8 bg-base-post max-w-[26rem] w-full max-h-[16.25rem] h-full rounded-[10px] flex flex-col gap-5 border-2 hover:transition-[border] border-transparent hover:border-base-label box-border',
)

interface RootProps extends VariantProps<typeof rootVariants> {
  children: ReactNode
  asChild?: boolean
}

const Root = ({ children, asChild = false }: RootProps) => {
  const RootComponent = asChild ? Slot : 'div'

  return (
    <RootComponent className={tw(rootVariants())}>{children}</RootComponent>
  )
}

const headerVariants = cva('flex gap-4')

interface HeaderProps extends VariantProps<typeof headerVariants> {
  children: ReactNode
}

const Header = ({ children }: HeaderProps) => {
  return <header className={tw(headerVariants())}>{children}</header>
}

const titleVariants = cva('font-bold text-xl text-base-title flex-1')

interface TitleProps extends VariantProps<typeof titleVariants> {
  children: ReactNode
}

const Title = ({ children }: TitleProps) => {
  return <h1 className={tw(titleVariants())}>{children}</h1>
}

const timeVariants = cva('font-base text-sm text-base-span ')

interface TimeProps extends VariantProps<typeof timeVariants> {
  children: ReactNode
}

const Time = ({ children }: TimeProps) => {
  return <h1 className={tw(timeVariants())}>{children}</h1>
}

const contentVariants = cva(
  'font-base text-base text-base-text w-full max-h-28 h-full',
)

interface ContentProps extends VariantProps<typeof contentVariants> {
  children: string
}

const Content = ({ children }: ContentProps) => {
  const content =
    children?.length > 150 ? children?.substring(0, 150) + '...' : children
  return <span className={tw(contentVariants())}>{content}</span>
}

export const Card = {
  Root,
  Content,
  Header,
  Title,
  Time,
}
