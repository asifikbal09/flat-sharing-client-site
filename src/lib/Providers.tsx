"use client";
import { Toaster } from "sonner";
import { AuthProvider } from "./AuthProviders";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Toaster></Toaster>
        {children}
      </Provider>
    </AuthProvider>
  );
}
