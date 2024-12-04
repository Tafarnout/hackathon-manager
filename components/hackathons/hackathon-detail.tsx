"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Trophy, Users } from "lucide-react";
import { format } from "date-fns";
import { HackathonWithRelations } from "@/types/hackathon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface HackathonDetailProps {
  hackathon: HackathonWithRelations;
}

export function HackathonDetail({ hackathon }: HackathonDetailProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Check if the current user (test user) is a participant
  const isParticipant = hackathon.participants?.some(
    (participant) => participant.user.email === 'test@example.com'
  );

  const handleParticipation = async () => {
    try {
      setIsLoading(true);
      const endpoint = isParticipant ? 'leave' : 'join';
      const response = await fetch(`/api/hackathons/${hackathon.id}/${endpoint}`, {
        method: 'POST',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `Failed to ${endpoint} hackathon`);
      }

      toast({
        title: "Success!",
        description: `You have successfully ${isParticipant ? 'left' : 'joined'} the hackathon.`,
      });

      // Refresh the page to show updated participants list
      window.location.reload();
    } catch (error) {
      console.error(`Error ${isParticipant ? 'leaving' : 'joining'} hackathon:`, error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : `Failed to ${isParticipant ? 'leave' : 'join'} hackathon`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const statusColor = {
    UPCOMING: "bg-blue-500/10 text-blue-500",
    ACTIVE: "bg-green-500/10 text-green-500",
    COMPLETED: "bg-gray-500/10 text-gray-500",
  }[hackathon.status];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="secondary" className={statusColor}>
                  {hackathon.status}
                </Badge>
                <Badge variant="outline">{hackathon.skillLevel}</Badge>
              </div>
              <div className="space-y-2">
                <CardTitle className="text-3xl">{hackathon.title}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={hackathon.createdBy.image || ''} alt={hackathon.createdBy.name} />
                    <AvatarFallback>{hackathon.createdBy.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <span>Organized by {hackathon.createdBy.name}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <div className="text-sm">
                    <div className="font-medium">Date</div>
                    <div className="text-muted-foreground">
                      {format(new Date(hackathon.startDate), "MMM d")} -{" "}
                      {format(new Date(hackathon.endDate), "MMM d, yyyy")}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <div className="text-sm">
                    <div className="font-medium">Participants</div>
                    <div className="text-muted-foreground">
                      {hackathon._count?.participants || 0} registered
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  <div className="text-sm">
                    <div className="font-medium">Submissions</div>
                    <div className="text-muted-foreground">
                      {hackathon._count?.submissions || 0} projects
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground">{hackathon.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {hackathon.categories.map((category) => (
                    <Badge key={category} variant="secondary">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Participants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                {hackathon.participants?.map((participant) => (
                  <div key={participant.id} className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src={participant.user.image || ''} alt={participant.user.name} />
                      <AvatarFallback>{participant.user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <div className="font-medium">{participant.user.name}</div>
                      <div className="text-muted-foreground">
                        Joined {format(new Date(participant.joinedAt), "MMM d, yyyy")}
                      </div>
                    </div>
                  </div>
                ))}
                {!hackathon.participants?.length && (
                  <p className="text-muted-foreground">No participants yet. Be the first to join!</p>
                )}
              </div>
            </CardContent>
          </Card>

          {hackathon.submissions?.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {hackathon.submissions.map((submission) => (
                    <div key={submission.id} className="flex items-start gap-4 p-4 border rounded-lg">
                      <Avatar>
                        <AvatarImage src={submission.user.image || ''} alt={submission.user.name} />
                        <AvatarFallback>{submission.user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{submission.title}</h4>
                          <span className="text-sm text-muted-foreground">
                            {format(new Date(submission.createdAt), "MMM d, yyyy")}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{submission.description}</p>
                        <div className="flex gap-4 mt-2">
                          {submission.githubUrl && (
                            <a
                              href={submission.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-500 hover:underline"
                            >
                              View Code
                            </a>
                          )}
                          {submission.demoUrl && (
                            <a
                              href={submission.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-500 hover:underline"
                            >
                              View Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <Card>
            <CardContent className="pt-6">
              <Button 
                className="w-full" 
                size="lg" 
                onClick={handleParticipation}
                disabled={isLoading || hackathon.status === 'COMPLETED'}
                variant={isParticipant ? "destructive" : "default"}
              >
                {isLoading 
                  ? `${isParticipant ? 'Leaving...' : 'Joining...'}`
                  : `${isParticipant ? 'Leave' : 'Join'} Hackathon`
                }
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <div className="flex-1">
                    <div className="font-medium">Registration Opens</div>
                    <div className="text-sm text-muted-foreground">
                      {format(new Date(hackathon.startDate), "MMM d, yyyy")}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <div className="flex-1">
                    <div className="font-medium">Hacking Begins</div>
                    <div className="text-sm text-muted-foreground">
                      {format(new Date(hackathon.startDate), "MMM d, yyyy")}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  <div className="flex-1">
                    <div className="font-medium">Submission Deadline</div>
                    <div className="text-sm text-muted-foreground">
                      {format(new Date(hackathon.endDate), "MMM d, yyyy")}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}