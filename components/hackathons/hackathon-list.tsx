import { HackathonWithRelations } from "@/types/hackathon";
import { HackathonCard } from "./hackathon-card";

interface HackathonListProps {
  hackathons: HackathonWithRelations[];
}

export function HackathonList({ hackathons }: HackathonListProps) {
  if (hackathons.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No hackathons found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {hackathons.map((hackathon) => (
        <HackathonCard key={hackathon.id} hackathon={hackathon} />
      ))}
    </div>
  );
}