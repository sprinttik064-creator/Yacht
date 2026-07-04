import HeroScrub from "@/components/HeroScrub";
import Reveal from "@/components/Reveal";

const FLAVORS = [
  { name: "Pure", color: "var(--color-flavor-pure)", note: "The clean base. Coconut water, electrolytes, nothing to hide." },
  { name: "Lime", color: "var(--color-flavor-lime)", note: "Cuts through the dark like a squeeze of lime over ice." },
  { name: "Piña", color: "var(--color-flavor-pina)", note: "The piña colada's sober older brother." },
  { name: "Ginger Yuzu", color: "var(--color-flavor-gingeryuzu)", note: "Heat and citrus. Candidate for the lightly sparkling edition." },
] as const;

const MENU = [
  { item: "Base", detail: "pure coconut water, no added sugar" },
  { item: "Electrolytes", detail: "magnesium + dosed sodium, added" },
  { item: "Potassium", detail: "~500 mg, naturally occurring" },
  { item: "Caffeine & taurine", detail: "none — the anti-energy-drink" },
  { item: "Bottle", detail: "200 ml amber glass, aluminum cap" },
  { item: "Keeps", detail: "12 months, no fridge required (UHT)" },
  { item: "Best served", detail: "over ice, after midnight" },
] as const;

export default function Home() {
  return (
    <main>
      <HeroScrub />
      <About />
      <Category />
      <Menu />
      <Flavors />
      <Gallery />
      <Moodboard />
      <Lookbook />
      <Brandbook />
      <LastCall />
    </main>
  );
}

/* Sits directly after the scrub — its background IS the last video frame,
   so the handoff from canvas to section is invisible. */
