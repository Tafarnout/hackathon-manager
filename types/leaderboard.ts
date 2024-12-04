export interface Participant {
  id: string;
  name: string;
  avatarUrl: string;
  points: number;
  rank: number;
  achievements: number;
  hackathonsWon: number;
  projectsSubmitted: number;
  badges: Badge[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}