"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from "date-fns";

interface HackathonTimerProps {
  startDate: Date;
  endDate: Date;
  status: "upcoming" | "active" | "completed";
}

export function HackathonTimer({ startDate, endDate, status }: HackathonTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = status === "upcoming" ? startDate : endDate;
      const now = new Date();

      if (status === "completed") {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = differenceInDays(targetDate, now);
      const hours = differenceInHours(targetDate, now) % 24;
      const minutes = differenceInMinutes(targetDate, now) % 60;
      const seconds = differenceInSeconds(targetDate, now) % 60;

      return { days, hours, minutes, seconds };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate, endDate, status]);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">
          {status === "upcoming" ? "Starting In" : status === "active" ? "Time Remaining" : "Hackathon Ended"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-2">
          {timeBlocks.map((block) => (
            <div
              key={block.label}
              className="flex flex-col items-center justify-center p-2 bg-muted rounded-lg"
            >
              <span className="text-2xl font-bold">
                {String(block.value).padStart(2, "0")}
              </span>
              <span className="text-xs text-muted-foreground">{block.label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}