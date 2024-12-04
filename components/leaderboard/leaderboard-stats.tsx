import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Medal, Award } from "lucide-react";
import { Participant } from "@/types/leaderboard";

interface LeaderboardStatsProps {
  participants: Participant[];
}

export function LeaderboardStats({ participants }: LeaderboardStatsProps) {
  const icons = [
    <Trophy key="trophy" className="h-8 w-8 text-yellow-500" />,
    <Medal key="medal" className="h-8 w-8 text-gray-400" />,
    <Award key="award" className="h-8 w-8 text-amber-600" />,
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {participants.map((participant, index) => (
        <Card key={participant.id}>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              {icons[index]}
              <Avatar className="h-12 w-12">
                <AvatarImage src={participant.avatarUrl} />
                <AvatarFallback>
                  {participant.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{participant.name}</p>
                <p className="text-sm text-muted-foreground">
                  {participant.points.toLocaleString()} points
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}