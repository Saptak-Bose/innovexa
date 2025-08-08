import { ReactNode } from "react";

export default function ProductsLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return <div>{children}</div>;
}
