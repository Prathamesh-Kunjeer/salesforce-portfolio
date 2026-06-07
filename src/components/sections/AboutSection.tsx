import { Card } from "@/src/components/ui/Card";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import { TagList } from "@/src/components/ui/TagList";
import type { Profile } from "@/src/types/portfolio";

export function AboutSection({ profile }: { profile: Profile }) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="about">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader
          description={profile.summary}
          eyebrow="About"
          title="Enterprise Salesforce delivery across CRM, service, AI, and automation."
        />
        <div className="grid gap-6">
          <Card>
            <h3 className="text-lg font-semibold text-foreground">
              Core strengths
            </h3>
            <div className="mt-4">
              <TagList items={profile.coreStrengths} />
            </div>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-foreground">Domains</h3>
            <div className="mt-4">
              <TagList items={profile.domains} />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
