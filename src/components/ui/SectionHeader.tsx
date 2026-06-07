import { cn } from "@/src/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  level = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  level?: "h1" | "h2";
}) {
  const Heading = level;

  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
