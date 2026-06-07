import { ProjectsSection } from "@/src/components/sections/ProjectsSection";
import { getProjects } from "@/src/lib/portfolio";
import { createMetadata, itemListJsonLd } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "Salesforce project experience across telecommunications, insurance, financial services, and AI-powered customer service.",
  path: "/projects",
});

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            itemListJsonLd({
              name: "Salesforce Projects",
              items: projects.map((project) => project.name),
            }),
          ),
        }}
        type="application/ld+json"
      />
      <ProjectsSection headingLevel="h1" projects={projects} />
    </>
  );
}
