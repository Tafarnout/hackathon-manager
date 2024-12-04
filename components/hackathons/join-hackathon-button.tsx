"use client";

import { Button } from "@/components/ui/button";
import { useHackathonStore } from "@/lib/hooks/use-hackathon-store";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-store";

interface JoinHackathonButtonProps {
  hackathonId: string;
  status: "upcoming" | "active" | "completed";
}

export function JoinHackathonButton({ hackathonId, status }: JoinHackathonButtonProps) {
  const { isAuthenticated } = useAuth();
  const { joinHackathon, leaveHackathon, isParticipating } = useHackathonStore();
  const { toast } = useToast();
  const router = useRouter();

  const participating = isParticipating(hackathonId);

  const handleJoin = () => {
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }

    if (status === "completed") {
      toast({
        title: "Cannot Join",
        description: "This hackathon has already ended.",
        variant: "destructive",
      });
      return;
    }

    joinHackathon(hackathonId);
    toast({
      title: "Successfully joined!",
      description: "You are now registered for this hackathon.",
    });
  };

  const handleLeave = () => {
    leaveHackathon(hackathonId);
    toast({
      title: "Left hackathon",
      description: "You have been removed from this hackathon.",
    });
  };

  if (participating) {
    return (
      <div className="space-y-2">
        <Button
          variant="outline"
          className="w-full"
          onClick={handleLeave}
        >
          Leave Hackathon
        </Button>
        {status === "active" && (
          <Button className="w-full" onClick={() => router.push(`/hackathons/${hackathonId}/submit`)}>
            Submit Project
          </Button>
        )}
      </div>
    );
  }

  return (
    <Button
      className="w-full"
      onClick={handleJoin}
      disabled={status === "completed"}
    >
      {status === "upcoming" ? "Register Now" : status === "active" ? "Join Hackathon" : "Ended"}
    </Button>
  );
}