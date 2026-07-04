# MASTER PROMPT — Coconut Water Product Site

> Single source of truth for the project. Every design and code decision must trace back to this document. We iterate on this file first, then build.
>
> Status: **v0.1 — draft, under discussion**

---

## 1. Project in one sentence

An immersive, bar-styled, single-page presentation website for **NIU — the premium coconut mixer**, built to make **Flo Hugel** say *"I want this on my tables"* within the first 10 seconds of scrolling.

## 2. Product (per briefing, July 2026)

- **Product:** premium coconut water **mixer** for the club / bottle-service channel. Base: coconut water, **no added sugar**, added electrolytes (magnesium, dosed sodium; potassium naturally ~500 mg). **No caffeine, no taurine — the anti-energy-drink.**
- **Range:** **Pure / Lime / Piña / Ginger Yuzu.** Launch still; Ginger Yuzu is the candidate for a lightly sparkling edition.
- **Packaging:** 200 ml amber glass, UHT (12 months unrefrigerated), aluminum screw cap, **cap color = flavor**. 200 ml is the premium-mixer format (Fever-Tree playbook); 250 ml deliberately avoided (Red Bull format).
- **Category positioning:** competes only with cranberry/orange juice on the bottle-service table — creates a new category. Distribution via Flo's DJ residencies in top clubs worldwide.
- **Business model (context for tone, NOT published on the site):** club buys ~€1.80/bottle, sells at €9–12 in bottle service; Y1 seeding ≈ €200k, Y3 with retail ≈ €2.4m conservative. Deal terms/legal/trademark are out of scope until Flo is on board.
- **Brand name:** **NIU** (Hawaiian for coconut; working title — COCO HUGEL is the wildcard alternative). No logo yet — we design a **wordmark** as part of the brandbook step.
- **Packshot v1 (received):** four 200 ml amber glass bottles on a black steel bar counter, cream label, colored caps; dark bar, mirrored **disco ball**, deep **red neon glow**. Scene and style are LOCKED — but v1 labels read "BOTANICAL TONIC" and flavors Original/Yuzu/Hibiscus/Wild Berry, which predate the briefing. **⚠️ Renders need a v2 pass** with category "COCONUT MIXER" and the real range.
- **Flavor color system (v2, per briefing — cap color = flavor):**
  - **Pure** — ivory/cream cap (the clean base)
  - **Lime** — green cap
  - **Piña** — golden-yellow cap
  - **Ginger Yuzu** — blue cap (candidate for lightly sparkling edition)
  - Each cap color becomes a section accent on the site (menu cards, liquid tints, hover glows).
- **Midjourney prompt v2 for the packshot re-render:**
  > Photorealistic product photograph in a dark upscale night club bar: four identical 200 ml amber glass bottles standing in a row on a black steel bar counter, each with an aluminum screw cap in a different color — ivory, green, golden yellow, blue. Cream paper labels reading "COCONUT MIXER / NIU / PURE" (then LIME, PIÑA, GINGER YUZU), small botanical line illustration on each label, "200 ml" at the bottom. Behind them a mirrored disco ball and a deep red neon glow in the dark haze, condensation on the glass, warm backlight through the amber bottles, shallow depth of field, shot on medium format, moody speakeasy lighting. --ar 3:2
## 3. Audience & goal

