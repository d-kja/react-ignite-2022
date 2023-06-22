import { CardSuspense } from '@/components/UserCard/CardSuspense'
import { PostCardSuspense } from '@/components/primitive/Card/PostCardSuspense'
import { Input } from '@/components/primitive/Input'
import { FC } from 'react'

const loading: FC = () => {
  return (
    <div className="h-screen mt-[2.875rem] max-w-screen-base mx-auto mb-20">
      <CardSuspense />
      <section
        title="Search publications"
        className="mt-[4.5rem] flex flex-col mx-auto gap-3"
      >
        <div className="flex justify-between items-center">
          <label
            htmlFor="search-bar"
            className="font-bold text-lg text-base-sub-title"
          >
            Publications
          </label>
          <span className="text-sm font-normal text-base-span">
            {0} publications
          </span>
        </div>

        <Input
          id="search-bar"
          placeholder="Search content"
          className="w-full"
          disabled
        />
      </section>
      <div className="mt-12 max-w-screen-base mx-auto gap-8 grid grid-cols-2 ">
        <PostCardSuspense />
      </div>
    </div>
  )
}

export default loading
