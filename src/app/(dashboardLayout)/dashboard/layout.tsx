import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { userInfo } from "@/utils/userInfo";
import type { Metadata } from "next";
import UserDashboardSidebar from "../components/userSideber";
import { SidebarProvider } from "@/components/ui/sidebar";
import UserDashboardNavber from "../components/UserDashboardNavber";

export const metadata: Metadata = {
  title: "FlatMate - Find Your Perfect Flatmate",
  description: "Making shared living simple, safe, and social.",
};

export default async function UserDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await userInfo();
  return (
    <div>
      <SidebarProvider>
        <UserDashboardSidebar />
        <UserDashboardNavber>
        {children}
        </UserDashboardNavber>
      </SidebarProvider>
    </div>
  );
}
