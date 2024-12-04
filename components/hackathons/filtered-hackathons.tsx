'use client'

import { HackathonWithRelations } from "@/types/hackathon"
import { useHackathonFilters } from "@/lib/hooks/use-hackathon-filters"
import { HackathonCard } from "./hackathon-card"
import { useEffect } from "react"

interface FilteredHackathonsProps {
  initialHackathons: HackathonWithRelations[]
}

export function FilteredHackathons({ initialHackathons }: FilteredHackathonsProps) {
  const { search, status, skillLevel, categories, setFilteredHackathons, filteredHackathons } = useHackathonFilters()

  useEffect(() => {
    const filtered = initialHackathons.filter((hackathon) => {
      const matchesSearch =
        !search ||
        hackathon.title.toLowerCase().includes(search.toLowerCase()) ||
        hackathon.description.toLowerCase().includes(search.toLowerCase())

      const matchesStatus = !status || hackathon.status === status
      const matchesSkillLevel = !skillLevel || hackathon.skillLevel === skillLevel
      const matchesCategories =
        !categories.length ||
        categories.some((category) => hackathon.categories.includes(category))

      return matchesSearch && matchesStatus && matchesSkillLevel && matchesCategories
    })

    setFilteredHackathons(filtered)
  }, [search, status, skillLevel, categories, initialHackathons, setFilteredHackathons])

  if (filteredHackathons.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No hackathons found. Try adjusting your filters!</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {filteredHackathons.map((hackathon) => (
        <HackathonCard key={hackathon.id} hackathon={hackathon} />
      ))}
    </div>
  )
}
