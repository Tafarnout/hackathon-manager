import { notFound } from "next/navigation";
import { HackathonDetail } from "@/components/hackathons/hackathon-detail";
import { HackathonWithRelations } from "@/types/hackathon";

async function getHackathon(id: string): Promise<HackathonWithRelations | null> {
  try {
    const res = await fetch(`http://localhost:3002/api/hackathons/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error('Failed to fetch hackathon');
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching hackathon:', error);
    throw error;
  }
}

export default async function HackathonDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const hackathon = await getHackathon(params.id);

  if (!hackathon) {
    notFound();
  }

  return <HackathonDetail hackathon={hackathon} />;
}