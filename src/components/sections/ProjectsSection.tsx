"use client";

import { useState, useRef } from "react";
import { ProjectCard } from "@/src/components/portfolio/ProjectCard";
import { Button } from "@/src/components/ui/Button";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import type { Project } from "@/src/types/portfolio";

/* ─── Expandable group ─────────────────────────────────────────── */

function ProjectGroup({
  title,
  subtitle,
  icon,
  projects,
  detailed,
  defaultOpen = true,
  accentColor,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  projects: Project[];
  detailed: boolean;
  defaultOpen?: boolean;
  accentColor: "blue" | "violet";
}) {
  const [open, setOpen] = useState(defaultOpen);
  const bodyRef = useRef<HTMLDivElement>(null);

  const blue =
    "border-accent/30 bg-accent/5 hover:border-accent/50 hover:bg-accent/10";
  const violet =
    "border-violet-400/30 bg-violet-400/5 hover:border-violet-400/50 hover:bg-violet-400/10";
  const headerColor = accentColor === "blue" ? blue : violet;

  const badgeBlue =
    "bg-accent/15 text-accent border border-accent/25";
  const badgeViolet =
    "bg-violet-400/15 text-violet-500 border border-violet-400/25 dark:text-violet-300";
  const badgeColor = accentColor === "blue" ? badgeBlue : badgeViolet;

  const countBlue = "bg-accent text-accent-foreground";
  const countViolet =
    "bg-violet-500 text-white dark:bg-violet-400 dark:text-violet-950";
  const countColor = accentColor === "blue" ? countBlue : countViolet;

  return (
    <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
      {/* ── Header / toggle button ── */}
      <button
        aria-expanded={open}
        className={`group w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-all duration-200 ${headerColor}`}
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        <div className="flex items-center gap-4">
          {/* Icon badge */}
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg ${badgeColor}`}
          >
            {icon}
          </span>

          <div>
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-foreground">
                {title}
              </span>
              {/* Project count pill */}
              <span
                className={`inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-xs font-bold ${countColor}`}
              >
                {projects.length}
              </span>
            </div>
            <p className="mt-0.5 text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </div>

        {/* Chevron */}
        <span
          className={`shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
        >
          <svg
            fill="none"
            height="20"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="20"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      {/* ── Collapsible body ── */}
      <div
        ref={bodyRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: open ? (bodyRef.current?.scrollHeight ?? 9999) + "px" : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="grid gap-6 p-6 lg:grid-cols-2 border-t border-border/60">
          {projects.map((project) => (
            <ProjectCard detailed={detailed} key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main section ─────────────────────────────────────────────── */

export function ProjectsSection({
  projects,
  featured = false,
  headingLevel = "h2",
}: {
  projects: Project[];
  featured?: boolean;
  headingLevel?: "h1" | "h2";
}) {
  const professional = projects.filter(
    (p) => !p.category || p.category === "professional",
  );
  const personal = projects.filter((p) => p.category === "personal");

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="projects">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            description="Salesforce enterprise delivery and AI-powered solutions, alongside personal projects born from curiosity and passion."
            eyebrow="Projects"
            level={headingLevel}
            title={
              featured
                ? "Featured Salesforce project work."
                : "Salesforce project portfolio."
            }
          />
          {featured ? (
            <Button href="/projects" variant="secondary">
              Review Salesforce Projects
            </Button>
          ) : null}
        </div>

        {/* Two expandable groups */}
        <div className="mt-10 flex flex-col gap-5">
          <ProjectGroup
            accentColor="blue"
            defaultOpen={true}
            detailed={!featured}
            icon={
              <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18">
                <rect height="20" rx="2" ry="2" width="20" x="2" y="2" />
                <line x1="7" x2="7" y1="2" y2="22" />
                <line x1="2" x2="22" y1="12" y2="12" />
              </svg>
            }
            projects={professional}
            subtitle="Enterprise Salesforce delivery across Telecommunications, Insurance, Financial Services, and AI."
            title="Professional Work Experience"
          />

          <ProjectGroup
            accentColor="violet"
            defaultOpen={!featured}
            detailed={!featured}
            icon={
              <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            }
            projects={personal}
            subtitle="Side projects and experiments driven by curiosity, creativity, and passion for building."
            title="Personal Enthusiasm"
          />
        </div>
      </div>
    </section>
  );
}
