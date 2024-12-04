"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Participant {
  id: string;
  name: string;
  role: "participant" | "mentor" | "judge";
  team?: string;
}

interface HackathonState {
  participatingHackathons: string[];
  teams: Record<string, string>; // hackathonId -> teamId
  joinHackathon: (hackathonId: string) => void;
  leaveHackathon: (hackathonId: string) => void;
  joinTeam: (hackathonId: string, teamId: string) => void;
  leaveTeam: (hackathonId: string) => void;
  isParticipating: (hackathonId: string) => boolean;
}

export const useHackathonStore = create<HackathonState>()(
  persist(
    (set, get) => ({
      participatingHackathons: [],
      teams: {},
      joinHackathon: (hackathonId) =>
        set((state) => ({
          participatingHackathons: [...state.participatingHackathons, hackathonId],
        })),
      leaveHackathon: (hackathonId) =>
        set((state) => ({
          participatingHackathons: state.participatingHackathons.filter(
            (id) => id !== hackathonId
          ),
          teams: {
            ...state.teams,
            [hackathonId]: undefined,
          },
        })),
      joinTeam: (hackathonId, teamId) =>
        set((state) => ({
          teams: {
            ...state.teams,
            [hackathonId]: teamId,
          },
        })),
      leaveTeam: (hackathonId) =>
        set((state) => ({
          teams: {
            ...state.teams,
            [hackathonId]: undefined,
          },
        })),
      isParticipating: (hackathonId) =>
        get().participatingHackathons.includes(hackathonId),
    }),
    {
      name: "hackathon-storage",
    }
  )
);