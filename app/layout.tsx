import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteShell } from "@/src/components/layout/SiteShell";
import { ThemeProvider } from "@/src/components/theme/ThemeProvider";
import { getPortfolioData } from "@/src/lib/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const portfolio = getPortfolioData();

export const metadata: Metadata = {
  title: `${portfolio.profile.name} | Salesforce Developer`,
  description: portfolio.profile.summary,
  authors: [{ name: portfolio.profile.name }],
  keywords: [
    portfolio.profile.name,
    "Salesforce Developer",
    "Salesforce Administrator",
    "Apex",
    "Lightning Web Components",
    "OmniStudio",
    "Service Cloud",
    "Agentforce",
    "Salesforce AI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
      lang="en"
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <ThemeProvider>
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
