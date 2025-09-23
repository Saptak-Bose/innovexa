import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About — Innovexa",
  description:
    "Innovexa — handcrafted Macropads and software for creators. Meet the team, our mission and the story behind our studio-grade hardware.",
  openGraph: {
    title: "About • Innovexa",
    description:
      "Handcrafted Macropads and software for creators. Meet Innovexa.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return <div>{children}</div>;
}
