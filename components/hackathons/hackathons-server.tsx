import { HackathonWithRelations } from "@/types/hackathon";
import { FilteredHackathons } from "./filtered-hackathons";

async function getHackathons(): Promise<HackathonWithRelations[]> {
  try {
    const res = await fetch('http://localhost:3002/api/hackathons', {
      cache: 'no-store',
    })
    
    if (!res.ok) {
      console.error('Failed to fetch hackathons:', await res.text())
      return []
    }
    
    return res.json()
  } catch (error) {
    console.error('Error fetching hackathons:', error)
    return []
  }
}

export async function HackathonsServerList() {
  const hackathons = await getHackathons();

  return <FilteredHackathons initialHackathons={hackathons} />;
}
