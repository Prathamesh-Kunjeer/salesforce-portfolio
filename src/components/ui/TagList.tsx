import { Badge } from "@/src/components/ui/Badge";

export function TagList({
  items,
  limit,
}: {
  items: string[];
  limit?: number;
}) {
  const visibleItems = limit ? items.slice(0, limit) : items;
  const remaining = limit && items.length > limit ? items.length - limit : 0;

  return (
    <div className="flex flex-wrap gap-2">
      {visibleItems.map((item) => (
        <Badge key={item}>{item}</Badge>
      ))}
      {remaining ? <Badge>+{remaining}</Badge> : null}
    </div>
  );
}
