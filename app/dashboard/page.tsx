"use client";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { ActiveHackathons } from "@/components/dashboard/active-hackathons";
import { ProjectList } from "@/components/dashboard/project-list";
import { Achievements } from "@/components/dashboard/achievements";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockProjects } from "@/lib/mock-data/dashboard";

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <DashboardHeader />
        <DashboardStats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Tabs defaultValue="projects" className="space-y-6">
              <TabsList>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="hackathons">Active Hackathons</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>

              <TabsContent value="projects">
                <ProjectList projects={mockProjects} />
              </TabsContent>

              <TabsContent value="hackathons">
                <ActiveHackathons />
              </TabsContent>

              <TabsContent value="achievements">
                <Achievements />
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
}