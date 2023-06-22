import { Posts } from '@/components/Posts'
import { SearchPublicationsBar } from '@/components/SearchPublicationsBar'
import { UserCard } from '@/components/UserCard'

export default function Home() {
  return (
    <div className="h-screen mt-[2.875rem]">
      {/* @ts-expect-error Server Component */}
      <UserCard />
      <SearchPublicationsBar className="mt-[4.5rem]" />
      <Posts />
    </div>
  )
}
