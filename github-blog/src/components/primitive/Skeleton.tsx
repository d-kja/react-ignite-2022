import { tw } from '@/libs/utils/tw-classes-utility'
import { ForwardRefRenderFunction, forwardRef } from 'react'

interface SkeletonProps {
  className?: string
}

const SkeletonBase: ForwardRefRenderFunction<HTMLDivElement, SkeletonProps> = ({
  className = '',
}) => {
  return (
    <div
      className={tw(
        'w-full h-full bg-base-post/50 animate-pulse rounded-md',
        className,
      )}
    />
  )
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(SkeletonBase)
