"use client";

import { HackathonFilters } from "@/components/hackathons/hackathon-filters";
import { SearchBar } from "@/components/hackathons/search-bar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HackathonsServerList } from "@/components/hackathons/hackathons-server";

export default function HackathonsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Browse Hackathons</h1>
        <div className="flex items-center gap-4">
          <SearchBar />
          <Link href="/hackathons/create">
            <Button>Create Hackathon</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <aside>
          <HackathonFilters />
        </aside>
        <div className="lg:col-span-3">
          <HackathonsServerList />
        </div>
      </div>
    </div>
  );
}