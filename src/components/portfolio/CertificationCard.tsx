import { Badge } from "@/src/components/ui/Badge";
import { Card } from "@/src/components/ui/Card";
import type { Certification } from "@/src/types/portfolio";

export function CertificationCard({
  certification,
}: {
  certification: Certification;
}) {
  return (
    <Card className="flex h-full flex-col gap-4 border-accent/15">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Badge>{certification.category}</Badge>
        <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
          Salesforce Credential
        </span>
      </div>
      <h3 className="text-xl font-semibold text-foreground">
        {certification.name}
      </h3>
      <p className="text-sm leading-6 text-muted-foreground">
        {certification.description}
      </p>
      <div className="mt-auto border-t border-border pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Issuer
        </p>
        <p className="mt-1 text-sm font-semibold text-foreground">
          {certification.issuer}
        </p>
      </div>
    </Card>
  );
}
