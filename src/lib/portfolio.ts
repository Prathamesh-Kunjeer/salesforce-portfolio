import portfolio from "@/src/data/portfolio.json";
import type {
  Certification,
  Contact,
  PortfolioData,
  Project,
} from "@/src/types/portfolio";

const portfolioData = portfolio as PortfolioData;

export function getPortfolioData(): PortfolioData {
  return portfolioData;
}

export function getFeaturedProjects(limit = 3): Project[] {
  return portfolioData.projects.slice(0, limit);
}

export function getProjects(): Project[] {
  return portfolioData.projects;
}

export function getCertifications(): Certification[] {
  return portfolioData.certifications;
}

export function getCertificationsByCategory() {
  return portfolioData.certifications.reduce<Record<string, Certification[]>>(
    (groups, certification) => {
      groups[certification.category] = groups[certification.category] ?? [];
      groups[certification.category].push(certification);
      return groups;
    },
    {},
  );
}

export function getProjectsByDomain(domain: string): Project[] {
  return portfolioData.projects.filter((project) => project.domain === domain);
}

export function getContactLinks(): Contact {
  return portfolioData.contact;
}

export function getProjectDomains(): string[] {
  return Array.from(
    new Set(portfolioData.projects.map((project) => project.domain)),
  );
}

export function getProjectTechnologies(): string[] {
  return Array.from(
    new Set(portfolioData.projects.flatMap((project) => project.technologies)),
  ).sort((a, b) => a.localeCompare(b));
}
