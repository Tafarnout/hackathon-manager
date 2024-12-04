"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-store";
import { Plus } from "lucide-react";
import Link from "next/link";

export function DashboardHeader() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, {user?.name}!</h1>
        <p className="text-muted-foreground">
          Track your hackathon progress and manage your projects
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/hackathons/create">
          <Button variant="outline" className="gap-2">
            <Plus className="h-4 w-4" />
            Create Hackathon
          </Button>
        </Link>
        <Link href="/hackathons">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Join Hackathon
          </Button>
        </Link>
      </div>
    </div>
  );
}