- **Primary viewer:** **Flo Hugel** — DJ with residencies in top clubs worldwide, launching a pregame/recovery supplement program for clubs; can't touch alcohol or energy drinks (exclusivity deals). NIU is the complementary healthy premium mixer Gena pitched him.
- **Goal:** make the concept feel real and inevitable — the site is part of the pitch package (together with the deck and renders).
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
   - **Video 1 last frame: ✅ RECEIVED & APPROVED** (owner's photo: single Original bottle center-right, sharp label at camera height, warm glow through amber glass, condensation; left half near-black for the next block's headline; blurred disco ball and red neon on the right; no motion blur). Keep the original photo at full resolution — the page swaps the 1080p video frame for this photo at the scroll rest point, and the digital zoom to Video 2 runs on it.
   - **Continuity note:** in the packshot (first frame) the disco ball is on the LEFT; in the last frame it's on the RIGHT → the camera move is a push-in with a gentle LEFT arc around the bottles, drifting the disco ball across the background from left to right. This is written into the Video 1 prompt.
   - **Video 2 first frame:** a tight crop of the approved last-frame photo — lower third of the bottle where the amber glass glows brightest. Crop at the video's aspect ratio (16:9) — Kling endpoint frames must match the output aspect.
   - **Video 2 last frame: ✅ RECEIVED & APPROVED** (owner's image: abstract amber liquid wall, warm glow in the upper center, micro-bubbles, faint red refraction on the right, edges fading to near-black; no recognizable objects). Keep the uncropped original at full resolution — it becomes the About section's static background; the site adds a subtle dark overlay under text for readability. For Kling, crop both endpoints to 16:9 (keep the bright glow in the upper third).
   - **Endpoint sourcing:** prefer REAL photos for both endpoints (same bar, real bottles) and let Kling generate only the motion between them — this nearly eliminates label warping. Fallback: generate the last frame as an image (prompt kept with the video prompts).
   - **V1→V2 stitch:** no hard cut — a scroll-driven digital zoom on V1's last frame (canvas scale) lands exactly on V2's first frame (a tighter crop of the same glass).
5. **No burned-in text** — headlines are live HTML on top.
6. **Label caution:** AI video warps printed text; keep label motion slow, avoid extreme label close-ups mid-move, and be ready to patch the label in post on hero frames.

**Durations:** Videos 1 & 2 — **10 s each** (the max; duration = frame budget for scrubbing, and slower camera motion warps labels less). Video 3 loops — **5 s** is enough (they autoplay, not scrubbed). If Kling offers 60 fps export or frame interpolation, take it for Videos 1–2 — more frames = smoother scrub.

Implementation: 10 s clip → ~200–240 frames → AVIF/WebP sequence drawn to `<canvas>`, scrubbed by GSAP ScrollTrigger with Lenis (hero scene mapped to ~3–4 viewport heights of scroll); `<video currentTime>` fallback; static poster + fade for `prefers-reduced-motion` and weak devices.

### Kling AI prompts (v1)

**Video 1 — HERO PUSH-IN** (image-to-video; start frame = the NIU packshot photo; 10 s, Professional mode; camera: slow push-in):

> Ultra-smooth cinematic dolly shot in a dark night bar. Four amber glass bottles of NIU botanical tonic stand in a row on a black steel bar counter. The camera pushes in slowly toward the bottles and arcs gently to the left around them at a perfectly constant speed, one single continuous take, so the mirrored disco ball drifts smoothly across the background from left to right until it settles behind the right side of the Original bottle. The disco ball rotates very slowly, scattering tiny silver glints across the scene; a deep red neon glow breathes gently in the background haze. Fine condensation droplets on the amber glass catch the warm light. The bottle labels stay perfectly sharp, rigid and undistorted. Photorealistic, shallow depth of field, moody speakeasy atmosphere, ultra slow motion, stable camera, no cuts.

> Mode: image-to-video with BOTH endpoints — first frame = four-bottle packshot photo, last frame = approved single-bottle photo.

> **Negative prompt:** warped text, distorted labels, changing letters, extra bottles, duplicated objects, hands, people, faces, camera shake, flicker, jump cut, cross-fade, morphing, cartoon, oversaturated

**Video 2 — DIVE INTO THE LIQUID** (transition hero → About; start frame = close-up crop of one bottle from Video 1's last frame):

> One continuous macro camera move: the camera glides slowly forward into the amber glass of a NIU bottle until the frame is completely filled with glowing amber liquid. Inside the liquid: slow swirling currents, tiny rising micro-bubbles, warm rays of light and faint red neon refractions dancing through the water. Constant camera speed, hypnotic and calm, one single take with no cuts. The clip ends on an abstract full-frame liquid texture, softly lit, seamless. Photorealistic macro, ultra slow motion, high detail.

> **Negative prompt:** cuts, scene change, camera shake, flicker, morphing objects, text, hands, people, cartoon, noise artifacts

> Mode: image-to-video with BOTH endpoints — first frame = 16:9 crop of the approved bottle photo (lower third of the bottle), last frame = generated "liquid wall" image. 10 s.

**Video 2 — LAST FRAME as a still image** (Midjourney / Kling image mode, max resolution):

> Abstract full-frame macro texture of glowing amber liquid seen from deep inside the liquid: soft swirling currents of warm golden-amber tones, tiny suspended micro-bubbles drifting upward, gentle rays of warm light with one faint deep-red refraction hint, the edges of the frame fading smoothly into near-black darkness. Calm, low-contrast, seamless background texture with no recognizable objects — no glass, no bottle, no label, no liquid surface line, no horizon. Photorealistic macro photography, high detail, softly defocused toward the edges, no text, no people.

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
2. ✅ Hero videos generated (Kling 3.0, 2×5 s / 121 frames each, approved) and cut into 242 WebP frames (`public/hero/`, 16:9 crop removes the watermark). Source clips + full-res stills in `assets-src/`.
3. ✅ Project scaffold: Next.js + Tailwind 4 + Lenis + GSAP ScrollTrigger; scroll-scrubbed hero working end-to-end (bar → bottle → liquid → About handoff); skeleton of all 8 sections with placeholder copy. Verified in a real browser.
4. Deploy to Vercel (preview URL).
5. Moodboard/style pass with the owner: lock wordmark, fonts, textures; replace placeholder copy and imagery block by block.
6. Signature micro-interactions (magnetic buttons, liquid hover, disco-glint particles), flavor liquid loops (Video 3), polish pass (loading sequence, SEO/OG images).
- Note: Kling output is 1176×784 — if the plan allows HD/1080p export later, re-download and re-cut frames for sharper large screens (rest-point frames are already swapped for full-res stills).

## 10. Decisions log & open questions

**Decided:**
- [x] Brand name: **NIU**; no logo yet → wordmark designed in the brandbook step.
- [x] Hero centerpiece: the amber **bottles** (per packshot), scroll-scrubbed video technique.
- [x] No contacts / no contact form on the site.

**Decided by the July 2026 briefing:**
- [x] Category wording: **premium coconut mixer** (site copy switched; "botanical tonic" on v1 renders is a known mismatch until the v2 render pass).
- [x] Range: Pure / Lime / Piña / Ginger Yuzu.

**Open:**
- [ ] Regenerate packshot + hero videos with v2 labels (COCONUT MIXER, new flavors) — or keep v1 visuals for the Flo pitch and re-shoot after his yes?
- [x] Competitive scan done → `COMPETITIVE_SCAN.md` (category open; Vita Coco = closing window; Bervera ≠ Berczy).
- [x] Pitch deck built as `/deck` route — 10 snap-scroll slides in the site's art direction (gap → thesis → product → bottle → range → category → model → why Flo → close). Unlisted (noindex), shares the Vercel deploy.
- [ ] Concept paper still not received — needed to refine naming options and model details on slides 07/10.
- [ ] Name lock: NIU vs alternatives (COCO HUGEL wildcard) — affects wordmark step.
