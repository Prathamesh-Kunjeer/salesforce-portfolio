import { AboutSection } from "@/src/components/sections/AboutSection";
import { AgentforceSection } from "@/src/components/sections/AgentforceSection";
import { CertificationsSection } from "@/src/components/sections/CertificationsSection";
import { ContactSection } from "@/src/components/sections/ContactSection";
import { HeroSection } from "@/src/components/sections/HeroSection";
import { LeadershipSection } from "@/src/components/sections/LeadershipSection";
import { ProjectsSection } from "@/src/components/sections/ProjectsSection";
import { SkillsSection } from "@/src/components/sections/SkillsSection";
import { CertTicker } from "@/src/components/portfolio/CertTicker";
import { WaveDivider } from "@/src/components/ui/WaveDivider";
import { getFeaturedProjects, getPortfolioData } from "@/src/lib/portfolio";
import { createMetadata, personJsonLd } from "@/src/lib/seo";

export const metadata = createMetadata();

export default function Home() {
  const portfolio = getPortfolioData();
  const featuredProjects = getFeaturedProjects();
  const agentforceProject = portfolio.projects.find(
    (project) => project.id === "ai-customer-service-agent",
  );

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd()),
        }}
        type="application/ld+json"
      />
      <HeroSection
        certificationCount={portfolio.certifications.length}
        contact={portfolio.contact}
        profile={portfolio.profile}
      />
      <CertTicker certifications={portfolio.certifications} />
      <AboutSection profile={portfolio.profile} />
      <SkillsSection skills={portfolio.skills} />
      <ProjectsSection featured projects={featuredProjects} />
      <WaveDivider className="text-surface-muted/40" />
      <AgentforceSection
        project={agentforceProject}
        skills={portfolio.skills}
      />
      <CertificationsSection
        certifications={portfolio.certifications}
        featured
      />
      <LeadershipSection leadership={portfolio.leadership} />
      <WaveDivider className="text-surface-muted/30" flip />
      <ContactSection contact={portfolio.contact} profile={portfolio.profile} />
    </>
  );
}
