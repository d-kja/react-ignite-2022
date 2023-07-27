'use client'

import { styled } from '@ignite-ui/react'

export const Container = styled('main', {
  maxWidth: 572,
  height: 350,
  margin: '$20 auto $4',
  padding: '0 $4',
})

export const RegisterFormSkeleton = () => {
  return <Container />
}
