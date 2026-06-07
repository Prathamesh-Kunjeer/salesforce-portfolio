"use client";

import type { ReactNode } from "react";
import { useTheme } from "@/src/hooks/useTheme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  useTheme();

  return <>{children}</>;
}
