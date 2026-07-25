import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/src/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-foreground shadow-lg shadow-accent/20 hover:bg-accent-strong",
  secondary:
    "border border-border bg-surface text-foreground hover:border-accent/50 hover:bg-surface-muted",
  ghost: "text-muted-foreground hover:bg-surface-muted hover:text-foreground",
};

export function Button({
  href,
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const shouldUseAnchor = isExternal || Boolean(props.download);

  const classes = cn(
    "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    variants[variant],
    className,
  );

  if (shouldUseAnchor) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...props}>
      {children}
    </Link>
  );
}
