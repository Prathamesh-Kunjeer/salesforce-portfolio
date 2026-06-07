import { ContactLinks } from "@/src/components/portfolio/ContactLinks";
import { ResumeDownloadButton } from "@/src/components/portfolio/ResumeDownloadButton";
import { Card } from "@/src/components/ui/Card";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import type { Contact, Profile } from "@/src/types/portfolio";

export function ContactSection({
  contact,
  profile,
  headingLevel = "h2",
}: {
  contact: Contact;
  profile: Profile;
  headingLevel?: "h1" | "h2";
}) {
  return (
    <section
      className="border-t border-border bg-contact px-4 py-20 sm:px-6 lg:px-8"
      id="contact"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.75fr]">
        <SectionHeader
          description={contact.availability}
          eyebrow="Contact"
          level={headingLevel}
          title="Available for Salesforce development, consulting, AI, and cloud technology opportunities."
        />
        <Card className="grid gap-6">
          <div className="rounded-lg border border-accent/20 bg-accent/10 p-4">
            <p className="text-sm font-semibold text-foreground">
              Recruiter next step
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Download the resume for a concise experience summary, or reach out
              directly for Salesforce development, consulting, AI, and cloud
              technology opportunities.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Email</p>
            <p className="mt-1 font-semibold text-foreground">
              {contact.email}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Phone</p>
            <p className="mt-1 font-semibold text-foreground">
              {contact.phone}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Location
            </p>
            <p className="mt-1 font-semibold text-foreground">
              {profile.location}
            </p>
          </div>
          <ResumeDownloadButton />
          <ContactLinks contact={contact} />
        </Card>
      </div>
    </section>
  );
}
