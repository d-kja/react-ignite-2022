const Page = () => {
  return (
    <main className="grid grid-cols-2 items-stretch gap-16 max-w-base mx-auto w-full">
      <div className="w-full max-w-[576px] bg-gray-700/60 animate-pulse rounded-lg p-1 flex items-center justify-center">
        <div className="object-cover h-[calc(656px-0.5rem)]" />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <div className="w-full flex gap-2">
            <div className="w-5 h-5 rounded-full bg-gray-700/60 animate-pulse p-1" />
            <div className="w-full flex-1 bg-gray-700/60 animate-pulse rounded-lg p-1" />
          </div>
          <div className="w-[85%] bg-gray-700/60 animate-pulse rounded-lg p-2" />
          <div className="w-[75%] bg-gray-700/60 animate-pulse rounded-lg p-2" />
        </div>
        <div className="mt-auto bg-green-500/60 animate-pulse  hover:transition-[filter] text-white rounded-lg p-5 font-bold text-lg h-[4.25rem]" />
      </div>
    </main>
  )
}

export default Page
