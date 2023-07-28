import { HomePage } from '@/components/client-side/pages/home'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Descomplique sua agenda | Ignite Call',
  description:
    'Conecte seu calendário e permite que as pessoas marquem agendamentos no seu tempo livre',
}

export default function Home() {
  return <HomePage />
}
