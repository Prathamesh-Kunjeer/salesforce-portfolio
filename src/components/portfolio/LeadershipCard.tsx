import { Badge } from "@/src/components/ui/Badge";
import { Card } from "@/src/components/ui/Card";
import { TagList } from "@/src/components/ui/TagList";
import type { LeadershipItem } from "@/src/types/portfolio";

export function LeadershipCard({ item }: { item: LeadershipItem }) {
  return (
    <Card className="flex h-full flex-col gap-4 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/8">
      <div>
        {item.organization ? <Badge>{item.organization}</Badge> : null}
        <h3 className="mt-3 text-xl font-semibold text-foreground">
          {item.title}
        </h3>
      </div>
      <p className="text-sm leading-6 text-muted-foreground">
        {item.description}
      </p>
      {item.focusAreas ? <TagList items={item.focusAreas} limit={5} /> : null}
      <ul className="grid gap-2 text-sm text-muted-foreground">
        {item.impact.map((impact) => (
          <li key={impact} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{impact}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
