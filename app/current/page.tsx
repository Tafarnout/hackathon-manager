import { EmptyHackathon } from "@/components/hackathons/empty-hackathon";
import { CountdownTimer } from "@/components/hackathons/countdown-timer";
import { HackathonWithRelations } from "@/types/hackathon";
import prisma from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Users } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";

async function getCurrentHackathon(): Promise<HackathonWithRelations | null> {
  try {
    // Get the test user
    const user = await prisma.user.findFirst({
      where: {
        email: 'test@example.com'
      }
    });

    if (!user) return null;

    // Get the active hackathon that the user is participating in
    const hackathon = await prisma.hackathon.findFirst({
      where: {
        status: 'ACTIVE',
        participants: {
          some: {
            userId: user.id
          }
        }
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
    });

    return hackathon;
  } catch (error) {
    console.error('Error fetching current hackathon:', error);
    return null;
  }
}

export default async function CurrentHackathonPage() {
  const hackathon = await getCurrentHackathon();

  if (!hackathon) {
    return <EmptyHackathon />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Current Hackathon</h1>
          <Link href={`/hackathons/${hackathon.id}`}>
            <Button variant="outline">View Details</Button>
          </Link>
        </div>

        <CountdownTimer endDate={hackathon.endDate} />

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary" className="bg-green-500/10 text-green-500">
                ACTIVE
              </Badge>
              <Badge variant="outline">{hackathon.skillLevel}</Badge>
            </div>
            <div className="space-y-2">
              <CardTitle className="text-3xl">{hackathon.title}</CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={hackathon.createdBy.image || ''} alt={hackathon.createdBy.name} />
                  <AvatarFallback>{hackathon.createdBy.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <span>Organized by {hackathon.createdBy.name}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <div className="text-sm">
                  <div className="font-medium">Date</div>
                  <div className="text-muted-foreground">
                    {format(new Date(hackathon.startDate), "MMM d")} -{" "}
                    {format(new Date(hackathon.endDate), "MMM d, yyyy")}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <div className="text-sm">
                  <div className="font-medium">Participants</div>
                  <div className="text-muted-foreground">
                    {hackathon._count?.participants || 0} registered
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                <div className="text-sm">
                  <div className="font-medium">Submissions</div>
                  <div className="text-muted-foreground">
                    {hackathon._count?.submissions || 0} projects
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground">{hackathon.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {hackathon.categories.map((category) => (
                  <Badge key={category} variant="secondary">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
