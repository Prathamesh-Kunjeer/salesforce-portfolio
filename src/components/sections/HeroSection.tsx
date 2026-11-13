import { ContactLinks } from "@/src/components/portfolio/ContactLinks";
import { ProfileSummary } from "@/src/components/portfolio/ProfileSummary";
import { ResumeDownloadButton } from "@/src/components/portfolio/ResumeDownloadButton";
import { Button } from "@/src/components/ui/Button";
import type { Contact, Profile } from "@/src/types/portfolio";

export function HeroSection({
  profile,
  contact,
  certificationCount,
}: {
  profile: Profile;
  contact: Contact;
  certificationCount: number;
}) {
  const domains = profile.domains
    .filter((domain) =>
      ["Telecommunications", "Insurance", "Financial Services"].includes(
        domain,
      ),
    )
    .join(" / ");
  const specializedExpertise =
    profile.coreStrengths.find((strength) => strength.includes("LLMs")) ??
    "Agentforce & OmniStudio";

  const kpis = [
    {
      label: "Experience",
      value: profile.experience,
      featured: false,
    },
    {
      label: "Salesforce Certifications",
      value: `${certificationCount} Certifications`,
      featured: true,
    },
    {
      label: "Domain Experience",
      value: domains,
      featured: false,
    },
    {
      label: "Specialized Expertise",
      value: specializedExpertise,
      featured: true,
    },
  ];

  const credibility = [
    `${certificationCount} Salesforce Certifications`,
    "Agentforce Specialist",
    "OmniStudio Consultant",
    "Telecom Domain",
    "Insurance Domain",
    "Financial Services Domain",
  ];

  return (
    <section className="relative overflow-hidden border-b border-border bg-hero">
      {/* Original network overlay */}
      <div className="hero-network" aria-hidden="true" />

      {/* Salesforce animated cloud silhouettes — soft ambient atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Cloud 1 — large, top-right */}
        <svg
          className="cloud-1 absolute -right-16 -top-8 h-72 w-72 fill-accent opacity-[0.035]"
          viewBox="0 0 200 130"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M160,90 C160,90 175,90 175,75 C175,61 163,55 150,58 C148,42 135,30 118,30 C102,30 90,40 87,54 C83,52 78,51 73,51 C58,51 46,63 46,78 C46,78 46,90 60,90 Z" />
        </svg>
        {/* Cloud 2 — medium, mid-right */}
        <svg
          className="cloud-2 absolute right-8 top-32 h-48 w-48 fill-accent opacity-[0.025]"
          viewBox="0 0 200 130"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M160,90 C160,90 175,90 175,75 C175,61 163,55 150,58 C148,42 135,30 118,30 C102,30 90,40 87,54 C83,52 78,51 73,51 C58,51 46,63 46,78 C46,78 46,90 60,90 Z" />
        </svg>
        {/* Cloud 3 — small accent, Agentforce violet tint */}
        <svg
          className="cloud-3 absolute -right-4 top-16 h-36 w-36 fill-[#818cf8] opacity-[0.045]"
          viewBox="0 0 200 130"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M160,90 C160,90 175,90 175,75 C175,61 163,55 150,58 C148,42 135,30 118,30 C102,30 90,40 87,54 C83,52 78,51 73,51 C58,51 46,63 46,78 C46,78 46,90 60,90 Z" />
        </svg>
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
        <div className="max-w-4xl">
          <p className="animate-hero-pill mb-5 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent shadow-sm shadow-accent/10">
            {profile.currentRole}
          </p>
          <h1 className="animate-hero-heading max-w-3xl text-4xl font-semibold tracking-normal text-foreground sm:text-6xl">
            {profile.name}
          </h1>
          <div className="animate-hero-kpis mt-6 grid gap-3 sm:grid-cols-2">
            {kpis.map((kpi) => (
              <div
                className={
                  kpi.featured
                    ? "animate-kpi-card rounded-lg border border-accent/35 bg-accent/10 p-4 shadow-xl shadow-accent/10 ring-1 ring-accent/10"
                    : "animate-kpi-card rounded-lg border border-border/80 bg-surface/90 p-4 shadow-lg shadow-black/[0.04] ring-1 ring-white/40 dark:shadow-black/20 dark:ring-white/5"
                }
                key={kpi.label}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {kpi.label}
                </p>
                <p className="mt-2 text-lg font-semibold leading-snug text-foreground">
                  {kpi.value}
                </p>
              </div>
            ))}
          </div>
          <p className="animate-hero-summary mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            {profile.summary}
          </p>
          <div className="animate-hero-ctas mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ResumeDownloadButton />
            <Button href="/projects" variant="secondary">
              View projects
            </Button>
            <Button href={contact.linkedin} variant="ghost">
              LinkedIn
            </Button>
          </div>
        </div>
        <div className="animate-hero-side lg:pt-6">
          <ProfileSummary
            certificationCount={certificationCount}
            profile={profile}
          />
          <div className="mt-6">
            <ContactLinks compact contact={contact} />
          </div>
        </div>
      </div>
      <div className="animate-hero-credibility relative border-t border-border/70 bg-surface/65 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-4 py-4 sm:px-6 lg:px-8">
          {credibility.map((item) => (
            <span
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/75 px-3 py-1.5 text-xs font-semibold text-muted-foreground shadow-sm"
              key={item}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
