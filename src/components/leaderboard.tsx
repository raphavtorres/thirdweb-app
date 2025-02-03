"use client";

import { Trophy } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const leaderboardData = [
  { id: 1, name: "Alice Chen", score: 2500, streak: 30 },
  { id: 2, name: "Bob Wang", score: 2300, streak: 25 },
  { id: 3, name: "Carol Liu", score: 2100, streak: 20 },
];

export function Leaderboard() {
  return (
    <div className="space-y-4">
      {leaderboardData.map((user, index) => (
        <div
          key={user.id}
          className="flex items-center justify-between rounded-lg border p-4"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              {index === 0 ? (
                <Trophy className="h-4 w-4 text-yellow-500" />
              ) : (
                <span className="text-sm font-medium">{index + 1}</span>
              )}
            </div>
            <Avatar>
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-muted-foreground">
                {user.streak} day streak
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-medium">{user.score}</p>
            <p className="text-sm text-muted-foreground">points</p>
          </div>
        </div>
      ))}
    </div>
  );
}
