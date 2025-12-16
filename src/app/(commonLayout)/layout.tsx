import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { userInfo } from "@/utils/userInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FlatMate - Find Your Perfect Flatmate",
  description: "Making shared living simple, safe, and social.",
};

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await userInfo();
  return (
    <div>
      <Navbar user={user} />
      {children}
      <Footer />
    </div>
  );
}
