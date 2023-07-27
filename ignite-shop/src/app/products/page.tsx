import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Ignite Shop | Product',
  description: 'Single product display',
}

const Page = () => {
  return redirect('/')
}

export default Page
