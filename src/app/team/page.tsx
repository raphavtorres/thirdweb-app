"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContributionsPanel } from "@/components/contributions-panel";
import { Leaderboard } from "@/components/leaderboard";

export default function TeamPage() {
  return (
    <div className="grid gap-4 p-4 md:grid-cols-2">
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Team Contributions</CardTitle>
        </CardHeader>
        <CardContent>
          <ContributionsPanel />
        </CardContent>
      </Card>
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Leaderboard</CardTitle>
        </CardHeader>
        <CardContent>
          <Leaderboard />
        </CardContent>
      </Card>
    </div>
  );
}
