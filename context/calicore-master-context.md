# CALICORE — Complete Context & Design System Document
Last Updated: 2026-06-14
Source: Brand Definition, Assets Mapping, and Code Architecture Rules for CaliCore

---

## 1. BUSINESS IDENTITY
* **Brand Name:** CaliCore — "Engineered Movement"
* **Tagline:** "Master Your Body, Control Your Mind" / "Pure Bodyweight Mastery"
* **Core Philosophy:** Machine-free training environment. Elite physical development powered purely by bodyweight, gravity, and precision mechanics.
* **Disciplines Offered:**
  1. **Gymnastics** — Precision coordination, tumbling, and adult/child skill work.
  2. **Calisthenics** — Static hold masteries (Human Flag, Planche, Front Lever) and weighted bodyweight progression.
  3. **Parkour & Freerunning** — Precision jumping, vaulting, and fluid spatial locomotion.
  4. **Yoga** — Advanced mobility, flexibility, and breathing control.
  5. **Functional Training** — Cross-training, metabolic conditioning, and compound speed-strength.
  6. **Movement Culture** — Locomotion patterns, animal flows, and mobility prep.
  7. **Mixed Martial Arts (MMA)** — Core conditioning, striking, and martial movements.
  8. **Free Weights Training** — Selective supplementary lifts for strength integration.

---

## 2. BRAND COLOR PALETTE & STYLING TOKENS
To ensure premium visual aesthetics, all styling must strictly conform to these CSS variables defined in the system.

### Color Tokens
* **Background Primary (`--color-bg-primary`):** `#090909` — Ultra-dark matte background to create high contrast.
* **Background Surface (`--color-bg-surface`):** `#111111` — Dark obsidian surface for cards and navigation bars.
* **Background Elevated (`--color-bg-elevated`):** `#1A1A1A` — Lighter charcoal shade for active states or elevated components.
* **Accent (`--color-accent`):** `#FF5722` — Kinetic Energy Orange, represents power, movement, and intensity.
* **Accent Hover (`--color-accent-hover`):** `#FF7043` — Bright highlight state for user interactions.
* **Accent Glow (`--color-accent-glow`):** `rgba(255, 87, 34, 0.15)` — Transparent tint for backlights and glow borders.
* **Text Primary (`--color-text-primary`):** `#F5F5F5` — Soft off-white to prevent eye strain while maintaining legibility.
* **Text Secondary (`--color-text-secondary`):** `#A0A0A0` — Clean mid-grey for secondary paragraphs and descriptions.
* **Text Muted (`--color-text-muted`):** `#555555` — Dark grey for captions, borders, and inactive tabs.
* **Border (`--color-border`):** `rgba(255, 255, 255, 0.08)` — Subtle container dividing borders.
* **Border Accent (`--color-border-accent`):** `rgba(255, 87, 34, 0.3)` — Accent focus borders.

### Fluid Layout & Grid System
* **Fluid Heading Typography (clamp):**
  * Hero Text: `clamp(1.75rem, 7vw, 7rem)`
  * H1 (Main Page Header): `clamp(1.5rem, 4.5vw, 4.5rem)`
  * H2 (Section Title): `clamp(1.2rem, 3vw, 2.75rem)`
  * H3 (Card Title): `clamp(1rem, 1.8vw, 1.75rem)`
  * Body text: `clamp(0.875rem, 1.1vw, 1rem)`
  * Small captions: `clamp(0.75rem, 0.9vw, 0.875rem)`
* **Section Spacing:**
  * Fluid vertical padding: `--section-py: clamp(2.5rem, 6vw, 6rem)`
  * Fluid grid gaps:
    * `--gap-sm: clamp(0.75rem, 2vw, 1.25rem)`
    * `--gap-md: clamp(1rem, 2.5vw, 2rem)`
    * `--gap-lg: clamp(1.5rem, 4vw, 4rem)`
* **Borders & Radius:**
  * Small inputs/tags: `--radius-sm (4px)`
  * Cards/Buttons: `--radius-md (8px)`
  * Interactive features/Modals: `--radius-lg (16px)` / `--radius-xl (24px)`

---

## 3. CONTACT & LOCATION DATA
* **Address:** 86, 60FT Main Road, Vishwas Nagar, Shahdara, Delhi-110032, India
* **Google Maps Embed:** `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1972.7798238042335!2d77.29279629468125!3d28.66746058228687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd3116899eb5e318a!2sPERMAFLY!5e0!3m2!1sen!2sin!4v1605437448842!5m2!1sen!2sin`
* **Google Maps Directions Route Link:** `https://maps.google.com/?daddr=PERMAFLY,Vishwas+Nagar,Shahdara,Delhi`
* **Phone Numbers:**
  * Primary: `+91 948-599-3322`
  * Landline: `+91 11 4725-3322`
* **Official Emails:**
  * General Info: `info@calicore.in`
  * Member Support: `support@calicore.in`
* **Working Hours:**
  * Monday – Saturday: `06:00 – 22:00` (Continuous batches)
  * Sunday: `CLOSED`

---

## 4. NAVIGATION & SITE MAP
The codebase must support these paths and structures:
* `src/pages/Home.tsx` — Hero entrance, key discipline cards, feature video highlights, testimonial carousels, and CTA sections.
* `src/pages/About.tsx` — History of physical training, founder profile, and team biographies.
* `src/pages/Classes.tsx` — Interactive showcase grid of all 8 movement patterns.
* `src/pages/Schedule.tsx` — Weekly timetable showing timeslots by discipline and instructor.
* `src/pages/Blog.tsx` — List of training articles, nutrition guidelines, and muscle tutorials.
* `src/pages/Contact.tsx` — Interactive map, contact information, FAQ accordion, and secure contact form.
* `src/pages/NotFound.tsx` — Custom 404 page styled with neon accent elements and automatic redirection links.

---

## 5. DESIGN SYSTEMS & ACCESSIBILITY REQUIREMENTS (RULES FOR COMMITS)
Every code contribution/modification must strictly follow these rules:

1. **Keep Colors Consistent:** Do not use plain hardcoded colors (like `#ff0000` or `red`). Always use the custom theme variables (e.g. `bg-primary`, `accent`, `text-secondary`) or equivalent utility classes.
2. **Glassmorphism Principle:** Floating menus, headers, and popups must use a semi-transparent dark background with blur effects (`backdrop-filter: blur(12px)`).
3. **Typography Standards:** Always use the display variable font (`Geist Variable` or standard system sans-serif fallback). Use correct semantic headings hierarchy: exactly one `<h1>` per page.
4. **Performance Optimization:**
   * Images must load lazily through a custom `<LazyImage />` component.
   * Native assets (like `sharp` configurations) should resize content properly.
   * Split vendor libraries (`framer-motion`, `react-router-dom`) into separate bundle chunks inside `vite.config.ts`.
5. **Interactive Feedback (WOW factor):**
   * Use micro-animations (scale, slide, rotation on hover/active states) using Framer Motion.
   * Transition between page states smoothly using `<PageTransition>` components.
6. **SEO Best Practices:**
   * Each page must declare custom meta headers (Title, Meta Description, OpenGraph tags) using `react-helmet-async`.
7. **Accessibility (a11y):**
   * Keep focus indicators visible on keyboard tab-navigation (`:focus-visible`).
   * Include a `#main-content` skip link (`skip-nav`) at the top of the header.
   * Respect reduced-motion preferences (`prefers-reduced-motion: reduce`) by disabling dynamic slide/transform behaviors.
