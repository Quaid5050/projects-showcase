import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin — Chan's Garden",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
