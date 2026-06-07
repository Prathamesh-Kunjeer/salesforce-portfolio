import { Button } from "@/src/components/ui/Button";
import { ExternalLink } from "@/src/components/ui/ExternalLink";
import type { Contact } from "@/src/types/portfolio";

export function ContactLinks({
  contact,
  compact = false,
}: {
  contact: Contact;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <div className="flex flex-wrap gap-4">
        <ExternalLink href={contact.linkedin}>LinkedIn</ExternalLink>
        <ExternalLink href={contact.github}>GitHub</ExternalLink>
        <ExternalLink href={contact.trailhead}>Trailhead</ExternalLink>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Button href={`mailto:${contact.email}`}>Email</Button>
      <Button href={contact.linkedin} variant="secondary">
        LinkedIn
      </Button>
      <Button href={contact.github} variant="secondary">
        GitHub
      </Button>
      <Button href={contact.trailhead} variant="ghost">
        Trailhead
      </Button>
    </div>
  );
}
