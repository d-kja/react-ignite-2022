import { PostCard } from '@/components/PostCard'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import rehypeHighlight from 'rehype-highlight'
import { getPost } from '../../../libs/utils/api-utility'

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPost(params.id)

  return (
    <div className="h-screen mt-[2.875rem]">
      {/* @ts-expect-error Server Component */}
      <PostCard id={params.id} />
      <main className="max-w-screen-base mx-auto p-10">
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {postData.body}
        </ReactMarkdown>
      </main>
    </div>
  )
}
