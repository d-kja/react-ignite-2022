'use client'

import { toasterClasses, toasterStyles } from '@/lib/utils/toaster'
import { Toaster as ReactToaster } from 'react-hot-toast'

export const Toaster = () => {
  return (
    <>
      <ReactToaster
        toastOptions={{
          className: toasterClasses,
          style: toasterStyles,
        }}
      />
    </>
  )
}
