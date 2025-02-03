import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

import { ThirdwebProvider } from "thirdweb/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Language Learning app",
  description: "Language Learning app using Thirdweb and AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider>
          <SidebarProvider>
            {children}
            <Toaster />
          </SidebarProvider>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
