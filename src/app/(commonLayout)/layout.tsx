import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "FlatMate - Find Your Perfect Flatmate",
  description: "Making shared living simple, safe, and social.",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div>
        <Navbar/>
{children}
        <Footer/>
    </div>
  );
}
