import dayjs from 'dayjs'
import { google } from 'googleapis'
import { prisma } from './prisma'

export const getGoogleOAuthToken = async (userId: string) => {
  const account = await prisma.account.findFirstOrThrow({
    where: {
      provider: 'google',
      user_id: userId,
    },
  })

  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID
  const clientSecret = process.env.GOOGLE_OAUTH_SECRET

  const auth = new google.auth.OAuth2({
    clientId,
    clientSecret,
  })

  const expiryDateInMiliseconds = account.expires_at
    ? account.expires_at * 1000
    : null

  auth.setCredentials({
    access_token: account.access_token,
    refresh_token: account.refresh_token,
    expiry_date: expiryDateInMiliseconds,
  })

  if (!account.expires_at) return auth

  const isTokenExpired = dayjs(expiryDateInMiliseconds).isBefore(new Date())

  if (isTokenExpired) {
    const {
      credentials: {
        access_token,
        expiry_date,
        id_token,
        refresh_token,
        scope,
        token_type,
      },
    } = await auth.refreshAccessToken()

    const expires_at = expiry_date ? Math.floor(expiry_date / 1000) : null

    await prisma.account.update({
      where: {
        id: account.id,
      },
      data: {
        access_token,
        expires_at,
        id_token,
        refresh_token,
        scope,
        token_type,
      },
    })

    auth.setCredentials({
      access_token,
      refresh_token,
      expiry_date,
    })
  }

  return auth
}
