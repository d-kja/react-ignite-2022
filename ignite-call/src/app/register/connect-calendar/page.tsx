import { ConnectCalendarPage } from '@/components/client-side/pages/connect-calendar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conecte sua agenda do Google | Ignite Call',
  robots: {
    index: false,
    nocache: true,
    googleBot: {
      index: false,
    },
  },
}

const Page = () => {
  return <ConnectCalendarPage />
}

export default Page
