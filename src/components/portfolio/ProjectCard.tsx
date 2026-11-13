import { Badge } from "@/src/components/ui/Badge";
import { Card } from "@/src/components/ui/Card";
import { ExternalLink } from "@/src/components/ui/ExternalLink";
import { TagList } from "@/src/components/ui/TagList";
import type { Project } from "@/src/types/portfolio";

function parseKpi(text: string): { metric: string } | null {
  const match = text.match(/(\b\d+(?:\.\d+)?%|\b\d[\d,]*\+(?:\s*(?:records|users))?|\b\d+\s*to\s*\d+\s*(?:seconds|min|mins|hours|days)\b)/i);
  if (match) {
    return { metric: match[0].trim() };
  }
  return null;
}

export function ProjectCard({
  project,
  detailed = false,
}: {
  project: Project;
  detailed?: boolean;
}) {
  const visibleAchievements = detailed
    ? project.achievements
    : project.achievements.slice(0, 3);
  const visibleResponsibilities = detailed
    ? project.responsibilities
    : project.responsibilities.slice(0, 2);

  return (
    <Card className="group flex h-full flex-col gap-6 hover:-translate-y-1 hover:border-accent/35 hover:shadow-xl hover:shadow-accent/10">
      <div className="flex flex-wrap items-center gap-2">
        <Badge>{project.domain}</Badge>
        {project.client ? <Badge>{project.client}</Badge> : null}
        <Badge>{project.role}</Badge>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-foreground">
          {project.name}
        </h3>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
          Client / Domain
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          {[project.client, project.domain].filter(Boolean).join(" - ")}
        </p>
      </div>
      <div className="grid gap-4">
        <div>
          <p className="mb-2 text-sm font-semibold text-foreground">
            Business Context
          </p>
          <p className="text-sm leading-6 text-muted-foreground">
            {project.overview}
          </p>
        </div>
        <div className="rounded-lg border border-accent/20 bg-accent/5 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
              Impact & Outcomes
            </p>
            <span className="rounded-full border border-accent/25 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent">
              Salesforce Metric
            </span>
          </div>
          <div className="grid gap-2">
            {visibleAchievements.map((achievement) => {
              const kpi = parseKpi(achievement);
              if (kpi) {
                return (
                  <div
                    key={achievement}
                    className="kpi-callout flex items-start gap-2.5 rounded-md p-2.5"
                  >
                    <span className="shrink-0 rounded bg-accent/15 px-2 py-0.5 font-mono text-xs font-bold text-accent">
                      {kpi.metric}
                    </span>
                    <span className="text-xs font-medium leading-5 text-foreground">
                      {achievement}
                    </span>
                  </div>
                );
              }
              return (
                <div key={achievement} className="flex gap-2 text-xs leading-5 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{achievement}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold text-foreground">
            Delivery Scope
          </p>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            {visibleResponsibilities.map((responsibility) => (
              <li key={responsibility} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {project.features && detailed ? (
        <div>
          <p className="mb-2 text-sm font-semibold text-foreground">Features</p>
          <TagList items={project.features} />
        </div>
      ) : null}
      {project.links ? (
        <div className="mt-auto flex flex-wrap gap-4 pt-2">
          {project.links.map((link) => (
            <ExternalLink href={link.url} key={link.url}>
              {link.label}
            </ExternalLink>
          ))}
        </div>
      ) : null}
      <div className="mt-auto grid gap-3 pt-1">
        <p className="text-sm font-semibold text-foreground">Tech Stack</p>
        <TagList items={project.technologies} limit={detailed ? undefined : 6} />
      </div>
    </Card>
  );
}
