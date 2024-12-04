import { Hackathon as PrismaHackathon, User, Participant, Submission } from "@prisma/client";

export type HackathonStatus = 'UPCOMING' | 'ACTIVE' | 'COMPLETED';
export type SkillLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';

export interface HackathonWithRelations extends PrismaHackathon {
  createdBy: User;
  participants?: Participant[];
  submissions?: Submission[];
  _count?: {
    participants: number;
    submissions: number;
  };
}

export interface CreateHackathonInput {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: HackathonStatus;
  skillLevel: SkillLevel;
  categories: string[];
  userId: string;
}