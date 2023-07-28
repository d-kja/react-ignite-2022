import { Metadata } from 'next'
import { ReactNode } from 'react'

import { Roboto } from 'next/font/google'

import { GlobalProviders } from '@/contexts/global-providers'
import { StyleProvider } from '../styles/style-provider'

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ignite Call',
  description: 'An app to manage yours and everyones schedule',
  openGraph: {
    url: 'https://www.ignite-call.vercel.app',
    siteName: 'Ignite Call',
    type: 'website',
    locale: 'pt_BR',
  },
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
