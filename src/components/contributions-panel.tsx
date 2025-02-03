"use client";

import { useTheme } from "next-themes";

interface ContributionDay {
  date: string;
  count: number;
}

// Sample data - in a real app, this would come from your backend
const contributionsData: ContributionDay[] = Array.from(
  { length: 365 },
  (_, i) => ({
    date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString(),
    count: Math.floor(Math.random() * 4),
  })
);

export function ContributionsPanel() {
  const { theme } = useTheme();

  const getColor = (count: number) => {
    if (count === 0) return theme === "dark" ? "#27272a" : "#f4f4f5";
    if (count === 1) return "#22c55e";
    if (count === 2) return "#16a34a";
    return "#15803d";
  };

  return (
    <div className="overflow-x-auto">
      <div className="inline-grid grid-cols-[repeat(53,1fr)] gap-1">
        {contributionsData.map((day, i) => (
          <div
            key={day.date}
            className="h-3 w-3 rounded-sm"
            style={{ backgroundColor: getColor(day.count) }}
            title={`${day.count} contributions on ${new Date(
              day.date
            ).toLocaleDateString()}`}
          />
        ))}
      </div>
    </div>
  );
}
