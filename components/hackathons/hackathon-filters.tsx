"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useHackathonFilters } from "@/lib/hooks/use-hackathon-filters";
import { HackathonStatus, SkillLevel } from "@/types/hackathon";

const CATEGORIES = [
  "AI/ML",
  "Web3",
  "Mobile",
  "Web",
  "Cloud",
  "DevOps",
  "Security",
  "Data",
  "UI/UX",
];

const STATUSES: (HackathonStatus | 'all')[] = ['all', 'UPCOMING', 'ACTIVE', 'COMPLETED'];
const SKILL_LEVELS: (SkillLevel | 'all')[] = ['all', 'BEGINNER', 'INTERMEDIATE', 'ADVANCED'];

export function HackathonFilters() {
  const {
    status,
    skillLevel,
    categories,
    setStatus,
    setSkillLevel,
    toggleCategory,
    resetFilters,
  } = useHackathonFilters();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Filters</CardTitle>
        <Button variant="ghost" size="sm" onClick={resetFilters}>
          Reset
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium">Status</h3>
          <div className="space-x-2">
            {STATUSES.map((s) => (
              <Badge
                key={s}
                variant={status === s ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setStatus(s)}
              >
                {s === 'all' ? 'All' : s}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Skill Level</h3>
          <div className="space-x-2">
            {SKILL_LEVELS.map((level) => (
              <Badge
                key={level}
                variant={skillLevel === level ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSkillLevel(level)}
              >
                {level === 'all' ? 'All' : level}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Categories</h3>
          <div className="grid grid-cols-2 gap-2">
            {CATEGORIES.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={category}
                  checked={categories.includes(category)}
                  onCheckedChange={() => toggleCategory(category)}
                />
                <Label htmlFor={category} className="text-sm">
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}