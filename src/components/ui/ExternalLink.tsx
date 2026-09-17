import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/src/lib/utils";

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

export function ExternalLink({
  href,
  children,
  className,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      className={cn(
        "group inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition duration-200 hover:text-accent-strong",
        className,
      )}
      href={href}
      rel="noreferrer"
      target="_blank"
      {...props}
    >
      {children}
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}
