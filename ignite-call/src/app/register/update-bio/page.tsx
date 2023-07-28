import { UpdateBio } from '@/components/client-side/pages/update-bio'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Atualize seu perfil | Ignite Call',
  robots: {
    index: false,
    nocache: true,
    googleBot: {
      index: false,
    },
  },
}

const Page = () => {
  return <UpdateBio />
}

export default Page
