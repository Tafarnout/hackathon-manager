import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create a test user
  const user = await prisma.user.create({
    data: {
      name: 'Test User',
      email: 'test@example.com',
      image: 'https://avatars.githubusercontent.com/u/1?v=4',
    },
  })

  // Create a test hackathon
  await prisma.hackathon.create({
    data: {
      title: 'Next.js Hackathon',
      description: 'Build amazing web applications with Next.js',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-01-15'),
      status: 'UPCOMING',
      skillLevel: 'INTERMEDIATE',
      categories: ['Web', 'UI/UX', 'Cloud'],
      userId: user.id,
    },
  })

  console.log('Seed data created successfully')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
