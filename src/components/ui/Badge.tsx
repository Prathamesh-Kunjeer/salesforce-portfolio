import type { ReactNode } from "react";
import { cn } from "@/src/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-surface-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
