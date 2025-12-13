import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard - FlatMate",
  description: "Admin dashboard for managing FlatMate platform.",
};

export default async function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
