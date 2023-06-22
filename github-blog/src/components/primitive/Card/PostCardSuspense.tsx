import { FC } from 'react'
import { Skeleton } from '../Skeleton'

export const PostCardSuspense: FC = () => {
  return (
    <>
      <Skeleton className="p-8 w-[26rem] h-[16.25rem] rounded-[10px] flex flex-col gap-5" />
      <Skeleton className="p-8 w-[26rem] h-[16.25rem] rounded-[10px] flex flex-col gap-5" />
      <Skeleton className="p-8 w-[26rem] h-[16.25rem] rounded-[10px] flex flex-col gap-5" />
      <Skeleton className="p-8  w-[26rem] h-[16.25rem] rounded-[10px] flex flex-col gap-5" />
    </>
  )
}
