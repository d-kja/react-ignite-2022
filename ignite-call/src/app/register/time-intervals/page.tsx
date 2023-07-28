import { TimeIntervals } from '@/components/client-side/pages/time-intervals'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Selecione seu horários | Ignite Call',
  robots: {
    index: false,
    nocache: true,
    googleBot: {
      index: false,
    },
  },
}

const Page = () => {
  return <TimeIntervals />
}

export default Page
