import { LeadershipCard } from "@/src/components/portfolio/LeadershipCard";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import type { LeadershipItem } from "@/src/types/portfolio";

export function LeadershipSection({
  leadership,
}: {
  leadership: LeadershipItem[];
}) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="leadership">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          description="Team contribution beyond delivery work, including safety readiness, engagement initiatives, mentorship, and Salesforce content creation."
          eyebrow="Leadership"
          title="Leadership, mentorship, and community contribution."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {leadership.map((item) => (
            <LeadershipCard item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
