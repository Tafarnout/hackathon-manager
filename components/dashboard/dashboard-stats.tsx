import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Trophy, Code2, Target } from "lucide-react";

export function DashboardStats() {
  const stats = [
    {
      title: "Hackathons Joined",
      value: "5",
      icon: Trophy,
      description: "2 currently active",
    },
    {
      title: "Projects Submitted",
      value: "8",
      icon: Code2,
      description: "1 under review",
    },
    {
      title: "Achievements",
      value: "12",
      icon: Award,
      description: "3 this month",
    },
    {
      title: "Points Earned",
      value: "1,250",
      icon: Target,
      description: "Rank #25",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}