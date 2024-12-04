import { Hackathon } from "@/types/hackathon";

export const mockHackathons: Hackathon[] = [
  {
    id: "1",
    title: "AI Innovation Challenge",
    description: "Build innovative AI solutions for real-world problems",
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-05-15"),
    status: "upcoming",
    participantCount: 250,
    prizePool: "$10,000",
    categories: ["AI", "Machine Learning", "Data Science"],
    skillLevel: "intermediate",
    thumbnailUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
    id: "2",
    title: "Web3 DeFi Hackathon",
    description: "Create decentralized finance applications",
    startDate: new Date("2024-04-15"),
    endDate: new Date("2024-04-30"),
    status: "active",
    participantCount: 180,
    prizePool: "$15,000",
    categories: ["Blockchain", "DeFi", "Smart Contracts"],
    skillLevel: "advanced",
    thumbnailUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
  },
  {
    id: "3",
    title: "Green Tech Solutions",
    description: "Develop sustainable technology solutions",
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-06-15"),
    status: "upcoming",
    participantCount: 150,
    prizePool: "$8,000",
    categories: ["Sustainability", "IoT", "Clean Energy"],
    skillLevel: "all",
    thumbnailUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
  },
];