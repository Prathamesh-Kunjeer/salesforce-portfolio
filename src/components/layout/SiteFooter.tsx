import { ContactLinks } from "@/src/components/portfolio/ContactLinks";
import type { Contact, Profile } from "@/src/types/portfolio";

export function SiteFooter({
  profile,
  contact,
}: {
  profile: Profile;
  contact: Contact;
}) {
  return (
    <footer className="border-t border-border bg-surface-muted/40">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-foreground">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {profile.currentRole} - {profile.location}
          </p>
        </div>
        <ContactLinks compact contact={contact} />
      </div>
    </footer>
  );
}
