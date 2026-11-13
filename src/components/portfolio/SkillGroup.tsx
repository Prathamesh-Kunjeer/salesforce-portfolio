import { Card } from "@/src/components/ui/Card";
import { TagList } from "@/src/components/ui/TagList";

export function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  const isCore = title === "Core Expertise";

  return (
    <Card className="flex h-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {isCore ? (
          <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <svg
              aria-hidden="true"
              className="h-2.5 w-2.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            Lightning Core
          </span>
        ) : null}
      </div>
      <TagList
        items={skills}
        showLightning={isCore}
        variant={isCore ? "core" : "default"}
      />
    </Card>
  );
}
