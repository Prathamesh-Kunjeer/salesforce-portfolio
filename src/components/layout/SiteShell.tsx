import type { ReactNode } from "react";
import { SiteFooter } from "@/src/components/layout/SiteFooter";
import { SiteHeader } from "@/src/components/layout/SiteHeader";
import { getPortfolioData } from "@/src/lib/portfolio";

export function SiteShell({ children }: { children: ReactNode }) {
  const portfolio = getPortfolioData();

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader name={portfolio.profile.name} />
      <main className="flex-1">{children}</main>
      <SiteFooter contact={portfolio.contact} profile={portfolio.profile} />
    </div>
  );
}
