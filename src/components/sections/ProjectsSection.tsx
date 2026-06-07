import { ProjectCard } from "@/src/components/portfolio/ProjectCard";
import { Button } from "@/src/components/ui/Button";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import type { Project } from "@/src/types/portfolio";

export function ProjectsSection({
  projects,
  featured = false,
  headingLevel = "h2",
}: {
  projects: Project[];
  featured?: boolean;
  headingLevel?: "h1" | "h2";
}) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="projects">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            description="Delivery experience across telecommunications order management, insurance operations, financial services CRM, and AI-powered customer service."
            eyebrow="Projects"
            level={headingLevel}
            title={featured ? "Featured Salesforce project work." : "Salesforce project portfolio."}
          />
          {featured ? (
            <Button href="/projects" variant="secondary">
              Review Salesforce Projects
            </Button>
          ) : null}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard detailed={!featured} key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
