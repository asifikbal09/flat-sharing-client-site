import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { userInfo } from "@/utils/userInfo";
import type { Metadata } from "next";
import UserDashboardSidebar from "../components/userSideber";
import { SidebarProvider } from "@/components/ui/sidebar";
import UserDashboardNavber from "../components/UserDashboardNavber";
import { cookies } from "next/headers";
import { useAuth } from "@/lib/AuthProviders";
import { logOut } from "@/utils/actions/logoutUser";

export const metadata: Metadata = {
  title: "FlatMate - Find Your Perfect Flatmate",
  description: "Making shared living simple, safe, and social.",
};

export default async function UserDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = await cookies();

  const res = await fetch(`${process.env.BACKEND_LINK}/profile`, {
    cache: "no-store",
    headers: {
      Authorization: cookie.get("accessToken")?.value || "",
    },
  });
  const data = await res.json();

  const userData = data.data;
  return (
    <div>
      <SidebarProvider>
        <UserDashboardSidebar userData={userData} />
        <UserDashboardNavber>{children}</UserDashboardNavber>
      </SidebarProvider>
    </div>
  );
}
