# NIU — Botanical Tonic

Immersive single-page presentation site for NIU, a coconut-water botanical tonic.
Night-bar art direction, scroll-scrubbed AI-generated hero video, liquid transitions.

See [`MASTER_PROMPT.md`](./MASTER_PROMPT.md) — the single source of truth for concept,
art direction, video generation prompts and build order.

## Stack

Next.js (App Router) · Tailwind CSS 4 · GSAP ScrollTrigger · Lenis smooth scroll.
Deploy target: Vercel.

## Run

```bash
npm install
npm run dev
```

## How the hero works

`public/hero/` holds 242 WebP frames cut from two Kling AI clips (bar push-in →
dive into the liquid). `components/HeroScrub.tsx` draws them to a canvas, frame
index driven by scroll progress across a 500vh pinned section. The final frame
matches `public/img/liquid-wall.webp`, which is the About section's background —
that's the seamless handoff. Source clips and full-res stills live in `assets-src/`.
