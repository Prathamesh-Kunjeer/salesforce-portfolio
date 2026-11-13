import { Badge } from "@/src/components/ui/Badge";
import { cn } from "@/src/lib/utils";

export function TagList({
  items,
  limit,
  variant = "default",
  showLightning = false,
}: {
  items: string[];
  limit?: number;
  variant?: "default" | "core";
  showLightning?: boolean;
}) {
  const visibleItems = limit ? items.slice(0, limit) : items;
  const remaining = limit && items.length > limit ? items.length - limit : 0;

  return (
    <div className="flex flex-wrap gap-2">
      {visibleItems.map((item) => (
        <Badge
          key={item}
          className={cn(
            variant === "core" &&
              "skill-chip-core border-accent/30 bg-accent/5 text-foreground hover:border-accent font-medium shadow-sm",
          )}
        >
          {showLightning ? (
            <svg
              aria-hidden="true"
              className="mr-1.5 h-3 w-3 shrink-0 text-amber-500 dark:text-amber-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          ) : null}
          {item}
        </Badge>
      ))}
      {remaining ? <Badge>+{remaining}</Badge> : null}
    </div>
  );
}
