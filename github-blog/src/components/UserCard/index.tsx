import { Link } from '@/components/primitive/Link'
import { getProfile } from '@/libs/utils/api-utility'
import { Building, ExternalLink, LucideGithub, Users } from 'lucide-react'
import Image from 'next/image'

export const UserCard = async () => {
  const userProfile = await getProfile()

  return (
    <section
      title="User profile"
      className="px-9 py-8 flex gap-8 bg-base-profile rounded-[10px] max-w-screen-base w-full mx-auto "
    >
      <Image
        className="w-[9.25rem] h-[9.25rem] rounded-lg"
        width={148}
        height={148}
        src={userProfile.avatar_url}
        loading="lazy"
        alt="user profile picture"
      />
      <div className="flex flex-col flex-1 gap-2">
        <div className="flex justify-between">
          <strong className="font-bold text-2xl text-base-title">
            {userProfile.name}
          </strong>
          <Link href={userProfile.html_url}>
            GITHUB <ExternalLink size={12} />
          </Link>
        </div>
        <div className="flex flex-col flex-1">
          <span className="font-normal text-base text-base-text">
            {userProfile.bio}
          </span>
          <div className="flex gap-6 mt-auto text-base-sub-title">
            <span className="flex gap-2 items-center">
              <LucideGithub size={18} className="text-base-label" />
              {userProfile.login}
            </span>
            <span className="flex gap-2 items-center">
              <Building size={18} className="text-base-label" />
              {userProfile.company}
            </span>
            <span className="flex gap-2 items-center">
              <Users size={18} className="text-base-label" />
              {userProfile.followers} Followers
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
