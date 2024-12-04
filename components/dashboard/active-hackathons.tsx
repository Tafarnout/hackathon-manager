import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";

export function ActiveHackathons() {
  const activeHackathons = [
    {
      id: "1",
      title: "AI Innovation Challenge",
      progress: 65,
      daysLeft: 5,
      nextMilestone: "Project Submission",
      deadline: "2024-04-15",
    },
    {
      id: "2",
      title: "Web3 DeFi Hackathon",
      progress: 30,
      daysLeft: 12,
      nextMilestone: "Midway Demo",
      deadline: "2024-04-22",
    },
  ];

  return (
    <div className="grid gap-6">
      {activeHackathons.map((hackathon) => (
        <Card key={hackathon.id}>
          <CardHeader>
            <CardTitle>{hackathon.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Progress</span>
                  <span className="text-muted-foreground">{hackathon.progress}%</span>
                </div>
                <Progress value={hackathon.progress} />
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{hackathon.daysLeft} days left</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Due {hackathon.deadline}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm">
                  Next: <span className="font-medium">{hackathon.nextMilestone}</span>
                </p>
                <Link href={`/hackathons/${hackathon.id}`}>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}