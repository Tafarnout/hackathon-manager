"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useState } from "react";

interface TechStackInputProps {
  onChange: (technologies: string[]) => void;
  defaultValue?: string[];
}

export function TechStackInput({
  onChange,
  defaultValue = [],
}: TechStackInputProps) {
  const [technologies, setTechnologies] = useState<string[]>(defaultValue);
  const [currentInput, setCurrentInput] = useState("");

  const addTechnology = () => {
    if (currentInput.trim() && !technologies.includes(currentInput.trim())) {
      const newTechnologies = [...technologies, currentInput.trim()];
      setTechnologies(newTechnologies);
      onChange(newTechnologies);
      setCurrentInput("");
    }
  };

  const removeTechnology = (index: number) => {
    const newTechnologies = technologies.filter((_, i) => i !== index);
    setTechnologies(newTechnologies);
    onChange(newTechnologies);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          placeholder="Enter technology name"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addTechnology();
            }
          }}
        />
        <Button type="button" onClick={addTechnology}>
          Add
        </Button>
      </div>

      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-md text-sm"
            >
              <span>{tech}</span>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-4 w-4"
                onClick={() => removeTechnology(index)}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}