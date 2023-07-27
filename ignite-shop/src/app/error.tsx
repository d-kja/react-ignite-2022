'use client'

import Link from 'next/link'
import { toast } from 'react-hot-toast'

interface ErrorPageProps {
  error: Error
  reset: () => void
}

const Page = ({ error, reset }: ErrorPageProps) => {
  return (
    <section
      title="Error boundary"
      className="mx-auto h-[656px] w-full max-w-[1020px]"
    >
      <div className="bg-gray-800 px-8 py-6 rounded-lg flex flex-col gap-2">
        <header
          className="flex justify-between
        "
        >
          <strong className="text-lg font-bold uppercase">
            An error ocurred
          </strong>
          <button
            className="ml-auto text-green-500"
            onClick={() => {
              navigator.clipboard.writeText(error.stack ?? '')
              toast('Copied to clipboard')
            }}
          >
            copy
          </button>
        </header>
        <main className="flex flex-col gap-8">
          <span className="text-error">Error: {error.message}</span>

          <pre className="bg-gray-900/50 p-4 rounded-lg overflow-auto relative pt-8">
            <span className="absolute top-2 text-xs text-gray-300/50">
              you can use this information to create an issue so that we can fix
              it in the future
            </span>
            {error.stack}
          </pre>
          <div className="grid grid-cols-2 gap-4">
            <Link
              href={'/'}
              className="bg-gray-600/40 hover:bg-gray-600/70 transition-colors rounded-lg py-2 px-6 text-center"
            >
              Go back
            </Link>
            <button
              onClick={() => reset()}
              className="bg-red-500/40 hover:bg-red-500/70 transition-colors rounded-lg py-2 px-6 text-center"
            >
              Try again
            </button>
          </div>
        </main>
      </div>
    </section>
  )
}

export default Page
