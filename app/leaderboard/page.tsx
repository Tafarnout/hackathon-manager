"use client";

import { LeaderboardTable } from "@/components/leaderboard/leaderboard-table";
import { LeaderboardStats } from "@/components/leaderboard/leaderboard-stats";
import { LeaderboardFilters } from "@/components/leaderboard/leaderboard-filters";
import { mockParticipants } from "@/lib/data/leaderboard";
import { useState } from "react";

export default function LeaderboardPage() {
  const [timeRange, setTimeRange] = useState<"all" | "month" | "week">("all");
  const [sortBy, setSortBy] = useState<"points" | "achievements" | "wins">("points");

  const sortedParticipants = [...mockParticipants].sort((a, b) => {
    switch (sortBy) {
      case "achievements":
        return b.achievements - a.achievements;
      case "wins":
        return b.hackathonsWon - a.hackathonsWon;
      default:
        return b.points - a.points;
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Leaderboard</h1>
          <p className="text-muted-foreground">
            Top performers and their achievements
          </p>
        </div>

        <LeaderboardStats participants={sortedParticipants.slice(0, 3)} />

        <div className="flex flex-col gap-4">
          <LeaderboardFilters
            timeRange={timeRange}
            setTimeRange={setTimeRange}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          <LeaderboardTable participants={sortedParticipants} />
        </div>
      </div>
    </div>
  );
}