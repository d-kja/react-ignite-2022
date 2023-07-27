import { Adapter } from 'next-auth/adapters'
import { cookies } from 'next/headers'
import { prisma } from '../prisma'

export const PrismaAdapter = (): Adapter => {
  return {
    async createUser(user) {
      // Throws an error as the Type isn't properly set by default
      // const userIdCookie = (req.cookies?.get)(
      //   '@ignite-call/user-id',
      // )

      // Better solution overall and it works wonders
      const userIdCookie = cookies()?.get('@ignite-call/user-id')

      if (!userIdCookie) throw new Error('Unable to find user-id cookie')

      const updatedUser = await prisma.user.update({
        where: {
          id: userIdCookie.value,
        },
        data: {
          avatar_url: user.avatar_url,
          email: user.email,
          name: user.name,
        },
      })

      cookies().delete('@ignite-call/user-id')

      return {
        id: updatedUser.id,
        name: updatedUser.name,
        username: updatedUser.username,
        email: updatedUser.email!,
        emailVerified: null,
        avatar_url: updatedUser.avatar_url!,
      }
    },

    async getUser(id) {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      })

      if (!user) return null

      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email!,
        emailVerified: null,
        avatar_url: user.avatar_url!,
      }
    },

    async getUserByEmail(email) {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      })

      if (!user) return null

      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email!,
        emailVerified: null,
        avatar_url: user.avatar_url!,
      }
    },

    async getUserByAccount({ providerAccountId, provider }) {
      const account = await prisma.account.findUnique({
        where: {
          provider_provider_account_id: {
            provider,
            provider_account_id: providerAccountId,
          },
        },
        include: {
          user: true,
        },
      })

      if (!account) return null

      const { user } = account

      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email!,
        emailVerified: null,
        avatar_url: user.avatar_url!,
      }
    },

    async updateUser(user) {
      const updatedUser = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          avatar_url: user.avatar_url,
          name: user.name,
          email: user.email,
        },
      })

      return {
        id: updatedUser.id,
        name: updatedUser.name,
        username: updatedUser.username,
        email: updatedUser.email!,
        emailVerified: null,
        avatar_url: updatedUser.avatar_url!,
      }
    },

    async linkAccount(account) {
      await prisma.account.create({
        data: {
          user_id: account.userId,
          type: account.type,
          provider: account.provider,
          provider_account_id: account.providerAccountId,
          refresh_token: account.refresh_token,
          access_token: account.access_token,
          expires_at: account.expires_at,
          token_type: account.token_type,
          scope: account.scope,
          id_token: account.id_token,
          session_state: account.session_state,
        },
      })
    },

    async createSession({ sessionToken, userId, expires }) {
      const session = await prisma.session.create({
        data: {
          expires,
          user_id: userId,
          session_token: sessionToken,
        },
      })

      return {
        expires: session.expires,
        sessionToken: session.session_token,
        userId: session.user_id,
      }
    },

    async getSessionAndUser(sessionToken) {
      const prismaSession = await prisma.session.findUnique({
        where: {
          session_token: sessionToken,
        },
        include: {
          user: true,
        },
      })

      if (!prismaSession) return null

      const { user, ...session } = prismaSession

      return {
        session: {
          expires: session.expires,
          sessionToken: session.session_token,
          userId: session.user_id,
        },
        user: {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email!,
          emailVerified: null,
          avatar_url: user.avatar_url!,
        },
      }
    },

    async updateSession({ sessionToken, expires, userId }) {
      const session = await prisma.session.update({
        where: {
          session_token: sessionToken,
        },
        data: {
          user_id: userId,
          expires,
        },
      })

      return {
        userId: session.user_id,
        expires: session.expires,
        sessionToken: session.session_token,
      }
    },

    async deleteSession(sessionToken) {
      await prisma.session.delete({
        where: {
          session_token: sessionToken,
        },
      })
    },
  }
}
