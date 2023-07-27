import { GlobalProviders } from '@/contexts/global-providers'
import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import { StyleProvider } from '../styles/style-provider'

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Ignite Call',
  description: 'An app to manage yours and everyones schedule',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <StyleProvider />

      <body className={roboto.className}>
        <GlobalProviders>{children}</GlobalProviders>
      </body>
    </html>
  )
}
