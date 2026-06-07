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
        "inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-accent-strong",
        className,
      )}
      href={href}
      rel="noreferrer"
      target="_blank"
      {...props}
    >
      {children}
      <span aria-hidden="true">-&gt;</span>
    </a>
  );
}
