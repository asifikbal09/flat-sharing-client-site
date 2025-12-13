import { SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';

const UserDashboardNavber = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex-1 flex flex-col">
          <header className="h-14 border-b border-border flex items-center px-4 bg-card">
            <SidebarTrigger className="mr-4" />
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </header>
          <div className="flex-1 p-6 overflow-auto">
            {children}
          </div>
        </main>
    );
};

export default UserDashboardNavber;