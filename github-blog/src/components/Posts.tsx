'use client'

import Link from 'next/link'
import { FC } from 'react'
import { usePosts } from '../contexts/PostsContext'
import { Card } from './primitive/Card'
import { PostCardSuspense } from './primitive/Card/PostCardSuspense'

export const Posts: FC = () => {
  const { posts = [] } = usePosts()

  return (
    <div className="mt-12 max-w-screen-base mx-auto gap-8 grid grid-cols-2">
      {posts?.length > 0 ? (
        posts?.map((post) => (
          <Card.Root key={post.id} asChild>
            <Link href={`posts/${post.number}`}>
              <Card.Header>
                <Card.Title>{post.title}</Card.Title>
                <Card.Time>{post.formatted_time}</Card.Time>
              </Card.Header>
              <Card.Content>{post.body}</Card.Content>
            </Link>
          </Card.Root>
        ))
      ) : (
        <PostCardSuspense />
      )}
    </div>
  )
}
