import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Login - FlatMate", template: "%s - FlatMate" },
  description: "Login to your FlatMate account to find and connect with potential flatmates easily.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
