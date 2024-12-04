"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectScore } from "@/types/voting";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ResultsDisplayProps {
  scores: ProjectScore[];
}

export function ResultsDisplay({ scores }: ResultsDisplayProps) {
  const sortedScores = [...scores].sort((a, b) => b.averageScore - a.averageScore);
  const topThree = sortedScores.slice(0, 3);

  const chartData = topThree.map((score) => ({
    name: `Project ${score.projectId}`,
    Innovation: score.scores.innovation,
    "Technical Complexity": score.scores.technicalComplexity,
    Impact: score.scores.impact,
    Presentation: score.scores.presentation,
    Overall: score.scores.overall,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Final Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Innovation" fill="hsl(var(--chart-1))" />
              <Bar dataKey="Technical Complexity" fill="hsl(var(--chart-2))" />
              <Bar dataKey="Impact" fill="hsl(var(--chart-3))" />
              <Bar dataKey="Presentation" fill="hsl(var(--chart-4))" />
              <Bar dataKey="Overall" fill="hsl(var(--chart-5))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}