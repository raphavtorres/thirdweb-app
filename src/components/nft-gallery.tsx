"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useActiveAccount } from "thirdweb/react";

interface NFT {
  id: string;
  name: string;
  description: string;
  image: string;
}

// Sample NFT data - in a real app, this would come from your backend or blockchain
const nfts: NFT[] = [
  {
    id: "1",
    name: "30 Day Streak",
    description: "Completed 30 consecutive days of learning",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Grammar Master",
    description: "Achieved perfect score in advanced grammar",
    image: "/placeholder.svg",
  },
];

export function NFTGallery() {
  const account = useActiveAccount();

  if (!account) {
    return (
      <div className="p-8 text-center">
        <p>Connect your wallet to view your NFTs</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {nfts.map((nft) => (
        <Card key={nft.id}>
          <CardHeader>
            <CardTitle>{nft.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-square overflow-hidden rounded-lg">
              <Image
                src={nft.image || "/placeholder.svg"}
                alt={nft.name}
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {nft.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
