import { ReactNode } from "react";

export default function AuthLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return (
    <div className="flex items-center justify-center h-screen w-full max-w-2xl mx-auto">
      {children}
    </div>
  );
}
