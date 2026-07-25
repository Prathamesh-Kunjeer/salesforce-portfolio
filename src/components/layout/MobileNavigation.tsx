"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ResumeDownloadButton } from "@/src/components/portfolio/ResumeDownloadButton";
import { routes } from "@/src/lib/routes";
import { cn } from "@/src/lib/utils";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        aria-expanded={open}
        aria-label="Toggle navigation"
        className="inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md border border-border bg-surface transition duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-surface-muted"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <span className="h-0.5 w-4 rounded-full bg-foreground" />
        <span className="h-0.5 w-4 rounded-full bg-foreground" />
        <span className="h-0.5 w-4 rounded-full bg-foreground" />
      </button>
      {open ? (
        <div className="animate-mobile-menu absolute left-4 right-4 top-16 rounded-lg border border-border bg-surface p-3 shadow-xl shadow-black/10">
          <nav className="grid gap-1">
            {routes.map((route) => (
              <Link
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition duration-200 hover:bg-surface-muted hover:text-foreground",
                  pathname === route.href &&
                    "bg-accent/10 text-foreground ring-1 ring-accent/20",
                )}
                href={route.href}
                key={route.href}
                onClick={() => setOpen(false)}
              >
                {route.label}
              </Link>
            ))}
            <ResumeDownloadButton className="mt-2 w-full" />
          </nav>
        </div>
      ) : null}
    </div>
  );
}
