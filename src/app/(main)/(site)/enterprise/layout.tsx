import { ReactNode } from "react";

export default function EnterpriseLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return <div>{children}</div>;
}
