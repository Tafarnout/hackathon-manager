import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, Medal } from "lucide-react";

interface HackathonPrizesProps {
  prizePool: string;
}

export function HackathonPrizes({ prizePool }: HackathonPrizesProps) {
  const prizes = [
    {
      place: "1st Place",
      amount: `${parseInt(prizePool.replace(/\D/g, "")) * 0.5}`,
      icon: Trophy,
      description: "Plus mentorship opportunities and sponsored resources",
    },
    {
      place: "2nd Place",
      amount: `${parseInt(prizePool.replace(/\D/g, "")) * 0.3}`,
      icon: Award,
      description: "Including sponsored software licenses and cloud credits",
    },
    {
      place: "3rd Place",
      amount: `${parseInt(prizePool.replace(/\D/g, "")) * 0.2}`,
      icon: Medal,
      description: "With additional sponsored development tools",
    },
  ];

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="grid gap-6">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 rounded-lg border p-4"
            >
              <prize.icon className="h-5 w-5 text-primary" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">{prize.place}</h4>
                  <span className="text-sm font-semibold">${prize.amount}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {prize.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}