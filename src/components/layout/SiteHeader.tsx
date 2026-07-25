"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNavigation } from "@/src/components/layout/MobileNavigation";
import { ResumeDownloadButton } from "@/src/components/portfolio/ResumeDownloadButton";
import { ThemeToggle } from "@/src/components/theme/ThemeToggle";
import { routes } from "@/src/lib/routes";
import { cn } from "@/src/lib/utils";

export function SiteHeader({ name }: { name: string }) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-surface/80 shadow-sm shadow-black/[0.03] backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          className="group flex items-center gap-3 font-semibold text-foreground transition duration-200 hover:text-accent"
          href="/"
        >
          <Image
            alt={`${name} brand logo`}
            className="h-9 w-9 rounded-lg object-cover shadow-lg shadow-accent/20 transition duration-200 group-hover:-translate-y-0.5"
            height={36}
            priority
            src="/brand-logo.png"
            width={36}
          />
          <span className="hidden sm:inline">{name}</span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-border bg-background/65 p-1 shadow-inner shadow-black/[0.03] md:flex">
          {routes.map((route) => (
            <Link
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition duration-200 ease-out hover:text-foreground",
                "after:absolute after:inset-x-4 after:bottom-1 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-accent after:transition after:duration-200 hover:after:scale-x-100",
                pathname === route.href &&
                  "bg-surface text-foreground shadow-sm shadow-black/[0.06] after:scale-x-100",
              )}
              href={route.href}
              key={route.href}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ResumeDownloadButton className="min-h-10 px-4" variant="secondary" />
          </div>
          <ThemeToggle />
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
