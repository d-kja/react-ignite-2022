import { NextAuthOptions } from 'next-auth'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'
import { PrismaAdapter } from './prisma-adapter'

/*
  @Example

  You don't necessarily need this extra layer to have access to the headers.

  Now with next 13 we can use the cookies by importing the cookies module frin the next/headers package
  
  And to be completely honest this layer causes more issues than benefits

  export const generateAuthOptions = (
    req: NextApiRequest,
    res: NextApiResponse,
  ): NextAuthOptions => {
    return {
      // adapter: PrismaAdapter(req, res),

      providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_OAUTH_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_OAUTH_SECRET!,

          authorization: {
            params: {
              scope:
                'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar',
            },
          },

          // Mapping the data returned from the google api
          // profile: (user: GoogleProfile) => ({
          //   id: user.sub,
          //   name: user.name,
          //   username: user.name,
          //   email: user.email,
          //   avatar_url: user.picture,
          // }),
        }),
      ],
      callbacks: {
        signIn: ({ account }) => {
          if (
            account?.scope?.includes('https://www.googleapis.com/auth/calendar')
          )
            return true

          return '/register/connect-calendar?error=calendar-scope-permission'
        },
      },
    }
  }
*/
export const authConfig: NextAuthOptions = {
  // Custom adapter to handle user/session/account creation
  adapter: PrismaAdapter(),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_OAUTH_SECRET!,

      authorization: {
        params: {
          // Force refresh token
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',

          // Google requires to whole url to reference the scope
          scope:
            'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar',
        },
      },

      // Mapping the data returned from the google api
      profile: (user: GoogleProfile) => ({
        id: user.sub,
        name: user.name,
        username: user.name,
        email: user.email,
        avatar_url: user.picture,
      }),
    }),
  ],
  callbacks: {
    signIn: async ({ account }) => {
      // Checking if the account used has the Calendar scope authorization
      if (account?.scope?.includes('https://www.googleapis.com/auth/calendar'))
        return true

      // Redirecting
      return '/register/connect-calendar?error=calendar-scope-permission'
    },
    session: async ({ session, user }) => ({
      ...session,
      user,
    }),
  },
}
