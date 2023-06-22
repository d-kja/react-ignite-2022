'use client'

import { useDebouncedState } from '@mantine/hooks'
import { useQuery } from '@tanstack/react-query'
import { FC, ReactNode, createContext, useContext, useEffect } from 'react'
import { getPosts } from '../libs/utils/api-utility'
import type { Post } from './@types/post-context-types'

interface PostsContextProps {
  posts: Post[]
  searchQuery: string
  totalPostsAmount: number
  updateSearchQuery: (query: string) => void
}

const PostsContext = createContext<PostsContextProps>({} as PostsContextProps)

interface PostsProviderProps {
  children: ReactNode
}

export const PostsProvider: FC<PostsProviderProps> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useDebouncedState('', 500)
  const { data: posts, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => getPosts(searchQuery),
    staleTime: 1000 * 60 * 10, // 10 minutes
  })

  useEffect(() => {
    if (searchQuery.length) {
      refetch()
    }
  }, [searchQuery, refetch])

  const totalPostsAmount = posts?.length

  const updateSearchQuery = (query: string) => setSearchQuery(query)

  return (
    <PostsContext.Provider
      value={{ posts, totalPostsAmount, searchQuery, updateSearchQuery }}
    >
      {children}
    </PostsContext.Provider>
  )
}

export const usePosts = () => useContext(PostsContext)
