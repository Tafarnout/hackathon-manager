import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LeaderboardFiltersProps {
  timeRange: "all" | "month" | "week";
  setTimeRange: (value: "all" | "month" | "week") => void;
  sortBy: "points" | "achievements" | "wins";
  setSortBy: (value: "points" | "achievements" | "wins") => void;
}

export function LeaderboardFilters({
  timeRange,
  setTimeRange,
  sortBy,
  setSortBy,
}: LeaderboardFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Time Range:</span>
        <Select value={timeRange} onValueChange={(value: any) => setTimeRange(value)}>
          <SelectTrigger className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Time</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
            <SelectItem value="week">This Week</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Sort By:</span>
        <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
          <SelectTrigger className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="points">Points</SelectItem>
            <SelectItem value="achievements">Achievements</SelectItem>
            <SelectItem value="wins">Hackathon Wins</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}