import Navbar from "@/components/global/navbar";
import { ReactNode } from "react";

export default function SiteLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
