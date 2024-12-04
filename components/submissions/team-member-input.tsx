"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useState } from "react";

interface TeamMemberInputProps {
  onChange: (members: string[]) => void;
  defaultValue?: string[];
}

export function TeamMemberInput({
  onChange,
  defaultValue = [],
}: TeamMemberInputProps) {
  const [members, setMembers] = useState<string[]>(defaultValue);
  const [currentInput, setCurrentInput] = useState("");

  const addMember = () => {
    if (currentInput.trim() && !members.includes(currentInput.trim())) {
      const newMembers = [...members, currentInput.trim()];
      setMembers(newMembers);
      onChange(newMembers);
      setCurrentInput("");
    }
  };

  const removeMember = (index: number) => {
    const newMembers = members.filter((_, i) => i !== index);
    setMembers(newMembers);
    onChange(newMembers);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          placeholder="Enter team member name"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addMember();
            }
          }}
        />
        <Button type="button" onClick={addMember}>
          Add
        </Button>
      </div>

      {members.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex items-center gap-1 bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm"
            >
              <span>{member}</span>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-4 w-4"
                onClick={() => removeMember(index)}
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