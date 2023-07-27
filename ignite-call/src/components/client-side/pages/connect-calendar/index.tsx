'use client'

import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { ArrowRight, Check } from 'lucide-react'
import { Container, Header } from '../register/styles'
import { ConnectBox, ConnectItem } from './styles'

import { signIn, useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'react-hot-toast'

export const ConnectCalendarPage = () => {
  const router = useRouter()
  const session = useSession()
  const queryParams = useSearchParams()

  const isAuthenticated = session.status === 'authenticated'

  if (
    !isAuthenticated &&
    queryParams.get('error') === 'calendar-scope-permission'
  ) {
    toast.error(
      'Falha ao se conectar ao Google, verifique se você liberou as permissões para a edição do Google Calendar',
      {
        style: {
          alignItems: 'baseline',
        },
      },
    )
  }

  const handleProviderSignIn = async () =>
    await signIn('google', {
      callbackUrl: '/register/connect-calendar',
    })

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>

          {isAuthenticated ? (
            <Button variant="secondary" size="sm" disabled>
              Conectado <Check />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleProviderSignIn}
            >
              <>
                Conectar
                <ArrowRight />
              </>
            </Button>
          )}
        </ConnectItem>

        <Button
          type="submit"
          disabled={!isAuthenticated}
          onClick={() => router.push('/register/time-intervals')}
        >
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
