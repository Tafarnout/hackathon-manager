"use client";

import { HackathonWithRelations } from "@/types/hackathon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar, Trophy, Users } from "lucide-react";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HackathonCardProps {
  hackathon: HackathonWithRelations;
}

export function HackathonCard({ hackathon }: HackathonCardProps) {
  const statusColor = {
    UPCOMING: "bg-blue-500/10 text-blue-500",
    ACTIVE: "bg-green-500/10 text-green-500",
    COMPLETED: "bg-gray-500/10 text-gray-500",
  }[hackathon.status];

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className={statusColor}>
            {hackathon.status}
          </Badge>
          <Badge variant="outline">{hackathon.skillLevel}</Badge>
        </div>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold">{hackathon.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{hackathon.description}</p>
          </div>
          <Avatar className="h-8 w-8">
            <AvatarImage src={hackathon.createdBy.image || ''} alt={hackathon.createdBy.name} />
            <AvatarFallback>{hackathon.createdBy.name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4" />
            <span>
              {format(new Date(hackathon.startDate), "MMM d")} -{" "}
              {format(new Date(hackathon.endDate), "MMM d, yyyy")}
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>{hackathon._count?.participants || 0} Participants</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              <span>{hackathon._count?.submissions || 0} Submissions</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {hackathon.categories.map((category) => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/hackathons/${hackathon.id}`} className="w-full">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}