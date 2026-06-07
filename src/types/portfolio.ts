export interface PortfolioData {
  profile: Profile;
  skills: Skills;
  certifications: Certification[];
  projects: Project[];
  leadership: LeadershipItem[];
  hackathons: Hackathon[];
  contact: Contact;
}

export interface Profile {
  name: string;
  currentRole: string;
  location: string;
  experience: string;
  summary: string;
  coreStrengths: string[];
  domains: string[];
  education: Education;
  interests: string[];
}

export interface Education {
  degree: string;
  institution: string;
}

export interface Skills {
  salesforce: string[];
  development: string[];
  omniStudio: string[];
  automation: string[];
  integrations: string[];
  ai: string[];
  tools: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  category: "Administration" | "Developer" | "Consultant" | "AI";
  description: string;
}

export interface Project {
  id: string;
  name: string;
  role: string;
  client?: string;
  domain: string;
  overview: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  features?: string[];
  links?: Link[];
}

export interface Link {
  label: string;
  url: string;
}

export interface LeadershipItem {
  title: string;
  organization?: string;
  description: string;
  impact: string[];
  focusAreas?: string[];
}

export interface Hackathon {
  name: string;
  years: string[];
  description: string;
  outcomes: string[];
  notes?: string;
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  trailhead: string;
  availability: string;
}
