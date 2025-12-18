"use client";
import { Toaster } from "sonner";
import { AuthProvider } from "./AuthProviders";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Toaster></Toaster>
      {children}
    </AuthProvider>
  );
}
