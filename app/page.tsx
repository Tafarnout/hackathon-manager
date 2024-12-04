"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Award, Code2, Trophy, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
            Hackathon Management Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Organize, participate, and judge hackathons with ease. A comprehensive platform for innovation and collaboration.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/hackathons">
              <Button size="lg" variant="outline" className="gap-2">
                Browse Hackathons
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <Card>
            <CardHeader>
              <Code2 className="h-8 w-8 mb-4 text-primary" />
              <CardTitle>Create & Organize</CardTitle>
              <CardDescription>
                Launch your own hackathon with customizable judging criteria and rewards
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 mb-4 text-primary" />
              <CardTitle>Team Building</CardTitle>
              <CardDescription>
                Form teams, collaborate, and submit projects together
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Trophy className="h-8 w-8 mb-4 text-primary" />
              <CardTitle>Fair Judging</CardTitle>
              <CardDescription>
                Transparent evaluation system with multiple judging criteria
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Award className="h-8 w-8 mb-4 text-primary" />
              <CardTitle>Achievements</CardTitle>
              <CardDescription>
                Earn points, unlock achievements, and claim rewards
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </main>
  );
}