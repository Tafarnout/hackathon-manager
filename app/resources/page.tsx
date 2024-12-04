"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GuideCard } from "@/components/resources/guide-card";
import { TutorialCard } from "@/components/resources/tutorial-card";
import { TemplateCard } from "@/components/resources/template-card";
import { guides, tutorials, templates } from "@/lib/data/resources";

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Resource Center</h1>
          <p className="text-muted-foreground">
            Everything you need to succeed in your hackathon journey
          </p>
        </div>

        <Tabs defaultValue="guides" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="guides">Getting Started</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>

          <TabsContent value="guides">
            <div className="grid gap-6">
              <GuideCard guides={guides} />
            </div>
          </TabsContent>

          <TabsContent value="tutorials">
            <div className="grid gap-6">
              <TutorialCard tutorials={tutorials} />
            </div>
          </TabsContent>

          <TabsContent value="templates">
            <div className="grid gap-6">
              <TemplateCard templates={templates} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}