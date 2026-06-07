import { ProjectCard } from "@/src/components/portfolio/ProjectCard";
import { Card } from "@/src/components/ui/Card";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import { TagList } from "@/src/components/ui/TagList";
import type { Project, Skills } from "@/src/types/portfolio";

function pickExisting(items: string[], names: string[]) {
  return names.filter((name) => items.includes(name));
}

export function AgentforceSection({
  skills,
  project,
}: {
  skills: Skills;
  project?: Project;
}) {
  const aiSkills = pickExisting(skills.ai, [
    "Agentforce",
    "Agentforce Actions",
    "Einstein Vector Search",
    "Retrieval-Augmented Generation",
    "Prompt Defense",
    "AI Agent Design",
    "Prompt Engineering",
  ]);

  const projectTechnologies = project
    ? pickExisting(project.technologies, [
        "Agentforce",
        "Invocable Apex",
        "Einstein Vector Search",
        "Dynamic SOQL",
        "OTP Authentication",
        "Salesforce AI",
      ])
    : [];

  const focusAreas = Array.from(new Set([...aiSkills, ...projectTechnologies]));

  return (
    <section
      className="border-y border-border bg-surface-muted/40 px-4 py-20 sm:px-6 lg:px-8"
      id="agentforce"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeader
            description="Hands-on AI service experience with Agentforce, retrieval-based answers, prompt defense, Apex-backed actions, and secure banking assistant workflows."
            eyebrow="Agentforce and AI"
            title="AI-powered customer service experience on Salesforce."
          />
          <div className="mt-8">
            <TagList items={focusAreas} />
          </div>
        </div>
        <div className="grid gap-5">
          <Card>
            <h3 className="text-xl font-semibold text-foreground">
              Banking assistant capabilities
            </h3>
            {project?.features ? (
              <div className="mt-4">
                <TagList items={project.features} />
              </div>
            ) : null}
          </Card>
          {project ? <ProjectCard project={project} /> : null}
        </div>
      </div>
    </section>
  );
}
