"use client";

import { ProjectSubmissionForm } from "@/components/submissions/project-submission-form";
import { SubmissionGuidelines } from "@/components/submissions/submission-guidelines";
import { mockHackathons } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";

export function generateStaticParams() {
  return mockHackathons.map((hackathon) => ({
    id: hackathon.id,
  }));
}

export default function SubmitProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const hackathon = mockHackathons.find((h) => h.id === params.id);

  if (!hackathon) {
    notFound();
  }

  if (hackathon.status !== "active") {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-2">Submissions Not Open</h2>
          <p className="text-muted-foreground">
            Project submissions are only available during active hackathons.
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Submit Your Project</h1>
          <p className="text-muted-foreground">
            Submit your project for {hackathon.title}
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ProjectSubmissionForm hackathonId={hackathon.id} />
          </div>
          <div>
            <SubmissionGuidelines />
          </div>
        </div>
      </div>
    </div>
  );
}