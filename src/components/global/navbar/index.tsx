import { getUser } from "@/actions/user";
import { Button } from "@/components/ui/button";
import { navTabs } from "@/lib/constants";
import { UserButton } from "@clerk/nextjs";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import ALink from "../active-link";

type Props = object;

export default async function Navbar({}: Props) {
  const user = await getUser();

  return (
    <header className="fixed top-0 right-0 left-0 p-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b border-border justify-between">
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold">Inno𝒱exa</p>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          {navTabs.map(({ href, tab }, i) => (
            <li key={i}>
              <ALink href={href}>{tab}</ALink>
            </li>
          ))}
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href={user.user ? `/${user.user.id}` : "/auth/sign-up"}
          className="focus:outline-none"
        >
          <Button className="relative inline-flex h-10 overflow-hidden rounded-full p-[3px] focus:ring-2 focus:ring-offset-2 focus:ring-ring focus:ring-offset-ring/[8%]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFF2CB_0%,#EFB100_50%,#FFF2CB_100%)]" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-background px-3 py-1 text-sm font-semibold text-secondary-foreground backdrop-blur-3xl">
              {user.user ? "Profile" : "Get Started"}
            </span>
          </Button>
        </Link>
        {user.user ? (
          <Button className="relative inline-flex h-10 overflow-hidden rounded-full p-[3px] focus:ring-2 focus:ring-offset-2 focus:ring-ring focus:ring-offset-ring/[8%]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFF2CB_0%,#EFB100_50%,#FFF2CB_100%)]" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-background p-1 backdrop-blur-3xl">
              <UserButton />
            </span>
          </Button>
        ) : null}
        <MenuIcon className="md:hidden cursor-pointer" />
      </aside>
    </header>
  );
}
