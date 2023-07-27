import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { ForwardRefRenderFunction, ReactNode, forwardRef } from 'react'

import { tw } from '@/libs/utils/tw-classes-utility'
import { VariantProps, cva } from 'class-variance-authority'

const linkVariants = cva(
  'flex gap-2 items-center justify-center font-bold text-xs border-b border-transparent uppercase w-auto',
  {
    variants: {
      variant: {
        primary: 'text-base-blue hover:border-base-blue',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)

interface LinkProps extends NextLinkProps, VariantProps<typeof linkVariants> {
  children: ReactNode
}

const LinkBase: ForwardRefRenderFunction<HTMLAnchorElement, LinkProps> = (
  { children, ...props },
  ref,
) => {
  return (
    <NextLink className={tw(linkVariants())} {...props} ref={ref}>
      {children}
    </NextLink>
  )
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(LinkBase)
