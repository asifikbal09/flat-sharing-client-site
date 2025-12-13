import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const UserDashboardNavber = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex-1 flex flex-col">
      <header className="h-18 border-b border-border flex items-center justify-between px-4 bg-card">
        <div className="flex items-center">
          <SidebarTrigger className="mr-3" />
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>
        <Button variant="outline" size="sm" className="gap-2" asChild>
          <Link href="/">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </header>
      <div className="flex-1 p-6 overflow-auto">{children}</div>
    </main>
  );
};

export default UserDashboardNavber;
