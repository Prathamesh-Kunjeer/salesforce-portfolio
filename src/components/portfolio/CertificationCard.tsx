import { Badge } from "@/src/components/ui/Badge";
import { Card } from "@/src/components/ui/Card";
import type { Certification } from "@/src/types/portfolio";

/* Trailhead-style ring colors by category */
const ringConfig: Record<
  string,
  { ring: string; icon: string; bg: string; iconColor: string }
> = {
  Administration: {
    ring: "border-amber-400 shadow-amber-300/30",
    bg: "bg-amber-50 dark:bg-amber-950/40",
    icon: "⚙️",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  Developer: {
    ring: "border-sky-400 shadow-sky-300/30",
    bg: "bg-sky-50 dark:bg-sky-950/40",
    icon: "⚡",
    iconColor: "text-sky-600 dark:text-sky-400",
  },
  Consultant: {
    ring: "border-teal-400 shadow-teal-300/30",
    bg: "bg-teal-50 dark:bg-teal-950/40",
    icon: "🔷",
    iconColor: "text-teal-600 dark:text-teal-400",
  },
  AI: {
    ring: "border-violet-400 shadow-violet-300/30",
    bg: "bg-violet-50 dark:bg-violet-950/40",
    icon: "🤖",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
};

export function CertificationCard({
  certification,
}: {
  certification: Certification;
}) {
  const config = ringConfig[certification.category] ?? ringConfig.Administration;

  return (
    <Card className="group flex h-full flex-col gap-4 border-accent/15 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/8 hover:ring-1 hover:ring-accent/15">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <Badge>{certification.category}</Badge>

        {/* Trailhead-style achievement ring */}
        <div
          className={`cert-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 shadow-md ${config.ring} ${config.bg}`}
          title={`${certification.category} credential`}
        >
          <span className={`text-lg leading-none ${config.iconColor}`}>
            {config.icon}
          </span>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-foreground">
        {certification.name}
      </h3>
      <p className="text-sm leading-6 text-muted-foreground">
        {certification.description}
      </p>

      <div className="mt-auto border-t border-border pt-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Issuer
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground">
              {certification.issuer}
            </p>
          </div>
          <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
            Salesforce Credential
          </span>
        </div>
      </div>
    </Card>
  );
}
