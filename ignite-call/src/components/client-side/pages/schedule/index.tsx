'use client'

import { api } from '@/lib/axios'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

import { Avatar, Heading, Text } from '@ignite-ui/react'
import { Container, UserHeader } from './styles'

import { ConfirmStep } from './shards/comfirm-form/confirm-step'
import { CalendarStep } from './shards/schedule-form/calendar-step'

type User = {
  avatar_url: string
  name: string
  username: string
  bio: string
}

const getUserByUsername = async (username: string): Promise<User | void> => {
  try {
    const response = await api.get(`/users/${username}`)

    if (!response.data)
      throw new Error('Unable to find user with the ID provided')

    return response.data
  } catch (error) {
    console.error('[Schedule-page/get-user-by-id] - an error ocurred', error)
  }
}

export default function Schedule() {
  const session = useSession()
  const [user, setUser] = useState<User | null>(null)
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null)

  const username = session.data?.user.username

  useEffect(() => {
    if (username) {
      const getUser = async () => {
        const userData = await getUserByUsername(username)
        if (userData) setUser(userData)
      }

      getUser()
    }
  }, [username])

  const handleClearSelectedDateTime = () => setSelectedDateTime(null)

  return (
    <Container>
      <UserHeader>
        <Avatar src={user?.avatar_url} />
        <Heading>{user?.name}</Heading>
        <Text>{user?.name}</Text>
      </UserHeader>

      <>
        {selectedDateTime ? (
          <ConfirmStep
            scheduleDate={selectedDateTime}
            onCancelSchedule={handleClearSelectedDateTime}
          />
        ) : (
          <CalendarStep onChangeDate={setSelectedDateTime} />
        )}
      </>
    </Container>
  )
}
