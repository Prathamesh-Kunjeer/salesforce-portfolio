import { CertificationsSection } from "@/src/components/sections/CertificationsSection";
import {
  getCertifications,
  getCertificationsByCategory,
} from "@/src/lib/portfolio";
import { createMetadata, itemListJsonLd } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Certifications",
  description:
    "Salesforce certifications across administration, app building, development, JavaScript, Service Cloud, OmniStudio, and Agentforce.",
  path: "/certifications",
});

export default function CertificationsPage() {
  const certifications = getCertifications();
  const groupedCertifications = getCertificationsByCategory();

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            itemListJsonLd({
              name: "Salesforce Certifications",
              items: certifications.map((certification) => certification.name),
            }),
          ),
        }}
        type="application/ld+json"
      />
      <CertificationsSection
        groupedCertifications={groupedCertifications}
        headingLevel="h1"
      />
    </>
  );
}
