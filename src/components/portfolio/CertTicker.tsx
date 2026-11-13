import type { Certification } from "@/src/types/portfolio";

/* Infinite marquee strip of certification names */
export function CertTicker({
  certifications,
}: {
  certifications: Certification[];
}) {
  const renderBadges = (trackId: string) => (
    <div className="flex shrink-0 items-center gap-4 pr-4">
      {certifications.map((cert) => (
        <span
          key={`${cert.name}-${trackId}`}
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-accent/25 bg-surface/90 px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-sm transition hover:border-accent hover:text-accent"
        >
          {/* Category color dot */}
          <span
            className={`h-2 w-2 shrink-0 rounded-full ${
              cert.category === "AI"
                ? "bg-violet-500 shadow-sm shadow-violet-500/50"
                : cert.category === "Developer"
                  ? "bg-sky-500 shadow-sm shadow-sky-500/50"
                  : cert.category === "Consultant"
                    ? "bg-teal-500 shadow-sm shadow-teal-500/50"
                    : "bg-amber-500 shadow-sm shadow-amber-500/50"
            }`}
          />
          {cert.name}
        </span>
      ))}
    </div>
  );

  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden border-y border-accent/20 bg-accent/5 py-3 backdrop-blur"
    >
      {/* Fade masks left + right */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

      {/* Marquee track: width: max-content with 2 identical tracks */}
      <div
        className="animate-cert-ticker flex w-max"
        style={{
          width: "max-content",
          display: "flex",
          animation: "cert-ticker 24s linear infinite",
          willChange: "transform",
        }}
      >
        {renderBadges("track-1")}
        {renderBadges("track-2")}
      </div>
    </div>
  );
}
