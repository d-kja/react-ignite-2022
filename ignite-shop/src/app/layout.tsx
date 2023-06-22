import React from 'react'

import { Roboto } from 'next/font/google'
import './globals.css'

import { Toaster } from '@/components/Toaster'
import { Header } from '@/components/ui/Header'
import { ClientProvider } from '@/contexts/ClientProvider'

export const metadata = {
  title: 'Ignite Shop',
  description: 't-shirt shop with Next.js',
}

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={
          roboto.className +
          ' flex flex-col items-start justify-center min-h-screen px-4 lg:px-0'
        }
      >
        <Toaster />
        <ClientProvider>
          <Header />
          {children}
        </ClientProvider>
      </body>
    </html>
  )
}
