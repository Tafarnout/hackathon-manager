"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, LucideIcon } from "lucide-react";
import Link from "next/link";

interface Template {
  title: string;
  description: string;
  stars: string;
  icon: LucideIcon;
}

interface TemplateCardProps {
  templates: Template[];
}

export function TemplateCard({ templates }: TemplateCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Starter Templates</CardTitle>
        <CardDescription>Jump-start your project development</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {templates.map((template, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 rounded-lg border p-4"
          >
            <template.icon className="h-5 w-5 text-primary" />
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">{template.title}</h4>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Github className="h-3 w-3 mr-1" />
                  {template.stars}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {template.description}
              </p>
            </div>
            <Link href="https://github.com" target="_blank">
              <Button variant="ghost" size="sm">Use Template</Button>
            </Link>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}