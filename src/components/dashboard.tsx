import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaderboard } from "@/components/leaderboard";

import { ContributionsPanel } from "./contributions-panel";
import { Trophy, Target, Book, Star } from "lucide-react";

const stats = [
  {
    title: "Current Streak",
    value: "7 days",
    icon: Trophy,
    description: "Keep going! You're doing great!",
  },
  {
    title: "Words Learned",
    value: "150",
    icon: Book,
    description: "Total vocabulary mastered",
  },
  {
    title: "Weekly Goal",
    value: "80%",
    icon: Target,
    description: "20 words left this week",
  },
  {
    title: "XP Earned",
    value: "2,500",
    icon: Star,
    description: "Total experience points",
  },
];

export function Dashboard() {
  return (
    <div className="h-full w-full space-y-4 p-4 md:space-y-8 md:p-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7"> */}
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Learning Progress</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <ContributionsPanel />
        </CardContent>
      </Card>
      {/* </div> */}
      {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7"> */}
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Leaderboard</CardTitle>
        </CardHeader>
        <CardContent>
          <Leaderboard />
        </CardContent>
      </Card>
      {/* </div> */}
    </div>
  );
}
