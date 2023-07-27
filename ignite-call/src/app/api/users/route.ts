import { prisma } from '@/lib/prisma'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const CreateUserBodyType = z.object({
  username: z.string(),
  name: z.string(),
})

export const POST = async (request: NextRequest) => {
  const body = await request.json()

  try {
    const { name, username } = CreateUserBodyType.parse(body)

    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        username,
      },
    })

    if (userAlreadyExists) {
      return NextResponse.json(
        {
          message: 'Username already taken',
        },
        {
          status: 400,
        },
      )
    }

    const user = await prisma.user.create({
      data: {
        name,
        username,
      },
    })

    cookies().set('@ignite-call/user-id', user.id, {
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })

    return NextResponse.json(user)
  } catch (error: any) {
    const errorMessage = error?.message?.length
      ? error.message
      : '[Generic] An error ocurred'

    // Another option
    return new Response(errorMessage, {
      status: 404,
    })
  }
}
