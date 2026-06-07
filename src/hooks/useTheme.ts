"use client";

import { useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark";

const storageKey = "portfolio-theme";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const storedTheme = window.localStorage.getItem(storageKey);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => getPreferredTheme());

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(storageKey, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark",
    );
  }, []);

  return {
    theme,
    toggleTheme,
  };
}
