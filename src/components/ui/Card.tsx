import type { HTMLAttributes } from "react";
import { cn } from "@/src/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-surface p-6 shadow-sm shadow-black/5 transition duration-300 ease-out dark:shadow-black/20",
        className,
      )}
      {...props}
    />
  );
}
