import NextAuth from 'next-auth'

import { authConfig } from '@/lib/auth/next-auth'

// https://next-auth.js.org/configuration/nextjs#in-app-directory
// https://github.com/ghoshnirmalya/the-fullstack-app
// const apiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
//   await NextAuth(req, res, generateAuthOptions(req, res))
// }

const apiHandler = NextAuth(authConfig)

export { apiHandler as GET, apiHandler as POST }
