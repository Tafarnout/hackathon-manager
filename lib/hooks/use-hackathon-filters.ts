"use client";

import { create } from "zustand";
import { HackathonStatus, HackathonSkillLevel, HackathonWithRelations } from "@/types/hackathon";

interface HackathonFiltersState {
  search: string;
  status: HackathonStatus | "";
  skillLevel: HackathonSkillLevel | "";
  categories: string[];
  filteredHackathons: HackathonWithRelations[];
  setSearch: (search: string) => void;
  setStatus: (status: HackathonStatus | "") => void;
  setSkillLevel: (skillLevel: HackathonSkillLevel | "") => void;
  setCategories: (categories: string[]) => void;
  setFilteredHackathons: (hackathons: HackathonWithRelations[]) => void;
  reset: () => void;
}

export const useHackathonFilters = create<HackathonFiltersState>((set) => ({
  search: "",
  status: "",
  skillLevel: "",
  categories: [],
  filteredHackathons: [],
  setSearch: (search) => set({ search }),
  setStatus: (status) => set({ status }),
  setSkillLevel: (skillLevel) => set({ skillLevel }),
  setCategories: (categories) => set({ categories }),
  setFilteredHackathons: (filteredHackathons) => set({ filteredHackathons }),
  reset: () =>
    set({
      search: "",
      status: "",
      skillLevel: "",
      categories: [],
      filteredHackathons: [],
    }),
}));

export const filterHackathons = (
  hackathons: HackathonWithRelations[],
  filters: Omit<
    HackathonFiltersState,
    "setSearch" | "setStatus" | "setSkillLevel" | "setCategories" | "setFilteredHackathons" | "reset"
  >
) => {
  return hackathons.filter((hackathon) => {
    // Search filter
    if (
      filters.search &&
      !hackathon.title.toLowerCase().includes(filters.search.toLowerCase()) &&
      !hackathon.description.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }

    // Status filter
    if (filters.status !== "" && hackathon.status !== filters.status) {
      return false;
    }

    // Skill level filter
    if (filters.skillLevel !== "" && hackathon.skillLevel !== filters.skillLevel) {
      return false;
    }

    // Categories filter
    if (
      filters.categories.length > 0 &&
      !hackathon.categories.some((category) =>
        filters.categories.includes(category)
      )
    ) {
      return false;
    }

    return true;
  });
};