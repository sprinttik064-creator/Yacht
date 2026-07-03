# MASTER PROMPT — Coconut Water Product Site

> Single source of truth for the project. Every design and code decision must trace back to this document. We iterate on this file first, then build.
>
> Status: **v0.1 — draft, under discussion**

---

## 1. Project in one sentence

An immersive, bar-styled, single-page presentation website for a premium coconut water brand, built to make a marketing influencer say *"I want to work with this product"* within the first 10 seconds of scrolling.

## 2. Product

- **Product:** Premium coconut water.
- **Working brand name:** `COCOBAR` — *placeholder, to be replaced when the real name is decided.*
- **Positioning angle:** coconut water reimagined as a bar-grade ingredient — the heart of mocktails and cocktails, not a gym drink. "From the palm straight to the bar counter."
- **Key product claims (placeholders, owner will refine):**
  - 100% pure, never from concentrate
  - Naturally isotonic, zero added sugar
  - Single-origin coconuts, cold-filled
  - Designed for mixology: balanced sweetness, clean finish

## 3. Audience & goal

- **Primary viewer:** a marketing influencer evaluating the brand for collaboration.
- **Goal:** impress and intrigue → they reach the contact/collab block and get in touch.
- **Implication for design:** the site itself must feel like a piece of content worth sharing — cinematic, screenshot-able, "how did they do that" moments. Every section should look good in an Instagram story capture.

## 4. Language & tone of voice

- **Language:** English only.
- **Tone:** confident, playful, slightly noir. Short punchy lines, bar-menu vocabulary ("served chilled", "on the rocks", "last call"). No corporate filler.

## 5. Art direction — "Night bar, tropical soul"

The scene: a dim upscale bar after midnight. Dark wood, smoke, warm backlight through glass — and in the center, coconut water glowing like the cleanest thing in the room.

- **Palette (draft, to be locked in the brandbook step):**
  - Near-black backgrounds: deep espresso / charcoal `#0E0B08`–`#14100C`
  - Warm amber backlight: `#E8A34D` / `#C97B2D` (bar lamps, rim light)
  - Coconut cream / off-white: `#F4EDE3` (typography, flesh of the coconut)
  - Fresh accent: muted palm green `#3E5C42` (used sparingly)
- **Light:** everything lit like bottles on a backbar shelf — rim lights, soft glows, condensation highlights. Darkness is a feature, not an absence.
- **Materials:** glass, liquid, ice, brushed brass, coconut husk texture, wet stone bar top.
- **Typography (draft):** a characterful display serif for headlines (bar-sign energy) + a clean grotesque for body text. Exact pairing chosen in the brandbook step.
- **Mood keywords:** speakeasy, golden hour after dark, condensation, slow pour, neon-less warmth, tropical noir.

## 6. Motion & 3D language

Motion is the main storyteller. Rules:

- **Feel:** liquid. Everything eases like water settling — no snappy bounces, no linear moves. Long, smooth, expensive-feeling transitions.
- **Scroll:** smooth/inertial scrolling (Lenis). The page is one continuous scene; sections flow into each other, no hard cuts.
- **Hero 3D:** a real-time 3D coconut (cracked open) / bottle centerpiece in Three.js — slowly rotating, reacting subtly to cursor, with caustics-like light play. On scroll it travels through the page or hands off between sections.
- **Signature moments (at least 3 "wow" beats):**
  1. Hero: liquid pour / splash that settles into the product reveal.
  2. Transition: camera dives *into* the glass — liquid fills the screen and becomes the next section's background.
  3. Gallery: bar-shelf carousel — items slide like bottles along a backbar, with light following them.
- **Micro-interactions:** magnetic buttons, hover ripples (liquid distortion), cursor with a subtle glow like a candle.
- **Performance guardrails:** 60fps target on mid-range laptop; reduced-motion fallback (static art + fades) honoring `prefers-reduced-motion`; mobile gets lighter effects, not a broken desktop scene.

## 7. Page structure (single page, scroll-driven)

1. **Hero** — brand name, one-line hook, 3D centerpiece, scroll cue. Instant atmosphere.
2. **About the product** — the story: from palm to bar counter. Scroll-driven narrative, text revealing in sync with the 3D scene.
3. **Characteristics** — nutrition/purity facts served as a *bar menu*: stat cards styled like menu entries, counters animating in.
4. **Gallery** — product & serve shots (placeholders first), backbar-shelf horizontal scroll.
5. **Moodboard** — the brand's visual world: textures, colors, references laid out as a curated wall.
6. **Lookbook** — product in scenes/hands/serves; editorial layout, large images, slow parallax.
7. **Brandbook** — logo, palette, type, do/don't — presented beautifully, proving the brand is collab-ready.
8. **Contact / Collab CTA** — "Last call": short pitch for collaboration + contact link/form.

Content note: owner supplies copy and imagery block-by-block as we build; until then, every section ships with well-crafted placeholders so the design is always reviewable.

## 8. Tech stack

- **Framework:** Next.js (App Router) + React — deployed on **Vercel**.
- **3D:** Three.js via React Three Fiber + drei.
- **Animation:** GSAP + ScrollTrigger for scroll choreography; Framer Motion for UI-level transitions; Lenis for smooth scroll.
- **Styling:** Tailwind CSS + CSS custom properties for the brand tokens.
- **Assets:** placeholder 3D (procedural/simple GLB) and generated placeholder imagery until real assets arrive.

## 9. Build order (each step reviewed before the next)

1. ✅ This master prompt — agree on it.
2. Moodboard + visual direction page (colors, type, textures, references) → lock the art direction.
3. Project scaffold on Next.js + smooth scroll + section skeleton, deployed to Vercel early (preview URL from day one).
4. Hero with 3D centerpiece and first signature transition.
5. Remaining sections one by one, owner drops in real content as it's ready.
6. Brandbook & lookbook sections, polish pass (micro-interactions, loading sequence, SEO/OG images).

## 10. Open questions for the owner

- [ ] Real brand name (currently `COCOBAR` placeholder)?
- [ ] Does a logo exist, or do we design a wordmark as part of the brandbook?
- [ ] Product form factor for the 3D hero: bottle, can, or the coconut itself?
- [ ] Contact method for the CTA: email, Instagram DM link, or a form?
