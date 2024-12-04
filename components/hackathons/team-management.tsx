"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { TeamMemberInput } from "../submissions/team-member-input";
import { useToast } from "@/components/ui/use-toast";

interface Team {
  id: string;
  name: string;
  members: string[];
  maxSize: number;
}

interface TeamManagementProps {
  teams: Team[];
  onCreateTeam?: (team: Omit<Team, "id">) => void;
  onJoinTeam?: (teamId: string) => void;
}

export function TeamManagement({
  teams,
  onCreateTeam,
  onJoinTeam,
}: TeamManagementProps) {
  const [newTeamName, setNewTeamName] = useState("");
  const [teamMembers, setTeamMembers] = useState<string[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleCreateTeam = () => {
    if (newTeamName.trim()) {
      onCreateTeam?.({
        name: newTeamName.trim(),
        members: teamMembers,
        maxSize: 4,
      });
      setNewTeamName("");
      setTeamMembers([]);
      setIsDialogOpen(false);
      toast({
        title: "Team Created",
        description: `Team "${newTeamName}" has been created successfully.`,
      });
    }
  };

  const handleJoinTeam = (teamId: string, teamName: string) => {
    onJoinTeam?.(teamId);
    toast({
      title: "Team Joined",
      description: `You have successfully joined ${teamName}.`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Teams</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="w-full">Create Team</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create a New Team</DialogTitle>
                <DialogDescription>
                  Form a team to participate in this hackathon together.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="team-name">Team Name</Label>
                  <Input
                    id="team-name"
                    value={newTeamName}
                    onChange={(e) => setNewTeamName(e.target.value)}
                    placeholder="Enter team name"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Invite Members</Label>
                  <TeamMemberInput
                    onChange={setTeamMembers}
                    defaultValue={teamMembers}
                  />
                </div>
              </div>
              <Button onClick={handleCreateTeam} className="w-full">
                Create Team
              </Button>
            </DialogContent>
          </Dialog>

          <div className="space-y-2">
            {teams.map((team) => (
              <Card key={team.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{team.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {team.members.length}/{team.maxSize} members
                      </p>
                      <div className="mt-2">
                        <p className="text-sm">Members:</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {team.members.map((member, index) => (
                            <span
                              key={index}
                              className="text-xs px-2 py-1 bg-secondary rounded-full"
                            >
                              {member}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {team.members.length < team.maxSize && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleJoinTeam(team.id, team.name)}
                      >
                        Join Team
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}