function About() {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url(/img/liquid-wall.webp)" }}
    >
      <div className="absolute inset-0 bg-espresso/55" />
      <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-32">
        <Reveal>
          <p className="mb-6 text-xs tracking-[0.5em] text-amber uppercase">About</p>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            From the palm straight to the bottle-service table.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/85">
            NIU is coconut water that skipped the gym bag and went out instead.
            No added sugar, real electrolytes, zero caffeine — a mixer that
            takes care of the night while the night takes its course. Bottled
            in 200 ml amber glass, built to stand next to the ice bucket, not
            on a shelf of sports drinks.
          </p>
          <p className="mt-4 max-w-xl text-sm text-cream/50 italic">
            [Placeholder copy — final text to be refined together.]
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* The thesis: the bottle-service table has an empty fourth slot. */
function Category() {
  const slots = ["Cranberry", "Orange", "Soda"];
  return (
    <section className="bg-espresso">
      <div className="mx-auto max-w-4xl px-6 py-32 text-center">
        <Reveal>
          <p className="mb-6 text-xs tracking-[0.5em] text-amber uppercase">The gap</p>
          <h2 className="font-display text-3xl leading-tight md:text-5xl">
            Every table in every club pours the same three mixers.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            {slots.map((s) => (
              <span
                key={s}
                className="rounded-full border border-cream/15 px-6 py-3 text-sm tracking-widest text-cream/50 uppercase"
              >
                {s}
              </span>
            ))}
            <span className="rounded-full border border-amber bg-amber/10 px-6 py-3 text-sm tracking-widest text-amber uppercase">
              NIU
            </span>
          </div>
        </Reveal>
        <Reveal delay={250}>
          <p className="mx-auto mt-12 max-w-xl text-lg leading-relaxed text-cream/75">
            No alcohol. No caffeine. No conflicts. NIU opens the fourth slot on
            the bottle-service table — and owns a category nobody else has
            claimed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Menu() {
  return (
    <section className="relative bg-espresso">
      <div className="mx-auto max-w-2xl px-6 py-32">
        <Reveal>
          <p className="mb-2 text-center text-xs tracking-[0.5em] text-amber uppercase">
            Characteristics
          </p>
          <h2 className="font-display mb-16 text-center text-4xl md:text-5xl">
            The Menu
          </h2>
        </Reveal>
        <div className="space-y-6">
          {MENU.map((row, i) => (
            <Reveal key={row.item} delay={i * 80}>
              <div className="flex items-end text-lg">
                <span className="text-cream">{row.item}</span>
                <span className="menu-leader" />
                <span className="text-right text-cream/60">{row.detail}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <p className="mt-16 text-center text-xs tracking-[0.3em] text-cream/40 uppercase">
            Nutrition facts to follow — placeholder
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Flavors() {
  return (
    <section className="bg-espresso-2">
      <div className="mx-auto max-w-6xl px-6 py-32">
        <Reveal>
          <p className="mb-2 text-xs tracking-[0.5em] text-amber uppercase">The lineup</p>
          <h2 className="font-display mb-16 text-4xl md:text-5xl">Four ways after dark</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FLAVORS.map((f, i) => (
            <Reveal key={f.name} delay={i * 100}>
              <div className="group relative overflow-hidden rounded-lg border border-cream/10 bg-espresso p-8 transition-transform duration-500 hover:-translate-y-2">
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: f.color }}
                />
                <div
                  className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full opacity-20 blur-3xl transition-opacity duration-700 group-hover:opacity-50"
                  style={{ background: f.color }}
                />
                <p className="text-xs tracking-[0.4em] text-cream/50 uppercase">NIU</p>
                <h3 className="font-display mt-2 text-2xl" style={{ color: f.color }}>
                  {f.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-cream/70">{f.note}</p>
                <p className="mt-6 text-xs text-cream/40">200 ml · coconut mixer</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const shots = [
    { src: "/img/packshot.webp", alt: "The NIU lineup on the bar" },
    { src: "/img/bottle-original.webp", alt: "NIU Original close-up" },
    { src: "/img/liquid-wall.webp", alt: "Inside the pour" },
  ];
  return (
    <section className="bg-espresso">
      <div className="px-6 py-32">
        <Reveal className="mx-auto max-w-6xl">
          <p className="mb-2 text-xs tracking-[0.5em] text-amber uppercase">Gallery</p>
          <h2 className="font-display mb-16 text-4xl md:text-5xl">On the backbar</h2>
        </Reveal>
        <div className="flex gap-6 overflow-x-auto pb-6 [scrollbar-width:thin]">
          {shots.map((s) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              className="h-[60vh] w-auto shrink-0 rounded-lg object-cover"
            />
          ))}
          <div className="flex h-[60vh] w-[40vw] shrink-0 items-center justify-center rounded-lg border border-dashed border-cream/20 text-sm text-cream/40">
            More shots coming — placeholder
          </div>
        </div>
      </div>
    </section>
  );
}

function Moodboard() {
  const swatches = [
    { hex: "#0E0B08", name: "After hours" },
    { hex: "#E8A34D", name: "Amber glass" },
    { hex: "#F4EDE3", name: "Cream label" },
    { hex: "#C4272E", name: "Red neon" },
    { hex: "#D9DCE1", name: "Disco silver" },
  ];
  return (
    <section className="bg-espresso-2">
      <div className="mx-auto max-w-6xl px-6 py-32">
        <Reveal>
          <p className="mb-2 text-xs tracking-[0.5em] text-amber uppercase">Moodboard</p>
          <h2 className="font-display mb-16 text-4xl md:text-5xl">The world of NIU</h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Reveal className="col-span-2 row-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/packshot.webp" alt="NIU bar scene" className="h-full w-full rounded-lg object-cover" />
          </Reveal>
          {swatches.map((s, i) => (
            <Reveal key={s.hex} delay={i * 60}>
              <div
                className="flex h-40 flex-col justify-end rounded-lg p-4"
                style={{ background: s.hex }}
              >
                <p className={`text-xs tracking-widest uppercase ${s.hex === "#F4EDE3" || s.hex === "#D9DCE1" ? "text-espresso" : "text-cream/80"}`}>
                  {s.name}
                </p>
                <p className={`text-[10px] ${s.hex === "#F4EDE3" || s.hex === "#D9DCE1" ? "text-espresso/60" : "text-cream/50"}`}>
                  {s.hex}
                </p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={300}>
            <div className="flex h-40 items-center justify-center rounded-lg border border-dashed border-cream/20 p-4 text-center text-xs text-cream/40">
              Textures & references — to be curated together
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Lookbook() {
  return (
    <section className="bg-espresso">
      <div className="mx-auto max-w-5xl px-6 py-32">
        <Reveal>
          <p className="mb-2 text-xs tracking-[0.5em] text-amber uppercase">Lookbook</p>
          <h2 className="font-display mb-16 text-4xl md:text-5xl">Scenes from the night</h2>
        </Reveal>
        <div className="space-y-24">
          <Reveal>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/bottle-original.webp" alt="NIU Original under the red neon" className="w-full rounded-lg" />
              <figcaption className="mt-4 text-sm text-cream/50 italic">
                Original, under the red neon. — editorial captions are placeholders
              </figcaption>
            </figure>
          </Reveal>
          <Reveal>
            <div className="flex h-[50vh] items-center justify-center rounded-lg border border-dashed border-cream/20 text-sm text-cream/40">
              Serve shots, hands, cocktails — imagery to be added block by block
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Brandbook() {
  return (
    <section className="bg-espresso-2">
      <div className="mx-auto max-w-4xl px-6 py-32">
        <Reveal>
          <p className="mb-2 text-xs tracking-[0.5em] text-amber uppercase">Brandbook</p>
          <h2 className="font-display mb-16 text-4xl md:text-5xl">Built collab-ready</h2>
        </Reveal>
        <Reveal>
          <div className="rounded-lg border border-cream/10 bg-espresso p-12 text-center">
            <p className="text-xs tracking-[0.4em] text-cream/40 uppercase">Wordmark</p>
            <p className="font-display mt-4 text-8xl tracking-tight">NIU</p>
            <p className="mt-4 text-xs text-cream/40">
              Wordmark study in progress — final cut designed in the brandbook step
            </p>
          </div>
        </Reveal>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Reveal delay={100}>
            <div className="h-full rounded-lg border border-cream/10 bg-espresso p-8">
              <p className="mb-4 text-xs tracking-[0.4em] text-cream/40 uppercase">Typography</p>
              <p className="font-display text-2xl">Display: bar-sign energy</p>
              <p className="mt-2 text-cream/70">Body: clean grotesque — pairing to be locked</p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="h-full rounded-lg border border-cream/10 bg-espresso p-8">
              <p className="mb-4 text-xs tracking-[0.4em] text-cream/40 uppercase">Usage</p>
              <p className="text-cream/70">
                Do: darkness, warm light, glass. <br />
                Don&apos;t: daylight, plastic, gym vibes.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function LastCall() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-espresso">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/15 blur-[120px]" />
      <div className="relative text-center">
        <Reveal>
          <p className="mb-6 text-xs tracking-[0.5em] text-amber uppercase">Last call</p>
          <p className="font-display text-[clamp(4rem,14vw,12rem)] leading-none">NIU</p>
          <p className="mt-6 text-sm tracking-widest text-cream/60 uppercase">
            Served chilled. After midnight.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
