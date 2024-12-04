"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectSubmission } from "@/types/submission";
import { format } from "date-fns";
import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";

interface ProjectListProps {
  projects: ProjectSubmission[];
}

export function ProjectList({ projects }: ProjectListProps) {
  const statusColors = {
    draft: "bg-yellow-500/10 text-yellow-500",
    submitted: "bg-blue-500/10 text-blue-500",
    under_review: "bg-purple-500/10 text-purple-500",
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Your Projects</span>
          <Code2 className="h-5 w-5 text-muted-foreground" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex items-center justify-between p-4 rounded-lg border"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{project.title}</h3>
                  <Badge
                    variant="secondary"
                    className={statusColors[project.status]}
                  >
                    {project.status.replace("_", " ")}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Submitted {format(project.submittedAt, "MMM d, yyyy")}
                </p>
              </div>
              <Link href={`/hackathons/${project.hackathonId}`}>
                <Button variant="ghost" size="sm" className="gap-2">
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}