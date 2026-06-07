"use client";

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
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          className="flex items-center gap-3 font-semibold text-foreground"
          href="/"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent text-sm font-bold text-accent-foreground">
            {name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)}
          </span>
          <span className="hidden sm:inline">{name}</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {routes.map((route) => (
            <Link
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-surface-muted hover:text-foreground",
                pathname === route.href && "bg-surface-muted text-foreground",
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
