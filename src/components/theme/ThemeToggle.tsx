"use client";

import { useTheme } from "@/src/hooks/useTheme";

export function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      aria-label="Toggle color theme"
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-sm font-semibold text-foreground transition hover:bg-surface-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      onClick={toggleTheme}
      type="button"
      title="Toggle color theme"
    >
      <span aria-hidden="true">T</span>
    </button>
  );
}
