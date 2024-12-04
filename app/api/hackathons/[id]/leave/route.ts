import { NextResponse } from 'next/server'
import prisma from '@/lib/db'

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Get the test user
    const user = await prisma.user.findFirst({
      where: {
        email: 'test@example.com'
      }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Test user not found' },
        { status: 404 }
      )
    }

    // Delete the participant record
    await prisma.participant.deleteMany({
      where: {
        hackathonId: params.id,
        userId: user.id,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error leaving hackathon:', error)
    return NextResponse.json(
      { error: 'Failed to leave hackathon' },
      { status: 500 }
    )
  }
}
