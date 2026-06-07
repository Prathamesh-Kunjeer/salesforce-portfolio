import type { Metadata } from "next";
import { getPortfolioData } from "@/src/lib/portfolio";

const portfolio = getPortfolioData();

const siteName = `${portfolio.profile.name} Portfolio`;
const baseTitle = `${portfolio.profile.name} | Salesforce Developer`;
const description = `${portfolio.profile.name} is a ${portfolio.profile.currentRole} with ${portfolio.profile.experience} of experience in Salesforce, Service Cloud, OmniStudio, Agentforce, Apex, automation, and enterprise integrations.`;

export function createMetadata({
  title,
  description: routeDescription,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata {
  const pageTitle = title ? `${title} | ${portfolio.profile.name}` : baseTitle;
  const pageDescription = routeDescription ?? description;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: "website",
      siteName,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.profile.name,
    jobTitle: portfolio.profile.currentRole,
    email: portfolio.contact.email,
    telephone: portfolio.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: portfolio.profile.location,
    },
    sameAs: [
      portfolio.contact.linkedin,
      portfolio.contact.github,
      portfolio.contact.trailhead,
    ],
    knowsAbout: [
      ...portfolio.profile.coreStrengths,
      ...portfolio.skills.salesforce,
      ...portfolio.skills.ai,
    ],
  };
}

export function itemListJsonLd({
  name,
  items,
}: {
  name: string;
  items: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item,
    })),
  };
}
