'use client'

import appPreview from '@/assets/app-preview.png'
import Image from 'next/image'

import { Heading, Text } from '@ignite-ui/react'
import { ClaimUserForm } from './shards/claim-user-form'
import { Container, Hero, Preview } from './styles'

export const HomePage = () => {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="lg">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre
        </Text>
        <ClaimUserForm />
      </Hero>
      <Preview>
        <Image
          src={appPreview}
          height={400}
          quality={100}
          priority
          alt="Preview da aplicação em funcionamento"
        />
      </Preview>
    </Container>
  )
}
