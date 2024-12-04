"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Github, Globe, Users } from "lucide-react";
import Image from "next/image";

interface PreviewProps {
  data: {
    title: string;
    description: string;
    repoUrl: string;
    demoUrl?: string;
    techStack: string[];
    teamMembers: string[];
    files: File[];
  };
}

export function SubmissionPreview({ data }: PreviewProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">{data.title}</h3>
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">
              {data.description}
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Github className="h-4 w-4" />
              <a
                href={data.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Repository
              </a>
            </div>
            {data.demoUrl && (
              <div className="flex items-center gap-2 text-sm">
                <Globe className="h-4 w-4" />
                <a
                  href={data.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Live Demo
                </a>
              </div>
            )}
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {data.techStack.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {data.teamMembers.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-2">Team Members</h4>
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>{data.teamMembers.join(", ")}</span>
              </div>
            </div>
          )}

          {data.files.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-2">Attached Files</h4>
              <div className="space-y-2">
                {data.files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm p-2 rounded-md border"
                  >
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span>{file.name}</span>
                    <span className="text-muted-foreground ml-auto">
                      ({(file.size / 1024).toFixed(1)} KB)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}