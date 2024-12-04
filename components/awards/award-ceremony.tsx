"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "@/types/voting";
import { Trophy, Award as AwardIcon, Medal } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";

interface AwardCeremonyProps {
  awards: Award[];
  winners: Array<{
    award: Award;
    projectId: string;
    teamName: string;
  }>;
}

export function AwardCeremony({ awards, winners }: AwardCeremonyProps) {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [showAll, setShowAll] = useState(false);

  const revealNext = () => {
    if (currentIndex < winners.length - 1) {
      setCurrentIndex(currentIndex + 1);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } else {
      setShowAll(true);
    }
  };

  const getAwardIcon = (type: Award["type"]) => {
    switch (type) {
      case "gold":
        return <Trophy className="h-8 w-8 text-yellow-500" />;
      case "silver":
        return <AwardIcon className="h-8 w-8 text-gray-400" />;
      case "bronze":
        return <Medal className="h-8 w-8 text-amber-600" />;
      default:
        return <AwardIcon className="h-8 w-8 text-primary" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Award Ceremony</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {winners.map((winner, index) => (
            <motion.div
              key={winner.award.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: showAll || index <= currentIndex ? 1 : 0,
                y: showAll || index <= currentIndex ? 0 : 20,
              }}
              transition={{ duration: 0.5 }}
            >
              {(showAll || index <= currentIndex) && (
                <Card>
                  <CardContent className="flex items-center gap-4 p-6">
                    {getAwardIcon(winner.award.type)}
                    <div className="flex-1">
                      <h3 className="font-semibold">{winner.award.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {winner.teamName}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {winner.award.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-primary">
                        +{winner.award.points} pts
                      </span>
                    </div>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          ))}

          {!showAll && (
            <Button onClick={revealNext} className="w-full">
              Reveal Next Award
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}