'use client'

import { FC, ReactNode } from 'react'

import { SessionProvider } from 'next-auth/react'

import { toasterConfig } from '@/lib/hot-toaster'
import { queryClient } from '@/lib/react-query'
import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

interface GlobalProviderProps {
  children: ReactNode
}

export const GlobalProviders: FC<GlobalProviderProps> = ({ children }) => {
  return (
    <>
      <Toaster toastOptions={toasterConfig} />
      <QueryClientProvider client={queryClient}>
        <SessionProvider>{children}</SessionProvider>
      </QueryClientProvider>
    </>
  )
}
