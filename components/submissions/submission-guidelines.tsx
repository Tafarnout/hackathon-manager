import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, AlertCircle } from "lucide-react";

export function SubmissionGuidelines() {
  const requirements = [
    "Complete project description",
    "Working repository link",
    "Demo/preview if applicable",
    "List of team members",
    "Tech stack details",
  ];

  const tips = [
    "Test your demo thoroughly",
    "Include setup instructions",
    "Document key features",
    "Add screenshots/videos",
    "Credit external resources",
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            Requirements
          </CardTitle>
          <CardDescription>
            Ensure your submission includes all required elements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {requirements.map((req, index) => (
              <li key={index} className="text-sm flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                {req}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-blue-500" />
            Submission Tips
          </CardTitle>
          <CardDescription>
            Follow these tips for a stronger submission
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {tips.map((tip, index) => (
              <li key={index} className="text-sm flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                {tip}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}