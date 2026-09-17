import { ContactSection } from "@/src/components/sections/ContactSection";
import { getPortfolioData } from "@/src/lib/portfolio";
import { createMetadata, personJsonLd } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Praathamesh Kunjjeerr for Salesforce development, consulting, AI, and cloud technology opportunities.",
  path: "/contact",
});

export default function ContactPage() {
  const portfolio = getPortfolioData();

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd()),
        }}
        type="application/ld+json"
      />
      <ContactSection
        contact={portfolio.contact}
        headingLevel="h1"
        profile={portfolio.profile}
      />
    </>
  );
}
