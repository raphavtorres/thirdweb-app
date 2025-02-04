"use client";

import { useEffect, useState } from "react";
import { useActiveAccount } from "thirdweb/react";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { isAdmin } from "@/utils/admin";
import DailyChallengeForm from "@/components/daily-challenge-form";
import NFTMintingForm from "@/components/nft-minting-form";
import { AppLayout } from "@/components/app-layout";

export default function AdminPage() {
  const account = useActiveAccount();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!account || !isAdmin(account.address)) {
      router.push("/");
    } else {
      setIsLoading(false);
    }
  }, [account, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="mb-8 text-3xl font-bold">Admin Dashboard</h1>
        <Tabs defaultValue="challenges" className="w-full">
          <TabsList>
            <TabsTrigger value="challenges">Daily Challenges</TabsTrigger>
            <TabsTrigger value="nft">NFT Minting</TabsTrigger>
          </TabsList>
          <TabsContent value="challenges">
            <DailyChallengeForm />
          </TabsContent>
          <TabsContent value="nft">
            <NFTMintingForm />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
