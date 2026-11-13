import { cn } from "@/src/lib/utils";

/* SVG wave divider between sections — Salesforce.com brand style */
export function WaveDivider({
  fill = "currentColor",
  className = "text-surface-muted/40",
  flip = false,
}: {
  fill?: string;
  className?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none -my-px overflow-hidden leading-none", className)}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg
        className="h-8 w-full sm:h-12"
        preserveAspectRatio="none"
        viewBox="0 0 1440 56"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
