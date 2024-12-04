import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Star, MessageSquare, GitPullRequest } from "lucide-react";

export function RecentActivity() {
  const activities = [
    {
      icon: Trophy,
      title: "Won 2nd place in AI Innovation Challenge",
      timestamp: "2 hours ago",
      type: "achievement",
    },
    {
      icon: GitPullRequest,
      title: "Submitted project for Web3 DeFi Hackathon",
      timestamp: "1 day ago",
      type: "submission",
    },
    {
      icon: MessageSquare,
      title: "Received feedback on your AR/VR project",
      timestamp: "2 days ago",
      type: "feedback",
    },
    {
      icon: Star,
      title: "Earned the 'Code Master' achievement",
      timestamp: "3 days ago",
      type: "achievement",
    },
  ];

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div key={index} className="flex gap-4">
              <div className="relative flex flex-col items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <activity.icon className="h-4 w-4 text-primary" />
                </div>
                {index < activities.length - 1 && (
                  <div className="h-full w-px bg-border" />
                )}
              </div>
              <div className="flex-1 pt-1">
                <p className="text-sm font-medium">{activity.title}</p>
                <p className="text-xs text-muted-foreground">
                  {activity.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}