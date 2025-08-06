import { ReactNode } from "react";

export default function ProfileLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return <div>{children}</div>;
}
