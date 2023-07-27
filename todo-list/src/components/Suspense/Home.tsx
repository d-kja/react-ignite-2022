export const Home = () => {
  return (
    <main>
      <div className="flex justify-center items-center gap-2 -mt-[1.6875rem] md:mx-0 mx-2">
        <div className="h-[3.375rem] max-w-[32.75rem] w-full rounded-lg input bg-gradient-to-t from-transparent to-gray-500 animate-pulse" />
        <div className="btn border-none text-gray-100  w-24 animate-pulse bg-gradient-to-t from-transparent to-gray-500 hover:bg-transparent" />
      </div>
      <section className="mt-16 max-w-[46rem] md:mx-auto mx-2">
        <div className="flex justify-between opacity-75">
          <div className="flex gap-2 items-center">
            <strong className="font-bold text-sm text-blue-default">
              Created tasks
            </strong>
            <span className="bg-gray-400 px-2 py-[0.125rem] rounded-full text-xs font-bold">
              0
            </span>
          </div>

          <div className="flex gap-2 items-center">
            <strong className="font-bold text-sm text-purple-default">
              Finished
            </strong>
            <span className="bg-gray-400 px-2 py-[0.125rem] rounded-full text-xs font-bold">
              0
            </span>
          </div>
        </div>
        <div className={"border-gray-400 mt-6 "}>
          <div className="flex flex-col gap-3">
            <div className="p-4 bg-gray-500 border border-gray-400 rounded-lg flex gap-3 max-w-[736px] h-14 animate-pulse delay-200" />
            <div className="p-4  rounded-lg flex gap-3 max-w-[736px] h-14 animate-pulse delay-50 bg-gradient-to-t from-transparent to-gray-500" />
          </div>
        </div>
      </section>
    </main>
  )
}
