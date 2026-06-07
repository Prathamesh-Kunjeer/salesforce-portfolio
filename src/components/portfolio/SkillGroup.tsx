import { Card } from "@/src/components/ui/Card";
import { TagList } from "@/src/components/ui/TagList";

export function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <Card className="flex h-full flex-col gap-4">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <TagList items={skills} />
    </Card>
  );
}
