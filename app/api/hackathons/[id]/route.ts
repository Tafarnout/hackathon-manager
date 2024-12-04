import { NextResponse } from 'next/server'
import prisma from '@/lib/db'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const hackathon = await prisma.hackathon.findUnique({
      where: {
        id: params.id,
      },
      include: {
        createdBy: true,
        participants: {
          include: {
            user: true,
          },
        },
        submissions: {
          include: {
            user: true,
          },
        },
        _count: {
          select: {
            participants: true,
            submissions: true,
          },
        },
      },
    })

    if (!hackathon) {
      return NextResponse.json(
        { error: 'Hackathon not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(hackathon)
  } catch (error) {
    console.error('Error in GET /api/hackathons/[id]:', error)
    return NextResponse.json(
      { error: 'Failed to fetch hackathon', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
