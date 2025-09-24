"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  href: string;
  children?: Readonly<ReactNode>;
};

export default function ALink({ href, children }: Props) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        active ? "text-primary font-bold" : "text-secondary-foreground",
        "hover:underline hover:underline-offset-2 transition-all transform ease-in-out duration-300 hover:font-bold hover:text-primary font-semibold"
      )}
    >
      {children}
    </Link>
  );
}
