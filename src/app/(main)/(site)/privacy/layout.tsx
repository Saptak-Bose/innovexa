import { ReactNode } from "react";

export default function PrivacyLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return <div>{children}</div>;
}
