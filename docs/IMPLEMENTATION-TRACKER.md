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
- [x] Expose a temporary front-end typography switcher.
- [x] Persist the selected typography locally in the browser.
- [x] Add Editorial, Boutique and Modern Studio font themes.
- [~] Migrate all existing page copy into reusable Astro sections.

## Phase 2 — Component library
- [ ] Build Button variants and remove remaining one-off action markup.
- [ ] Build SectionHeading, PageHero, ProjectCard, ServiceCard, FounderCard and Testimonial components.
- [ ] Add controlled light, warm and dark section themes.
- [ ] Create responsive mobile navigation with focus management.
- [ ] Document component props and usage examples.

## Phase 3 — Structured content
- [ ] Create Astro content collections for projects, services, testimonials, FAQs and journal posts.
- [ ] Add Zod validation and editorial fields.
- [ ] Move flagship placeholder projects into the project collection.
- [ ] Create project-category and individual case-study routes.

## Phase 4 — Complete page migration
- [ ] Rebuild About page from the approved prototype copy.
- [ ] Rebuild Services page with deep links and service clusters.
- [ ] Rebuild Projects page with filters and category navigation.
- [ ] Rebuild Contact page with WhatsApp-first enquiry flow.
- [ ] Rebuild Privacy page.
- [ ] Add future Service Areas and Design Journal pages.

## Phase 5 — SEO, AEO and discoverability
- [ ] Create reusable SEO component with canonical, Open Graph and Twitter metadata.
- [ ] Add LocalBusiness / InteriorDesignService structured data.
- [ ] Add Person, Service, FAQPage, BreadcrumbList and Article schema where appropriate.
- [ ] Generate sitemap automatically and verify robots.txt.
- [ ] Keep llms.txt aligned with public pages and services.
- [ ] Add answer-first summaries and contextual FAQ blocks.

## Phase 6 — Visual production
- [ ] Replace stock founder photographs with the recreated real photoshoot.
- [ ] Replace stock project visuals with genuine completed projects.
- [ ] Prepare responsive image sizes and meaningful alt text.
- [ ] Finalise the chosen typography theme and remove or hide the public switcher before launch.

## Phase 7 — Quality and launch
- [ ] Accessibility review: keyboard, contrast, focus, headings and landmarks.
- [ ] Responsive review across common mobile and desktop sizes.
- [ ] Lighthouse performance and SEO review.
- [ ] Connect analytics and Search Console.
- [ ] Configure production domain, hosting and deployment.
- [ ] Verify calls, WhatsApp links and conversion events.

## Typography themes
1. **Editorial:** Cormorant Garamond + Manrope — current recommended default.
2. **Boutique:** DM Serif Display + DM Sans — warmer and more approachable.
3. **Modern Studio:** Instrument Serif + Instrument Sans — contemporary and design-led.

The switcher is deliberately exposed in the bottom-left corner during internal review. The selected choice is stored only in the visitor's browser. Remove the FontSwitcher component from `BaseLayout.astro` before public launch, or gate it behind an environment variable.


## Deployment

- [x] Add Netlify configuration for static Astro builds
- [ ] Connect production domain and verify DNS
- [ ] Replace temporary Netlify URL in preview metadata only if required
- [ ] Run final Lighthouse and link checks after full page migration
