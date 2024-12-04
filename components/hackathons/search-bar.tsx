"use client";

import { Input } from "@/components/ui/input";
import { useHackathonFilters } from "@/lib/hooks/use-hackathon-filters";

export function SearchBar() {
  const { search, setSearch } = useHackathonFilters();

  return (
    <Input
      type="search"
      placeholder="Search hackathons..."
      className="w-[200px]"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}