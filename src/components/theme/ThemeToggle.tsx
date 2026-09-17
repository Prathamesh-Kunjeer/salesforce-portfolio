"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/src/hooks/useTheme";

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="4" />
      <line x1="12" x2="12" y1="2" y2="4" />
      <line x1="12" x2="12" y1="20" y2="22" />
      <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
      <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
      <line x1="2" x2="4" y1="12" y2="12" />
      <line x1="20" x2="22" y1="12" y2="12" />
      <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
      <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render theme-aware content after hydration to avoid SSR mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <button
      aria-label="Toggle color theme"
      className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-md border border-border bg-surface text-foreground transition duration-200 hover:bg-surface-muted hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      onClick={toggleTheme}
      title="Toggle color theme"
      type="button"
    >
      <span className="absolute inset-0 flex items-center justify-center">
        <SunIcon
          className={`theme-icon ${mounted && !isDark ? "theme-icon-enter" : "theme-icon-exit"}`}
        />
      </span>
      <span className="absolute inset-0 flex items-center justify-center">
        <MoonIcon
          className={`theme-icon ${mounted && isDark ? "theme-icon-enter" : "theme-icon-exit"}`}
        />
      </span>
    </button>
  );
}
