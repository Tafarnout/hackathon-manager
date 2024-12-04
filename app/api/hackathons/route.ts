import { NextResponse, Request } from 'next/server'
import prisma from '@/lib/db'

export async function GET() {
  try {
    const hackathons = await prisma.hackathon.findMany({
      include: {
        createdBy: true,
        _count: {
          select: {
            participants: true,
            submissions: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(hackathons)
  } catch (error) {
    console.error('Error fetching hackathons:', error)
    return NextResponse.json(
      { error: 'Failed to fetch hackathons' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  console.log('POST /api/hackathons called');
  try {
    const data = await request.json();
    console.log('Request data:', data);
    
    // Get the user ID from the request headers or auth token
    const authHeader = request.headers.get('Authorization');
    console.log('Auth header:', authHeader);

    if (!authHeader) {
      console.log('No auth header found');
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Parse the user ID from the auth header
    const userId = authHeader.replace('Bearer ', '');
    console.log('Looking up user with ID:', userId);
    
    // Test database connection
    try {
      await prisma.$queryRaw`SELECT 1`;
      console.log('Database connection successful');
    } catch (dbError) {
      console.error('Database connection failed:', dbError);
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 500 }
      );
    }
    
    // First ensure the user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    console.log('Found user:', user);

    if (!user) {
      console.log('User not found with ID:', userId);
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }
    
    // Create hackathon in database
    const hackathon = await prisma.hackathon.create({
      data: {
        title: data.title,
        description: data.description,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        status: 'UPCOMING',
        skillLevel: data.skillLevel.toUpperCase(),
        categories: data.categories,
        userId: user.id,
      },
      include: {
        createdBy: true,
        _count: {
          select: {
            participants: true,
            submissions: true,
          },
        },
      },
    });

    console.log('Created hackathon:', hackathon);
    return NextResponse.json(hackathon);
  } catch (error) {
    console.error('Error creating hackathon:', error);
    return NextResponse.json(
      { error: 'Failed to create hackathon' },
      { status: 500 }
    );
  }
}
