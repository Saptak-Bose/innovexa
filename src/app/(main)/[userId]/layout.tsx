import { ReactNode } from "react";

export default function RootUserIdLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return <div>{children}</div>;
}
