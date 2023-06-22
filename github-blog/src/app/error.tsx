'use client'

import Link from 'next/link'
import { useEffect } from 'react'

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error({ errorPreview: error })
  }, [error])

  return (
    <section
      title="Error boundary"
      className="max-w-screen-base mt-16 flex flex-col gap-2 mx-auto bg-base-post px-8 py-6 rounded-lg "
    >
      <header>
        <strong className="text-lg font-bold uppercase ">
          An error ocurred
        </strong>
      </header>
      <main className="flex flex-col gap-8">
        <span className="text-error">Error: {error.message}</span>
        <pre>{JSON.stringify(error, null, 2)}</pre>
        <div className="grid grid-cols-2 gap-4">
          <Link href={'/'} className="btn btn-primary btn-outline">
            Go back
          </Link>
          <button onClick={() => reset()} className="btn btn-ghost btn-outline">
            Try again
          </button>
        </div>
      </main>
    </section>
  )
}
export default Error
