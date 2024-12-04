"use client";

import { CreateHackathonForm } from "@/components/hackathons/create-hackathon-form";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/lib/auth-store";
import { redirect } from "next/navigation";

export default function CreateHackathonPage() {
  const { user } = useAuth();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Create a Hackathon</h1>
          <p className="text-muted-foreground">
            Set up a new hackathon event and define its parameters
          </p>
        </div>

        <CreateHackathonForm />
      </div>
    </div>
  );
}