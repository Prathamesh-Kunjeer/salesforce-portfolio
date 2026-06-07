export interface AppRoute {
  label: string;
  href: string;
  description: string;
}

export const routes: AppRoute[] = [
  {
    label: "Home",
    href: "/",
    description: "Portfolio overview",
  },
  {
    label: "Projects",
    href: "/projects",
    description: "Salesforce delivery experience",
  },
  {
    label: "Certifications",
    href: "/certifications",
    description: "Salesforce credentials",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Availability and contact links",
  },
];
