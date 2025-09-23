import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Innovexa — Make Time Tap",
  description:
    "Studio-grade Macropads + smart software. Automate tasks into one satisfying press — pro switches, cloud profiles, and rapid customization.",
  openGraph: {
    title: "Innovexa — Make Time Tap",
    description:
      "Studio-grade Macropads + smart software. Automate tasks into one satisfying press.",
  },
};

export default function LandingLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return <div>{children}</div>;
}
