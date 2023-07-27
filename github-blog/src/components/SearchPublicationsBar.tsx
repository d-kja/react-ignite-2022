'use client'

import { VariantProps, cva } from 'class-variance-authority'
import { FC } from 'react'
import { usePosts } from '../contexts/PostsContext'
import { tw } from '../libs/utils/tw-classes-utility'
import { Input } from './primitive/Input'

const searchPublicationsBarStyling = cva(
  'max-w-screen-base flex flex-col mx-auto gap-3',
)

interface SearchPublicationsBarProps
  extends VariantProps<typeof searchPublicationsBarStyling> {
  className?: string
}

export const SearchPublicationsBar: FC<SearchPublicationsBarProps> = ({
  className = '',
}) => {
  const { totalPostsAmount = 0, updateSearchQuery } = usePosts()

  return (
    <section
      title="Search publications"
      className={tw(searchPublicationsBarStyling({ className }))}
    >
      <div className="flex justify-between items-center">
        <label
          htmlFor="search-bar"
          className="font-bold text-lg text-base-sub-title"
        >
          Publications
        </label>
        <span className="text-sm font-normal text-base-span">
          {totalPostsAmount} publications
        </span>
      </div>

      <Input
        id="search-bar"
        placeholder="Search content"
        className="w-full"
        onChange={({ target }) => updateSearchQuery(target.value)}
      />
    </section>
  )
}
