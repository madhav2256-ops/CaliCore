# CALICORE ACADEMY — Complete Context & Design System Document
Last Updated: 2026-06-14
Source: Scraping database, Instagram grid info, Google Business, and Visual branding analysis of CaliCore Academy

---

## 1. BUSINESS IDENTITY
* **Brand Name:** CaliCore Academy (also stylized as "CALICORE" or "Cali Core")
* **Hero Tagline:** "Where Strength Is Built. Where Discipline Is Forged. Where Champions Rise."
* **Core Philosophy:** Laxmi Nagar's premier machine-free calisthenics, gymnastics, and MMA training academy. A skill-based, community-focused environment where athletes learn to master their own bodyweight.
* **Launch Date:** April 1st, 2026 (Launch Promo: "Special offer for 1st 50 members — 15% OFF")
* **Google Business Profile Description:** 
  > "CaliCore Academy is one of the best calisthenics and fitness training centers in Laxmi Nagar, Delhi. We specialize in calisthenics, gymnastics training, MMA training, yoga classes, weight training, bodyweight training, and self-defense. Our academy offers professional coaching for beginners to advanced athletes, helping you build strength, lose fat, improve flexibility, and achieve overall fitness naturally. We provide structured programs for calisthenics, MMA, yoga, and functional fitness without relying on heavy machines. Join CaliCore Academy today."

---

## 2. BRAND COLOR PALETTE & STYLING TOKENS
To ensure premium visual aesthetics, all styling must conform to the brand visual theme below:

### Brand Color Tokens
* **Background Primary (`--color-bg-primary`):** `#090909` — Gritty industrial matte black/dark background.
* **Background Surface (`--color-bg-surface`):** `#121212` — Obsidian surface for container cards, headers, and grids.
* **Background Elevated (`--color-bg-elevated`):** `#1C1C1C` — Elevated background for hover states and cards.
* **Accent Primary (`--color-accent`):** `#FF5722` — Fiery Orange-Red (representing the fire engulfed C in the logo and the signature wall mural).
* **Accent Secondary (`--color-accent-gold`):** `#FFB300` — Gold/Amber (logo crest border and highlight tone).
* **Accent Neon Blue (`--color-neon-blue`):** `#00D2FF` — Blue neon (matching the blue custom neon "CALICORE" signage in the gym).
* **Accent Neon White (`--color-neon-white`):** `#FFFFFF` — White neon glow highlight.
* **Text Primary (`--color-text-primary`):** `#F5F5F5` — Soft off-white for primary readability.
* **Text Secondary (`--color-text-secondary`):** `#A5A5A5` — Steel grey for secondary paragraphs and subtitles.
* **Text Muted (`--color-text-muted`):** `#606060` — Dark steel grey for footer credits, disabled state, and subtle borders.
* **Border (`--color-border`):** `rgba(255, 255, 255, 0.08)` — Grid lines and separator borders.
* **Border Accent (`--color-border-accent`):** `rgba(255, 87, 34, 0.3)` — Highlighting borders.

### Typography (clamp)
* **Font Family:** 'Geist Variable', system-ui, sans-serif
* **Scale:**
  * Hero Text: `clamp(1.75rem, 7vw, 7rem)`
  * H1 (Main Page Headers): `clamp(1.5rem, 4.5vw, 4.5rem)`
  * H2 (Section Titles): `clamp(1.2rem, 3vw, 2.75rem)`
  * H3 (Card Headers): `clamp(1rem, 1.8vw, 1.75rem)`
  * Body Text: `clamp(0.875rem, 1.1vw, 1rem)`
  * Subtext: `clamp(0.75rem, 0.9vw, 0.875rem)`

---

## 3. CONTACT & LOCATION DATA
* **Address:** F215, Near Bal Bhavan School, Mangal Bazar, Block F, Laxmi Nagar, Delhi – 110092
* **Phone/WhatsApp:** `+91 80762 41590` (listed as `080762 41590` on Google)
* **Google Maps Link:** `https://maps.google.com/?q=CALICORE+Academy+Laxmi+Nagar` (directions: `maps.app.goo.gl/iU3XBP6M5CY19hN69`)
* **Coordinates:** `~28.6357271, 77.2797573`
* **Social Handle:** Instagram [@calicore1](https://www.instagram.com/calicore1/)
* **Official Email:** `info@calicore.in` / `support@calicore.in`
* **Operating Hours:**
  * Monday – Saturday: `06:00 – 11:00` & `16:00 – 22:00`
  * Sunday: `CLOSED`

---

## 4. PROGRAMS & DISCIPLINES
The website must feature these specific classes and programs:
1. **Calisthenics & Body Weight Training** — Fundamental bodyweight strength and progressions.
2. **Advanced Skills ("Advance")** — Advanced calisthenics, bar skills, and gymnastics holds (Planche, Human Flag, Front Lever).
3. **Gymnastics Training** — Flips, handstands, tumbling workshops (e.g. Backflip Workshop highlights).
4. **Kids Power & Kids Gymnastics** — Specialized youth training programs, drills, and kid-focused gymnastics competitions.
5. **MMA & Boxing** — Boxing, Mixed Martial Arts, combat conditioning, and self-defense.
6. **Yoga Classes** — Core mobility, flexibility, breathing, and body awareness.
7. **Female Batch** — Dedicated coaching sessions for women's fitness, strength, and mobility.
8. **Core Strength & Endurance** — Targeted high-intensity sessions focusing on core reinforcement and metabolic conditioning.

---

## 5. COMMUNITY REVIEW SNIPPETS (Google 5.0★, 46 reviews)
* *"Amazing experience and quality service"* — 5★
* *"It's a nice place for both beginners and advanced athletes."* — 5★
* *"The environment is very motivating and beginner-friendly."* — 5★

---

## 6. WEBSITE STRUCTURE & CODE REQUIREMENTS
* `src/pages/Home.tsx` — Hero entrance with fire/steel visuals, custom neon headings, program list, testimonial slider, and promotional CTA.
* `src/pages/About.tsx` — Story of CaliCore, the concrete-and-bar industrial facility look, and professional coaches profile.
* `src/pages/Classes.tsx` — Searchable grid of the 8 core programs.
* `src/pages/Schedule.tsx` — Split schedule system showing timings (Morning 6–11 AM, Evening 4–10 PM).
* `src/pages/Blog.tsx` — Training tips (e.g. "Delhi's New Home for Strength & Skills", "Backflip Progression Guides", "Core Sessions").
* `src/pages/Contact.tsx` — Laxmi Nagar interactive map embed, working hours, and WhatsApp inquiry buttons.

---

## 7. CODE AND VISUAL GUIDELINES
* **Visual Theme:** Gritty industrial gym interior. Dark concrete textures, neon glow elements (blue and white neon text effects), and fiery gradients (`linear-gradient(to right, #FF5722, #FFB300)`).
* **Code Implementation:** No hardcoded layout sizing; use modern fluid spacing `--section-py` and `--gap-md`. Every image must utilize `<LazyImage>` to ensure speed performance. All dynamic entries must use custom Framer Motion variants.
