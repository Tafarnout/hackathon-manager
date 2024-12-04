import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Target, Users, Zap, Code2 } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "First Win",
      description: "Won your first hackathon",
      date: "Mar 15, 2024",
      points: 500,
      type: "legendary",
    },
    {
      icon: Star,
      title: "Rising Star",
      description: "Completed 5 hackathons",
      date: "Mar 10, 2024",
      points: 300,
      type: "epic",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborated with 10 different participants",
      date: "Mar 5, 2024",
      points: 200,
      type: "rare",
    },
    {
      icon: Code2,
      title: "Code Master",
      description: "Submitted 10 projects",
      date: "Feb 28, 2024",
      points: 400,
      type: "epic",
    },
  ];

  const badgeVariants = {
    legendary: "bg-yellow-500/10 text-yellow-500",
    epic: "bg-purple-500/10 text-purple-500",
    rare: "bg-blue-500/10 text-blue-500",
  };

  return (
    <div className="grid gap-6">
      {achievements.map((achievement, index) => (
        <Card key={index}>
          <CardContent className="flex items-center gap-4 py-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <achievement.icon className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
                <Badge
                  variant="secondary"
                  className={badgeVariants[achievement.type as keyof typeof badgeVariants]}
                >
                  +{achievement.points} pts
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Earned on {achievement.date}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}