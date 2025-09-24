import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About — Inno𝒱exa",
  description:
    "Inno𝒱exa — handcrafted Macropads and software for creators. Meet the team, our mission and the story behind our studio-grade hardware.",
  openGraph: {
    title: "About • Inno𝒱exa",
    description:
      "Handcrafted Macropads and software for creators. Meet Inno𝒱exa.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return <div>{children}</div>;
}
