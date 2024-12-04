import { Card, CardContent } from "@/components/ui/card";
import { Hackathon } from "@/types/hackathon";
import { format } from "date-fns";

interface HackathonTimelineProps {
  hackathon: Hackathon;
}

export function HackathonTimeline({ hackathon }: HackathonTimelineProps) {
  const timelineEvents = [
    {
      date: hackathon.startDate,
      title: "Registration Opens",
      description: "Start of participant registration and team formation",
    },
    {
      date: new Date(hackathon.startDate.getTime() + 86400000 * 2),
      title: "Kickoff Event",
      description: "Opening ceremony and project guidelines announcement",
    },
    {
      date: new Date(hackathon.endDate.getTime() - 86400000 * 2),
      title: "Submission Deadline",
      description: "Final deadline for project submissions",
    },
    {
      date: hackathon.endDate,
      title: "Winners Announcement",
      description: "Closing ceremony and awards presentation",
    },
  ];

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="relative space-y-8">
          {timelineEvents.map((event, index) => (
            <div key={index} className="flex gap-4">
              <div className="relative flex flex-col items-center">
                <div className="h-3 w-3 rounded-full bg-primary" />
                {index < timelineEvents.length - 1 && (
                  <div className="h-full w-px bg-border" />
                )}
              </div>
              <div className="flex-1 pb-8">
                <p className="text-sm text-muted-foreground">
                  {format(event.date, "MMM d, yyyy")}
                </p>
                <h4 className="text-base font-medium">{event.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}