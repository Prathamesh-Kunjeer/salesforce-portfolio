import { SkillGroup } from "@/src/components/portfolio/SkillGroup";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import type { Skills } from "@/src/types/portfolio";

function pickSkills(skills: Skills, names: string[]) {
  const allSkills = Object.values(skills).flat();

  return names.filter((name) => allSkills.includes(name));
}

export function SkillsSection({ skills }: { skills: Skills }) {
  const skillGroups = [
    {
      title: "Core Expertise",
      skills: pickSkills(skills, [
        "Apex",
        "Lightning Web Components",
        "Service Cloud",
        "OmniStudio",
        "Agentforce",
        "Flows",
        "Integration Procedures",
        "REST APIs",
      ]),
    },
    {
      title: "Strong Experience",
      skills: pickSkills(skills, [
        "Triggers",
        "Batch Apex",
        "FlexCards",
        "OmniScripts",
        "DataRaptors",
        "Approval Processes",
        "Sharing Rules",
        "Permission Sets",
        "Named Credentials",
        "Data Loader",
        "GitHub",
        "Salesforce CLI",
        "Jira",
      ]),
    },
    {
      title: "Working Knowledge",
      skills: pickSkills(skills, [
        "Sales Cloud",
        "Experience Cloud",
        "Email-to-Case",
        "Web-to-Lead",
        "Validation Rules",
        "Dynamic Forms",
        "Custom Metadata",
        "External System Integrations",
        "VS Code",
      ]),
    },
  ];

  return (
    <section
      className="border-y border-border bg-surface-muted/40 px-4 py-20 sm:px-6 lg:px-8"
      id="skills"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          description="A Salesforce-centered technical foundation spanning development, automation, AI, OmniStudio, integrations, and delivery tooling."
          eyebrow="Skills"
          title="Practical skills for complex Salesforce implementation work."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <SkillGroup
              key={group.title}
              skills={group.skills}
              title={group.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
