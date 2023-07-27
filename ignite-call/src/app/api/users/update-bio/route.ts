import { authConfig } from '@/lib/auth/next-auth'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'
import { updateBioBodySchema } from './update-bio'

export const PUT = async (request: NextRequest) => {
  const body = await request.json()

  try {
    const session = await getServerSession(authConfig)
    if (!session) throw new Error('Unable to find user session')

    const { bio } = updateBioBodySchema.parse(body)

    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        bio,
      },
    })

    return new Response(undefined, {
      status: 204,
    })
  } catch (error) {
    console.error(error)
    return NextResponse.error()
  }
}
