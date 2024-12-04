import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Github, Video } from "lucide-react";

export function HackathonResources() {
  const resources = [
    {
      title: "Getting Started Guide",
      description: "Essential information to begin your hackathon journey",
      icon: BookOpen,
      href: "#",
    },
    {
      title: "Project Templates",
      description: "Starter templates and boilerplate code",
      icon: Github,
      href: "#",
    },
    {
      title: "Documentation",
      description: "Detailed API documentation and technical guides",
      icon: FileText,
      href: "#",
    },
    {
      title: "Tutorial Videos",
      description: "Step-by-step video tutorials and workshops",
      icon: Video,
      href: "#",
    },
  ];

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="grid gap-4">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 rounded-lg border p-4"
            >
              <resource.icon className="h-5 w-5 text-muted-foreground" />
              <div className="flex-1 space-y-1">
                <h4 className="text-sm font-medium">{resource.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {resource.description}
                </p>
              </div>
              <Button variant="ghost" size="sm">
                View
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}