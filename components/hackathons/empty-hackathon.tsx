"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code2, Lightbulb, Rocket } from "lucide-react";
import Link from "next/link";

export function EmptyHackathon() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">No Active Hackathon</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground mb-6">
            You're not participating in any active hackathon at the moment.
            Browse our upcoming hackathons or check out these resources to prepare for your next one!
          </p>
          <Link href="/hackathons">
            <Button>Browse Hackathons</Button>
          </Link>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Project Ideas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Explore trending GitHub repositories</li>
              <li>Check out Devpost for inspiration</li>
              <li>Think about solving real-world problems</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code2 className="h-5 w-5" />
              Technical Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <a
                  href="https://github.com/readme/guides/github-copilot-tips"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub Copilot Tips
                </a>
              </li>
              <li>
                <a
                  href="https://roadmap.sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Developer Roadmaps
                </a>
              </li>
              <li>
                <a
                  href="https://12factor.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  The Twelve-Factor App
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Learning Materials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <a
                  href="https://www.freecodecamp.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  freeCodeCamp
                </a>
              </li>
              <li>
                <a
                  href="https://www.theodinproject.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  The Odin Project
                </a>
              </li>
              <li>
                <a
                  href="https://fullstackopen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Full Stack Open
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Rocket className="h-5 w-5" />
              Tips for Success
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Start with a clear project scope</li>
              <li>Focus on core features first</li>
              <li>Don't forget to create a great README</li>
              <li>Practice your presentation skills</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
