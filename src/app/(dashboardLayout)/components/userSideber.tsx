"use client";
import { User, Home, FileText, Settings, LogOut, Inbox } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { logOut } from "@/utils/actions/logoutUser";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { set } from "zod";
import { useAuth } from "@/lib/AuthProviders";

const menuItems = [
  { title: "Profile", url: "/dashboard", icon: User },
  { title: "My Flat Posts", url: "/dashboard/my-flats", icon: Home },
  { title: "My Requests", url: "/dashboard/my-requests", icon: FileText },
  {
    title: "Requests Received",
    url: "/dashboard/requests-received",
    icon: Inbox,
  },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];

export type TUserProps = {
  id: string;
  userId: string;
  email: string;
  name: string;
  imageUrl: string;
  bio: string;
  profession: string;
  address: string;
  createdAt: string;
  updatedAt: string;
};

const UserDashboardSidebar = ({ userData }: { userData: TUserProps }) => {
  const [disabled, setDisabled] = useState(false);
  const route = useRouter();

  const { setUser } = useAuth();

  const handleLogout = async () => {
    setDisabled(true);
    await logOut();
    setUser(null);
    route.push("/");
    toast.success("Logged out successfully!");
    setDisabled(false);
  };

  return (
    <Sidebar className="border-r border-border">
      <SidebarHeader className="p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground">{userData?.name}</p>
            <p className="text-xs text-muted-foreground">{userData?.email}</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted/50 transition-colors"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-border">
        <Button
          disabled={disabled}
          onClick={handleLogout}
          variant="ghost"
          className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive"
        >
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default UserDashboardSidebar;
