import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trophy, Medal, Award } from "lucide-react";
import { Participant } from "@/types/leaderboard";

interface LeaderboardTableProps {
  participants: Participant[];
}

export function LeaderboardTable({ participants }: LeaderboardTableProps) {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />;
      default:
        return null;
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-12">Rank</TableHead>
          <TableHead>Participant</TableHead>
          <TableHead className="text-right">Points</TableHead>
          <TableHead className="text-right">Achievements</TableHead>
          <TableHead className="text-right">Hackathons Won</TableHead>
          <TableHead className="text-right">Projects</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {participants.map((participant) => (
          <TableRow key={participant.id}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                {getRankIcon(participant.rank)}
                {participant.rank}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={participant.avatarUrl} />
                  <AvatarFallback>
                    {participant.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{participant.name}</div>
                  <div className="flex gap-1 mt-1">
                    {participant.badges.map((badge) => (
                      <Badge
                        key={badge.id}
                        variant="secondary"
                        className="text-xs"
                      >
                        {badge.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-right font-medium">
              {participant.points.toLocaleString()}
            </TableCell>
            <TableCell className="text-right">
              {participant.achievements}
            </TableCell>
            <TableCell className="text-right">
              {participant.hackathonsWon}
            </TableCell>
            <TableCell className="text-right">
              {participant.projectsSubmitted}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}