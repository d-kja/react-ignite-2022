import { Link } from '@/components/primitive/Link'
import {
  Calendar,
  ChevronLeft,
  ExternalLink,
  LucideGithub,
  MessageCircle,
} from 'lucide-react'
import { getPost } from '../../libs/utils/api-utility'

interface PostCardProps {
  id: string
}

export const PostCard = async ({ id }: PostCardProps) => {
  // as the Next interface for fetch is going to be using cache and solving the issue that this could create, I'm fine with doing the request for each component
  const postData = await getPost(id)

  return (
    <section
      title="Post header"
      className="px-9 py-8 flex gap-8 bg-base-profile rounded-[10px] max-w-screen-base w-full mx-auto "
    >
      <div className="flex flex-col flex-1 gap-5">
        <div className="flex justify-between">
          <Link href={'/'}>
            <ChevronLeft size={12} />
            GO BACK
          </Link>
          <Link href={'https://github.com/nyyu.png'}>
            VIEW ON GITHUB
            <ExternalLink size={12} />
          </Link>
        </div>
        <div className="flex flex-col flex-1">
          <span className="font-bold text-2xl text-base-title">
            {postData.title}
          </span>
          <div className="flex gap-6 mt-auto text-base-span font-normal text-base">
            <span className="flex gap-2 items-center">
              <LucideGithub size={18} className="text-base-label" />
              {postData.user.login}
            </span>
            <span className="flex gap-2 items-center">
              <Calendar size={18} className="text-base-label" />
              {postData.formatted_time}
            </span>
            <span className="flex gap-2 items-center">
              <MessageCircle size={18} className="text-base-label" />
              {postData.comments} Comments
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
