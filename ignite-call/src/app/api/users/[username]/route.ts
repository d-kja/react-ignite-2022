import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { UsersDynamicParams } from './users-route-type'

export const GET = async (_: unknown, reqParams: UsersDynamicParams) => {
  const { username } = reqParams.params

  if (!username)
    return new Response("missing user's username", {
      status: 400,
    })

  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        username,
      },
    })

    return NextResponse.json({
      name: user.name,
      username: user.username,
      bio: user.bio,
      email: user.email,
      avatar_url: user.avatar_url,
    })
  } catch (error: any) {
    const statusCode = 400
    const errorMessage =
      error instanceof String
        ? error
        : error?.message instanceof String
        ? error.message
        : 'An internal error ocurred'

    console.error('[Users/get-user-by-id] - an error ocurred', error)

    return new Response(
      JSON.stringify({
        message: errorMessage,
        status: statusCode,
      }),
      {
        status: statusCode,
      },
    )
  }
}
