import { ReactNode } from 'react'
import './globals.css'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Nunito } from 'next/font/google'
import { Header } from '../components/Header'
import { PostsProvider } from '../contexts/PostsContext'
import QueryProvider from '../contexts/QueryProvider'

export const metadata = {
  title: 'Github Blog',
  description: 'A github blog that tracks the issues of the main repository',
}

interface RootLayoutProps {
  children: ReactNode
}

const nunito = Nunito({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <QueryProvider>
          <PostsProvider>
            <Header />
            {children}
          </PostsProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryProvider>
      </body>
    </html>
  )
}
