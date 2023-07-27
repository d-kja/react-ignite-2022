import { ProductCardSkeleton } from '@/components/ui/loading/ProductCardSkeleton'

const Loading = () => {
  return (
    <main className="flex w-full max-w-[calc(100vw-((100vw-1180px)/2))] ml-auto min-h-[658px] relative overflow-hidden">
      <div className="grid grid-cols-3 gap-8 w-full absolute inset-0 left-12">
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </div>
    </main>
  )
}

export default Loading
