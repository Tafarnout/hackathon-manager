"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface Guide {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface GuideCardProps {
  guides: Guide[];
}

export function GuideCard({ guides }: GuideCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hackathon Basics</CardTitle>
        <CardDescription>Essential guides for participants</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {guides.map((guide, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 rounded-lg border p-4"
          >
            <guide.icon className="h-5 w-5 text-primary" />
            <div className="flex-1 space-y-1">
              <h4 className="text-sm font-medium">{guide.title}</h4>
              <p className="text-sm text-muted-foreground">
                {guide.description}
              </p>
            </div>
            <Button variant="ghost" size="sm">Read More</Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}