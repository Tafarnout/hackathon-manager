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

    // Check if user has already joined
    const existingParticipant = await prisma.participant.findFirst({
      where: {
        hackathonId: params.id,
        userId: user.id,
      },
    })

    if (existingParticipant) {
      return NextResponse.json(
        { error: 'You have already joined this hackathon' },
        { status: 400 }
      )
    }

    // Join the hackathon
    const participant = await prisma.participant.create({
      data: {
        hackathonId: params.id,
        userId: user.id,
      },
      include: {
        user: true,
      },
    })

    return NextResponse.json(participant)
  } catch (error) {
    console.error('Error joining hackathon:', error)
    return NextResponse.json(
      { error: 'Failed to join hackathon' },
      { status: 500 }
    )
  }
}
