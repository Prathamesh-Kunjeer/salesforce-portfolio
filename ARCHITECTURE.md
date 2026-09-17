# Portfolio Website Architecture

## Goal

Build a scalable professional Salesforce Developer portfolio website using the existing typed data model:

- `src/data/portfolio.json`
- `src/types/portfolio.ts`

The website should keep content separate from React rendering logic. Portfolio updates should primarily happen in `portfolio.json`, while React components remain reusable, typed, and presentation-focused.

## Current Data Model

The portfolio data is organized into these top-level sections:

- `profile`
- `skills`
- `certifications`
- `projects`
- `leadership`
- `hackathons`
- `contact`

The TypeScript contract is defined by `PortfolioData` in `src/types/portfolio.ts`.

## Proposed Folder Structure

```text
src/
  app/
    page.tsx
    projects/
      page.tsx
    certifications/
      page.tsx
    contact/
      page.tsx
    layout.tsx
    globals.css

  components/
    layout/
      SiteHeader.tsx
      SiteFooter.tsx
      SiteShell.tsx
      MobileNavigation.tsx

    sections/
      HeroSection.tsx
      AboutSection.tsx
      SkillsSection.tsx
      CertificationsSection.tsx
      ProjectsSection.tsx
      LeadershipSection.tsx
      LinkedInContentSection.tsx
      PhotographySection.tsx
      ContactSection.tsx

    ui/
      Badge.tsx
      Button.tsx
      Card.tsx
      SectionHeader.tsx
      Stat.tsx
      TagList.tsx
      Timeline.tsx
      ExternalLink.tsx

    portfolio/
      ProjectCard.tsx
      CertificationCard.tsx
      SkillGroup.tsx
      LeadershipCard.tsx
      ContactLinks.tsx
      ProfileSummary.tsx

  data/
    portfolio.json

  hooks/
    useActiveSection.ts
    useTheme.ts
    useProjectFilters.ts

  lib/
    portfolio.ts
    seo.ts
    routes.ts
    utils.ts

  types/
    portfolio.ts
```

## Routing Structure

```text
/                 Main portfolio landing page
/projects         Full projects and case-study overview
/certifications   Full certification list grouped by category
/contact          Contact and availability page
```

### `/`

The home page should present a complete high-level portfolio narrative:

1. Hero
2. About
3. Skills
4. Featured Projects
5. Certifications
6. Leadership
7. LinkedIn Content
8. Photography
9. Contact

### `/projects`

The projects route should show all projects from `portfolio.projects`.

Recommended features:

- Project cards using `ProjectCard`
- Domain filters
- Technology filters
- Detailed responsibility, achievement, feature, and link rendering

### `/certifications`

The certifications route should show all certifications from `portfolio.certifications`.

Recommended features:

- Group by `category`
- Reuse `CertificationCard`
- Surface Salesforce credibility clearly

### `/contact`

The contact route should use `portfolio.contact` and relevant `profile` data.

Recommended features:

- Email, phone, LinkedIn, GitHub, Trailhead
- Availability statement
- Location
- Clear call-to-action buttons

## Component Hierarchy

```text
SiteShell
  SiteHeader
  main
    HomePage
      HeroSection
        ProfileSummary
        ContactLinks
      AboutSection
      SkillsSection
        SkillGroup
        TagList
      CertificationsSection
        CertificationCard
      ProjectsSection
        ProjectCard
        TagList
      LeadershipSection
        LeadershipCard
      LinkedInContentSection
      PhotographySection
      ContactSection
        ContactLinks
  SiteFooter
```

Dedicated routes should reuse the same lower-level components:

```text
ProjectsPage
  ProjectsSection
    ProjectCard
    TagList

CertificationsPage
  CertificationsSection
    CertificationCard

ContactPage
  ContactSection
    ContactLinks
```

## Reusable Components

### Layout Components

- `SiteShell`: Wraps the app with shared page structure.
- `SiteHeader`: Primary navigation, theme toggle, and mobile menu trigger.
- `SiteFooter`: Reuses contact links and copyright/profile information.
- `MobileNavigation`: Responsive navigation for small screens.

### UI Components

- `Button`: Reusable actions such as email, LinkedIn, GitHub, resume, and project links.
- `Card`: Base card surface for projects, certifications, leadership, and content blocks.
- `Badge`: Small label for domains, categories, and certification types.
- `TagList`: Renders arrays such as technologies, skills, features, and focus areas.
- `SectionHeader`: Consistent section eyebrow, title, and description pattern.
- `ExternalLink`: Standard external-link behavior, accessibility labels, and target handling.
- `Timeline`: Optional reusable structure for experience, milestones, or leadership entries.

### Portfolio Components

- `ProjectCard`: Renders one `Project`.
- `CertificationCard`: Renders one `Certification`.
- `SkillGroup`: Renders one skill category from `Skills`.
- `LeadershipCard`: Renders one `LeadershipItem`.
- `ContactLinks`: Renders contact methods from `Contact`.
- `ProfileSummary`: Renders key profile details.

