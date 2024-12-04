"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface Tutorial {
  title: string;
  description: string;
  duration: string;
  icon: LucideIcon;
}

interface TutorialCardProps {
  tutorials: Tutorial[];
}

export function TutorialCard({ tutorials }: TutorialCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Video Tutorials</CardTitle>
        <CardDescription>Step-by-step learning resources</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {tutorials.map((tutorial, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 rounded-lg border p-4"
          >
            <tutorial.icon className="h-5 w-5 text-primary" />
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">{tutorial.title}</h4>
                <span className="text-xs text-muted-foreground">
                  {tutorial.duration}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {tutorial.description}
              </p>
            </div>
            <Button variant="ghost" size="sm">Watch</Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}