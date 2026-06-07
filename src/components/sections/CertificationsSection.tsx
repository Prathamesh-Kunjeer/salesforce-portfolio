import { CertificationCard } from "@/src/components/portfolio/CertificationCard";
import { Button } from "@/src/components/ui/Button";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import type { Certification } from "@/src/types/portfolio";

export function CertificationsSection({
  certifications,
  groupedCertifications,
  featured = false,
  headingLevel = "h2",
}: {
  certifications?: Certification[];
  groupedCertifications?: Record<string, Certification[]>;
  featured?: boolean;
  headingLevel?: "h1" | "h2";
}) {
  const groups: Array<[string, Certification[]]> = groupedCertifications
    ? Object.entries(groupedCertifications)
    : [["Credentials", certifications ?? []]];
  const allCertifications = groups.flatMap(([, items]) => items);
  const categories = Array.from(
    new Set(allCertifications.map((certification) => certification.category)),
  );

  return (
    <section
      className="border-y border-border bg-surface-muted/40 px-4 py-20 sm:px-6 lg:px-8"
      id="certifications"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            description="Salesforce certifications covering administration, development, consulting, OmniStudio, Service Cloud, JavaScript, and Agentforce."
            eyebrow="Certifications"
            level={headingLevel}
            title="Credentials aligned with enterprise Salesforce delivery."
          />
          {featured ? (
            <Button href="/certifications" variant="secondary">
              Review Credentials
            </Button>
          ) : null}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-surface p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Credentials
            </p>
            <p className="mt-2 text-2xl font-semibold text-foreground">
              {allCertifications.length} Salesforce
            </p>
          </div>
          <div className="rounded-lg border border-border bg-surface p-4 md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Coverage
            </p>
            <p className="mt-2 text-base font-semibold text-foreground">
              {categories.join(" + ")}
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-8">
          {groups.map(([category, items]) => (
            <div key={category}>
              {!featured && groupedCertifications ? (
                <h3 className="mb-4 text-xl font-semibold text-foreground">
                  {category}
                </h3>
              ) : null}
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {items.map((certification) => (
                  <CertificationCard
                    certification={certification}
                    key={certification.name}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
