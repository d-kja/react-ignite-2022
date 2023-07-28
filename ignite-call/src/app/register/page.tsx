import { RegisterPage } from '@/components/client-side/pages/register'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crie sua conta | Ignite Call',
}

const Page = () => {
  return <RegisterPage />
}

export default Page