## Data Ownership

### Data From `portfolio.json`

These should come directly from `src/data/portfolio.json`:

- Name, role, location, experience, summary
- Core strengths
- Domains
- Education
- Interests
- Skill categories and skill names
- Certifications
- Projects
- Project responsibilities, achievements, technologies, features, and links
- Leadership entries
- LinkedIn content details from the leadership/content entry
- Photography interests from `profile.interests`
- Hackathon entries
- Contact links and availability

### Data That Can Live In Code

These can be code-owned because they are site behavior or presentation metadata:

- Route definitions
- Navigation labels
- Section ordering
- SEO templates
- Theme tokens
- Icon mappings
- Display limits, such as featured project count
- Filter configuration

## Data Access Layer

Create `src/lib/portfolio.ts` when implementing the UI.

Recommended responsibilities:

- Import `portfolio.json`
- Cast or validate it as `PortfolioData`
- Export helpers such as:
  - `getPortfolioData()`
  - `getFeaturedProjects()`
  - `getProjectsByDomain(domain)`
  - `getCertificationsByCategory()`
  - `getContactLinks()`

This keeps pages and components clean. Components should receive typed props instead of importing raw JSON everywhere.

## Hooks

Hooks should only be introduced when there is client-side behavior.

Recommended hooks:

- `useTheme`: Only needed if the site supports a manual light/dark toggle.
- `useActiveSection`: Highlights the current section in navigation while scrolling.
- `useProjectFilters`: Handles project filtering on `/projects`.

Avoid hooks for static data. Static portfolio data should be loaded through `src/lib/portfolio.ts`.

## SEO Strategy

Use Next.js App Router metadata for every route.

Recommended metadata:

- Home:
  - Title: `Praathamesh Kunjjeerr | Salesforce Developer`
  - Description focused on Salesforce, Agentforce, OmniStudio, Apex, Service Cloud, and CRM automation.
- Projects:
  - Title focused on Salesforce project experience.
  - Description mentioning Telecom, Insurance, Financial Services, and Agentforce.
- Certifications:
  - Title focused on Salesforce certifications.
  - Description mentioning Administrator, Platform Developer I, Service Cloud, OmniStudio, and Agentforce.
- Contact:
  - Title focused on hiring or consulting contact.
  - Description with availability and location.

Recommended structured data:

- `Person`
- `ProfilePage`
- `WebSite`
- `ItemList` for projects and certifications

Recommended SEO files:

- `src/lib/seo.ts` for shared metadata helpers
- `app/sitemap.ts`
- `app/robots.ts`

Social sharing:

- Add Open Graph metadata for each route.
- Use a professional preview image in `public/`.
- Keep title and description specific to Salesforce Developer positioning.

## Mobile Responsiveness Strategy

Use a mobile-first layout.

Recommended approach:

- Stack sections vertically on small screens.
- Use responsive grids for skills, projects, certifications, and leadership:
  - 1 column on mobile
  - 2 columns on tablet
  - 3 columns where content density supports it
- Keep navigation compact with a mobile menu.
- Ensure CTA buttons wrap cleanly.
- Avoid fixed-height text containers for dynamic JSON content.
- Keep cards equal-width but not necessarily equal-height unless visual consistency requires it.
- Use responsive spacing tokens instead of one-off margins.

## Dark Mode Strategy

Use CSS variables in `globals.css` for theme tokens.

Recommended tokens:

- `--background`
- `--foreground`
- `--surface`
- `--surface-muted`
- `--border`
- `--accent`
- `--accent-foreground`
- `--muted`
- `--muted-foreground`

Default strategy:

- Support system preference with `prefers-color-scheme`.
- Add a manual toggle only if desired.
- If a manual toggle is added, store the preference in `localStorage` and expose it through `useTheme`.

Dark mode should not require alternate React components. Components should consume semantic CSS variables only.

## Implementation Principles

- Keep UI components reusable and data-agnostic.
- Keep portfolio content in `portfolio.json`.
- Keep type definitions in `portfolio.ts`.
- Keep route-level pages focused on composition.
- Avoid hardcoding project, certification, skill, or contact content in React.
- Prefer typed props over direct JSON access inside deeply nested components.
- Reuse the same cards and sections across home and dedicated routes.
- Add new portfolio content by editing JSON first, then update TypeScript only if the schema genuinely changes.

## Future Update Workflow

For content-only updates:

1. Edit `src/data/portfolio.json`.
2. Keep the existing object structure.
3. Run TypeScript and JSON validation.
4. No React changes should be required.

For new content types:

1. Extend `src/types/portfolio.ts`.
2. Add the new data to `src/data/portfolio.json`.
3. Add or update reusable components only if the new data needs a new presentation pattern.

For new routes:

1. Add a route under `src/app`.
2. Reuse existing section and portfolio components.
3. Add route metadata through the shared SEO helper.
4. Add the route to `src/lib/routes.ts`.
