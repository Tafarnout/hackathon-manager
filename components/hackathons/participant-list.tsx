"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Users } from "lucide-react";

interface Participant {
  id: string;
  name: string;
  avatarUrl?: string;
  role: "participant" | "mentor" | "judge";
  team?: string;
  joinedAt: Date;
}

interface ParticipantListProps {
  participants: Participant[];
}

export function ParticipantList({ participants }: ParticipantListProps) {
  const roleColors = {
    participant: "bg-blue-500/10 text-blue-500",
    mentor: "bg-purple-500/10 text-purple-500",
    judge: "bg-yellow-500/10 text-yellow-500",
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Participants</CardTitle>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {participants.length} total
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {participants.map((participant) => (
              <div
                key={participant.id}
                className="flex items-center justify-between p-2 rounded-lg border"
              >
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
                    <p className="font-medium">{participant.name}</p>
                    {participant.team && (
                      <p className="text-sm text-muted-foreground">
                        Team: {participant.team}
                      </p>
                    )}
                  </div>
                </div>
                <Badge
                  variant="secondary"
                  className={roleColors[participant.role]}
                >
                  {participant.role.charAt(0).toUpperCase() +
                    participant.role.slice(1)}
                </Badge>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}