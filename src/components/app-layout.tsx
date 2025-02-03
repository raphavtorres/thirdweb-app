import type React from "react";
import { AppSidebar } from "./app-sidebar";
import HeroGeometric from "@/components/hero-geometric";
import { useActiveAccount } from "thirdweb/react";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const account = useActiveAccount();

  if (!account) {
    return <HeroGeometric />;
  }

  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <main className="flex-1 h-screen overflow-auto">{children}</main>
    </div>
  );
}
