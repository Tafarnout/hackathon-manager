import { Participant } from "@/types/leaderboard";

export const mockParticipants: Participant[] = [
  {
    id: "1",
    name: "Alex Thompson",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    points: 2500,
    rank: 1,
    achievements: 15,
    hackathonsWon: 3,
    projectsSubmitted: 8,
    badges: [
      {
        id: "1",
        name: "Innovation Master",
        description: "Won first place in 3 hackathons",
        icon: "trophy",
        rarity: "legendary",
      },
      {
        id: "2",
        name: "Team Player",
        description: "Collaborated in 5+ projects",
        icon: "users",
        rarity: "rare",
      },
    ],
  },
  {
    id: "2",
    name: "Sarah Chen",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    points: 2200,
    rank: 2,
    achievements: 12,
    hackathonsWon: 2,
    projectsSubmitted: 6,
    badges: [
      {
        id: "3",
        name: "Code Wizard",
        description: "Completed 10 technical challenges",
        icon: "code",
        rarity: "epic",
      },
    ],
  },
  {
    id: "3",
    name: "Michael Rodriguez",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    points: 1800,
    rank: 3,
    achievements: 10,
    hackathonsWon: 1,
    projectsSubmitted: 5,
    badges: [
      {
        id: "4",
        name: "Rising Star",
        description: "Won first hackathon",
        icon: "star",
        rarity: "rare",
      },
    ],
  },
];