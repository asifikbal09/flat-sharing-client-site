/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Search } from "lucide-react";
import Link from "next/link";
import "../../app/globals.css";
import { logOut } from "@/utils/actions/logoutUser";
import { useAuth } from "@/lib/AuthProviders";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Navbar = ({ user }: { user: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { setUser } = useAuth();

  const handleLogout = async () => {
    const toastId = toast.loading("Logging out...");
    await logOut();
    setUser(null);
    router.push("/");
    toast.success("Logged out successfully!", { id: toastId });
  };

  const navLinks = [
    { name: "Find Flats", href: "/flats" },
    { name: "List Your Space", href: "#list" },
    ...(user ? [{ name: "Dashboard", href: "/dashboard" }] : []),
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft group-hover:shadow-glow transition-shadow duration-300">
              <Home className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Flat<span className="text-gradient">Mate</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              <Search /> Search
            </Button>

            {user ? (
              <Button
                size="sm"
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft"
                onClick={handleLogout}
              >
                Log Out
              </Button>
            ) : (
              <Link href="/login">
                <Button
                  size="sm"
                  className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft"
                >
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-2 text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Button
                  variant="ghost"
                  className="justify-start text-muted-foreground"
                >
                  Sign In
                </Button>

                <Link href="/login">
                  <Button className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft">
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
