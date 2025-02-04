"use client";

import { MessageSquare, Trophy, Wallet, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WalletConnect from "./wallet-connect";
import { isAdmin } from "@/utils/admin";
import { useActiveAccount } from "thirdweb/react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navigation = [
  { name: "Dashboard", href: "/", icon: Trophy, needAdmin: false },
  { name: "AI Chat", href: "/chat", icon: MessageSquare, needAdmin: false },
  { name: "NFTs", href: "/nfts", icon: Wallet, needAdmin: false },
  { name: "Settings", href: "/admin", icon: Settings, needAdmin: true },
];

export function AppSidebar() {
  const pathname = usePathname();
  const account = useActiveAccount();

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-6 py-3">
        <h1 className="text-xl font-bold">LEFY</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navigation.map((item) => {
            // Skip rendering if the item requires admin and the user is not an admin
            if (item.needAdmin && (!account || !isAdmin(account.address))) {
              return null;
            }

            // Render the menu item
            return (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={item.name}
                >
                  <Link href={item.href}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <WalletConnect />
      </SidebarFooter>
    </Sidebar>
  );
}
