# MASTER PROMPT — Coconut Water Product Site

> Single source of truth for the project. Every design and code decision must trace back to this document. We iterate on this file first, then build.
>
> Status: **v0.1 — draft, under discussion**

---

## 1. Project in one sentence

An immersive, bar-styled, single-page presentation website for a premium coconut water brand, built to make a marketing influencer say *"I want to work with this product"* within the first 10 seconds of scrolling.

## 2. Product

- **Product:** Premium coconut water.
- **Brand name:** **NIU**. No logo yet — we design a **wordmark** as part of the brandbook step.
- **Packshot (canonical product visual, photo received):** four 200 ml amber glass bottles on a black steel bar counter, cream label — "BOTANICAL TONIC / NIU / [botanical illustration] / flavor / 200 ml / NATURAL INGREDIENTS". Four flavors with color-coded caps and label accents:
  - **Original** — green cap, black botanical print
  - **Yuzu** — blue cap, blue print
  - **Hibiscus** — red-orange cap, red print
  - **Wild Berry** — purple cap, purple print
  - Scene: dark bar, mirrored **disco ball**, deep **red neon glow** in the background haze. All imagery, video and 3D must match this packshot.
- **Flavor color system:** each flavor's cap color becomes a section accent on the site (galleries, menu cards, liquid tints in transitions).
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

- **Palette (draft, calibrated to the packshot; locked in the brandbook step):**
  - Near-black backgrounds: deep espresso / charcoal `#0E0B08`–`#14100C`
  - Amber glass glow: `#E8A34D` / `#8A4B1E` (bottle glass, rim light)
  - Cream label: `#F4EDE3` (typography, label surfaces)
  - Deep red neon: `#C4272E` (background haze accent, from the packshot)
  - Disco-ball silver: cool glints `#D9DCE1` (particles, highlights — sparingly)
  - Flavor accents: green / blue / red / purple from the caps (one per flavor section)
- **Light:** everything lit like bottles on a backbar shelf — rim lights, soft glows, condensation highlights. Darkness is a feature, not an absence.
- **Materials:** glass, liquid, ice, brushed brass, coconut husk texture, wet stone bar top.
- **Typography (draft):** a characterful display serif for headlines (bar-sign energy) + a clean grotesque for body text. Exact pairing chosen in the brandbook step.
- **Mood keywords:** speakeasy, golden hour after dark, condensation, slow pour, neon-less warmth, tropical noir.

## 6. Motion & 3D language

Motion is the main storyteller. Rules:

- **Feel:** liquid. Everything eases like water settling — no snappy bounces, no linear moves. Long, smooth, expensive-feeling transitions.
- **Scroll:** smooth/inertial scrolling (Lenis). The page is one continuous scene; sections flow into each other, no hard cuts.
- **Hero: scroll-scrubbed AI video (primary technique).** A Kling AI video is exported as a frame sequence; scrolling scrubs through the frames (Apple AirPods-page technique), so the camera in the video moves exactly as fast as the user scrolls. The video's final frame is designed to become the next section's background — that's the seamless block transition. Copy blocks pin and fade over the footage.
- **Three.js layer (secondary):** disco-ball light particles, cursor-reactive glints and liquid-distortion hover effects composited over/between video sections; optionally a 3D NIU bottle in later sections.
- **Signature moments (at least 3 "wow" beats):**
  1. Hero: camera pushes through the night bar toward the four bottles, disco ball spinning, red neon breathing.
  2. Transition: camera dives *into* the amber glass — liquid fills the screen and becomes the next section's background.
  3. Gallery: bar-shelf carousel — bottles slide along a backbar, flavor cap colors tinting the light.

### Scroll-scrubbed hero video — how it must be shot (rules for generation)

1. **One continuous take, no cuts** — a cut reads as a glitch when scrubbed.
2. **Constant camera speed** — scroll maps linearly to time; speed ramps feel broken under user control.
3. **No motion blur / flicker** — every frame is a still the user can park on.
4. **Handoff frames:** first frame ≈ hero art, last frame ≈ next section's background. We design these endpoints first, then generate the motion between them (Kling first-frame + last-frame mode).
5. **No burned-in text** — headlines are live HTML on top.
6. **Label caution:** AI video warps printed text; keep label motion slow, avoid extreme label close-ups mid-move, and be ready to patch the label in post on hero frames.

