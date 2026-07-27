# Round Colour Designs — Implementation Tracker

## Status legend
- [x] Complete
- [~] In progress / foundation complete
- [ ] Not started

## Phase 1 — Reusable foundation
- [x] Migrate project to Astro.
- [x] Add Tailwind CSS 4 through the Vite plugin.
- [x] Create central brand, colour, spacing and typography tokens.
- [x] Create reusable BaseLayout, Header, Footer and WhatsApp icon components.
- [x] Expose and persist a temporary front-end typography switcher.
- [x] Add Editorial, Boutique and Modern Studio font themes.
- [x] Migrate all approved page copy into reusable Astro sections.

## Phase 2 — Component library
- [x] Build Button variants and remove one-off action markup.
- [x] Build SectionHeading, PageHero, ProjectCard, ServiceCard, FounderCard and Testimonial components.
- [x] Add controlled light, warm and dark section themes.
- [x] Create responsive mobile navigation with focus management.
- [x] Document component patterns through typed props and implementation usage.

## Phase 3 — Structured content
- [x] Create Astro content collections for projects, services, testimonials, FAQs and journal posts.
- [x] Add Zod validation and editorial fields.
- [x] Move flagship placeholder projects into the project collection.
- [x] Create individual project case-study routes.
- [x] Create indexable project-category routes alongside client-side portfolio filters.

## Phase 4 — Complete page migration
- [x] Rebuild About page from the approved prototype copy.
- [x] Rebuild Services page with deep links and service clusters.
- [x] Rebuild Projects page with filters and category navigation.
- [x] Rebuild Contact page with WhatsApp-first enquiry flow.
- [x] Rebuild Privacy page.
- [x] Add Service Areas and Design Journal foundations.

## Phase 5 — SEO, AEO and discoverability
- [x] Create reusable SEO component with canonical, Open Graph and Twitter metadata.
- [x] Add LocalBusiness / InteriorDesignService structured data.
- [x] Add Person, Service, FAQPage, BreadcrumbList and CreativeWork schema where appropriate.
- [x] Generate sitemap automatically and verify robots.txt.
- [x] Keep llms.txt aligned with public pages and services.
- [x] Add answer-first summaries and contextual FAQ blocks.

## Phase 6 — Visual production
- [ ] Replace stock founder photographs with the recreated real photoshoot.
- [ ] Replace stock project visuals and placeholder data with genuine completed projects.
- [ ] Prepare responsive image sizes and meaningful final alt text.
- [ ] Finalise the typography theme and remove or hide the public switcher before launch.

## Phase 7 — Quality and launch
- [ ] Accessibility review: keyboard, contrast, focus, headings and landmarks.
- [ ] Responsive review across common mobile and desktop sizes.
- [ ] Lighthouse performance and SEO review.
- [ ] Connect analytics and Search Console.
- [ ] Configure production domain, hosting and deployment.
- [ ] Verify calls, WhatsApp links and conversion events.

## Typography themes
1. Editorial: Cormorant Garamond + Manrope — default.
2. Boutique: DM Serif Display + DM Sans.
3. Modern Studio: Instrument Serif + Instrument Sans.

The front-end switcher remains visible during internal review and stores the selection in the visitor's browser. Remove `FontSwitcher` from `BaseLayout.astro` before public launch, or gate it behind an environment variable.

## Deployment
- [x] Add Netlify configuration for static Astro builds.
- [ ] Connect production domain and verify DNS.
- [ ] Replace temporary Netlify URL in metadata if required.
- [ ] Run final Lighthouse and link checks after real content replacement.
