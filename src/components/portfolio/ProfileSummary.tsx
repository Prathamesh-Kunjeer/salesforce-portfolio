import Image from "next/image";
import { Card } from "@/src/components/ui/Card";
import type { Profile } from "@/src/types/portfolio";

export function ProfileSummary({
  profile,
  certificationCount,
}: {
  profile: Profile;
  certificationCount: number;
}) {
  const domains = profile.domains.filter((domain) =>
    ["Telecommunications", "Insurance", "Financial Services"].includes(domain),
  );
  const hasAgentforce = profile.coreStrengths.some((strength) =>
    strength.startsWith("Agentforce"),
  );
  const hasOmniStudio = profile.coreStrengths.includes(
    "OmniStudio Consultation",
  );
  const expertise =
    hasAgentforce && hasOmniStudio
      ? "Agentforce and OmniStudio Expertise"
      : profile.coreStrengths
          .filter((strength) =>
            [
              "Agentforce and AI Solutions",
              "OmniStudio Consultation",
            ].includes(strength),
          )
          .join(" + ");

  return (
    <Card className="overflow-hidden border-accent/15 bg-surface/80 p-0 shadow-xl shadow-accent/5">
      <div className="profile-frame relative p-5">
        <div className="relative mx-auto aspect-[4/5] max-w-56 overflow-hidden rounded-2xl border border-border bg-surface shadow-lg shadow-black/10">
          <Image
            alt={`${profile.name} profile photo`}
            className="object-cover"
            fill
            priority
            sizes="(max-width: 768px) 224px, 256px"
            src="/profile-photo.jpg"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/30 dark:ring-white/10" />
        </div>
      </div>
      <div className="grid gap-4 border-t border-border p-5">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            Professional Profile
          </p>
          <p className="mt-1 text-xl font-semibold text-foreground">
            {profile.currentRole}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {profile.location}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-border bg-surface-muted/45 p-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Years
            </p>
            <p className="mt-1 text-xl font-semibold text-foreground">
              {profile.experience}
            </p>
          </div>
          <div className="rounded-lg border border-accent/30 bg-accent/10 p-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Certs
            </p>
            <p className="mt-1 text-xl font-semibold text-foreground">
              {certificationCount}
            </p>
          </div>
        </div>
      </div>
      <div className="grid gap-4 border-t border-border p-5 pt-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            Industry Experience
          </p>
          <p className="mt-1 text-base font-semibold text-foreground">
            {domains.join(" / ")}
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Expertise</p>
          <p className="mt-1 text-base font-semibold text-foreground">
            {expertise}
          </p>
        </div>
      </div>
    </Card>
  );
}