Implementation: 10 s clip → ~200–240 frames → AVIF/WebP sequence drawn to `<canvas>`, scrubbed by GSAP ScrollTrigger with Lenis; `<video currentTime>` fallback; static poster + fade for `prefers-reduced-motion` and weak devices.

### Kling AI prompts (v1)

**Video 1 — HERO PUSH-IN** (image-to-video; start frame = the NIU packshot photo; 10 s, Professional mode; camera: slow push-in):

> Ultra-smooth cinematic dolly shot in a dark night bar. Four amber glass bottles of NIU botanical tonic stand in a row on a black steel bar counter. The camera pushes in slowly toward the bottles at a perfectly constant speed, one single continuous take. Behind them a mirrored disco ball rotates very slowly, scattering tiny silver glints across the scene; a deep red neon glow breathes gently in the background haze. Fine condensation droplets on the amber glass catch the warm light. The bottle labels stay perfectly sharp, rigid and undistorted. Photorealistic, shallow depth of field, moody speakeasy atmosphere, ultra slow motion, locked stable camera, no cuts.

> **Negative prompt:** warped text, distorted labels, changing letters, extra bottles, duplicated objects, hands, people, faces, camera shake, flicker, jump cut, cross-fade, morphing, cartoon, oversaturated

**Video 2 — DIVE INTO THE LIQUID** (transition hero → About; start frame = close-up crop of one bottle from Video 1's last frame):

> One continuous macro camera move: the camera glides slowly forward into the amber glass of a NIU bottle until the frame is completely filled with glowing amber liquid. Inside the liquid: slow swirling currents, tiny rising micro-bubbles, warm rays of light and faint red neon refractions dancing through the water. Constant camera speed, hypnotic and calm, one single take with no cuts. The clip ends on an abstract full-frame liquid texture, softly lit, seamless. Photorealistic macro, ultra slow motion, high detail.

> **Negative prompt:** cuts, scene change, camera shake, flicker, morphing objects, text, hands, people, cartoon, noise artifacts

**Video 3 (optional) — FLAVOR LIQUID LOOPS** (backgrounds for the four flavor blocks; text-to-video, seamless-loop feel):

> Abstract full-frame liquid background: slowly swirling translucent liquid tinted deep {green | blue | red | purple}, lit from behind with warm bar light, micro-bubbles drifting upward, gentle constant motion, dark edges fading to near-black, photorealistic macro, ultra slow motion, seamless calm loop, no cuts, no text.
- **Micro-interactions:** magnetic buttons, hover ripples (liquid distortion), cursor with a subtle glow like a candle.
- **Performance guardrails:** 60fps target on mid-range laptop; reduced-motion fallback (static art + fades) honoring `prefers-reduced-motion`; mobile gets lighter effects, not a broken desktop scene.

## 7. Page structure (single page, scroll-driven)

1. **Hero** — NIU wordmark, one-line hook, scroll-scrubbed bar video (Video 1 → Video 2), scroll cue. Instant atmosphere.
2. **About the product** — the story: from palm to bar counter. Scroll-driven narrative, text revealing in sync with the 3D scene.
3. **Characteristics** — nutrition/purity facts served as a *bar menu*: stat cards styled like menu entries, counters animating in.
4. **Gallery** — product & serve shots (placeholders first), backbar-shelf horizontal scroll.
5. **Moodboard** — the brand's visual world: textures, colors, references laid out as a curated wall.
6. **Lookbook** — product in scenes/hands/serves; editorial layout, large images, slow parallax.
7. **Brandbook** — logo, palette, type, do/don't — presented beautifully, proving the brand is collab-ready.
8. **Last call (outro)** — closing brand statement, NIU wordmark sign-off. **No contact form / no contacts** (owner's decision).

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

## 10. Decisions log & open questions

**Decided:**
- [x] Brand name: **NIU**; no logo yet → wordmark designed in the brandbook step.
- [x] Hero centerpiece: the amber **bottles** (per packshot), scroll-scrubbed video technique.
- [x] No contacts / no contact form on the site.

**Open:**
- [ ] Label says "BOTANICAL TONIC" while the product brief says coconut water — confirm the category wording to use on the site (e.g. "coconut water botanical tonic"?).
- [ ] Which flavor leads the hero close-up (suggest Original)?
