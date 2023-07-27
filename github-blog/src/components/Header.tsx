import { FC } from 'react'
import { Logo } from './Hero'

export const Header: FC = () => {
  return (
    <header className="flex flex-col items-center justify-center gap-[2.875rem] pt-16">
      <div className="bg-hero-pattern bg-cover bg-no-repeat max-w-screen h-[18.5rem] absolute top-0 left-0 right-0 -z-10" />
      <Logo />
    </header>
  )
}
