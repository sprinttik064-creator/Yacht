import HeroScrub from "@/components/HeroScrub";
import Reveal from "@/components/Reveal";
import { asset } from "@/lib/asset";

const FLAVORS = [
  {
    name: "Pure",
    color: "var(--color-flavor-pure)",
    cap: "ivory",
    note: "The clean base. Coconut water, electrolytes, nothing to hide.",
    serve: "NIU Pure · cracked ice · nothing else",
    image: "/img/bottle-pure.webp",  },
  {
    name: "Lime",
    color: "var(--color-flavor-lime)",
    cap: "green",
    note: "Cuts through the dark like a squeeze of lime over ice.",
    serve: "NIU Lime · crushed ice · lime wedge",
    image: "/img/bottle-lime.webp",  },
  {
    name: "Piña",
    color: "var(--color-flavor-pina)",
    cap: "golden",
    note: "Pineapple and coconut — the island side of the night.",
    serve: "NIU Piña · crushed ice · pineapple slice",
    image: "/img/bottle-pina.webp",  },
  {
    name: "Ginger Yuzu",
    color: "var(--color-flavor-gingeryuzu)",
    cap: "blue",
    note: "Heat and citrus. Candidate for the lightly sparkling edition.",
    serve: "NIU Ginger Yuzu · highball ice · yuzu zest",
    image: "/img/bottle-gingeryuzu.webp",  },
] as const;

// Per 200 ml bottle. Approximate typical values — pending lab analysis.
const NUTRITION_HERO = [
  { n: "38", unit: "kcal", label: "per bottle" },
  { n: "0", unit: "g", label: "added sugar" },
  { n: "0", unit: "mg", label: "caffeine · taurine" },
  { n: "500", unit: "mg", label: "potassium · 25% NRV" },
] as const;

const NUTRITION_ROWS = [
  { k: "Natural sugars (from the coconut)", v: "5.0 g" },
  { k: "Carbohydrates", v: "7.4 g" },
  { k: "Magnesium — added", v: "56 mg · 15% NRV" },
  { k: "Sodium — dosed", v: "120 mg" },
  { k: "Fat · protein", v: "0 g · <0.5 g" },
  { k: "Alcohol", v: "0.0%" },
] as const;

// Sugar per 100 ml, typical published values for what actually gets poured
// behind a bar. NIU carries only the coconut's own sugar.
const SUGAR = [
  { name: "Mango nectar", g: 13.0, niu: false },
  { name: "Cranberry mixer", g: 11.5, niu: false },
  { name: "Monster", g: 11.2, niu: false },
  { name: "Red Bull", g: 11.0, niu: false },
  { name: "Coca-Cola", g: 10.6, niu: false },
  { name: "Pineapple juice", g: 10.5, niu: false },
  { name: "Apple juice", g: 10.4, niu: false },
  { name: "Orange juice", g: 9.6, niu: false },
  { name: "Classic lemonade", g: 9.5, niu: false },
  { name: "Ginger beer", g: 9.2, niu: false },
  { name: "Tonic water", g: 8.8, niu: false },
  { name: "Ginger ale", g: 7.3, niu: false },
  { name: "Isotonic sport drink", g: 6.0, niu: false },
  { name: "Iced tea", g: 4.7, niu: false },
  { name: "NIU", g: 2.5, niu: true },
] as const;

export default function Home() {
  return (
    <main>
      <HeroScrub />
      <About />
      <Nutrition />
      <SugarCompare />
      <Benchmark />
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
      style={{ backgroundImage: `url(${asset("/img/liquid-wall.webp")})` }}
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

/* Nutrition facts styled as the bottle's cream label — the packaging is the chart. */
function Nutrition() {
  return (
    <section className="bg-espresso">
      <div className="mx-auto max-w-4xl px-6 py-32">
        <Reveal>
          <p className="mb-2 text-center text-xs tracking-[0.5em] text-amber uppercase">
            What&apos;s inside
          </p>
          <h2 className="font-display mb-16 text-center text-4xl md:text-5xl">
            Nothing to hide on the label
          </h2>
        </Reveal>
        <Reveal delay={120}>
          {/* the cream label card */}
          <div className="mx-auto max-w-2xl rounded-lg bg-cream px-8 py-10 text-espresso shadow-2xl md:px-12">
            <p className="text-center text-[11px] font-semibold tracking-[0.45em] uppercase">
              Coconut mixer
            </p>
            <p className="font-display mt-2 text-center text-5xl tracking-tight">NIU</p>
            <p className="mt-1 text-center text-[11px] tracking-[0.3em] text-espresso/60 uppercase">
              Nutrition · per 200 ml serve
            </p>
            <div className="mt-6 border-t-4 border-espresso" />

            {/* hero numbers */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 py-8 md:grid-cols-4">
              {NUTRITION_HERO.map((h) => (
                <div key={h.label} className="text-center">
                  <p className="font-display text-4xl leading-none">
                    {h.n}
                    <span className="ml-1 align-baseline text-base font-semibold">{h.unit}</span>
                  </p>
                  <p className="mt-2 text-[11px] tracking-[0.18em] text-espresso/60 uppercase">
                    {h.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-espresso/25" />

            {/* detail rows */}
            <div className="space-y-3 py-6">
              {NUTRITION_ROWS.map((r) => (
                <div key={r.k} className="flex items-end text-sm">
                  <span className="shrink-0">{r.k}</span>
                  <span className="mx-3 mb-1 flex-1 border-b border-dotted border-espresso/30" />
                  <span className="text-right font-semibold whitespace-nowrap">{r.v}</span>
                </div>
              ))}
            </div>
            <div className="border-t-4 border-espresso pt-4">
              <p className="text-center text-[10px] tracking-[0.2em] text-espresso/50 uppercase">
                Natural ingredients · UHT · keeps 12 months, no fridge
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-8 text-center text-xs text-cream/40">
            Approximate typical values — final figures follow lab analysis of the production recipe.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* Sugar per 100 ml vs what actually gets poured behind a bar — light section
   for maximum contrast, one thin bar per drink, NIU highlighted, values
   labeled directly. Amber #B06212 passes 3:1 on the cream surface. */
function SugarCompare() {
  const max = Math.max(...SUGAR.map((d) => d.g));
  return (
    <section className="bg-cream text-espresso">
      <div className="mx-auto max-w-3xl px-6 py-32">
        <Reveal>
          <p className="mb-2 text-xs tracking-[0.5em] text-[#B06212] uppercase">Sugar check</p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            The rest of the table runs on syrup.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-espresso/70">
            Sugar per 100 ml, typical values. NIU carries only what the coconut
            put there — no added sugar, and nothing to crash on at 4 a.m.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-14 space-y-3">
            {SUGAR.map((d) => (
              <div key={d.name} className="flex items-center gap-3 md:gap-4">
                <span
                  className={`w-36 shrink-0 text-xs tracking-wide uppercase md:w-48 md:text-sm ${
                    d.niu ? "font-bold text-[#B06212]" : "text-espresso/60"
                  }`}
                >
                  {d.name}
                </span>
                <div className="h-3.5 flex-1">
                  <div
                    className={`h-3.5 rounded-[4px] ${d.niu ? "bg-[#B06212]" : "bg-espresso/12"}`}
                    style={{ width: `${(d.g / max) * 100}%`, minWidth: 10 }}
                  />
                </div>
                <span
                  className={`w-12 shrink-0 text-right text-xs md:text-sm ${
                    d.niu ? "font-bold text-[#B06212]" : "text-espresso/60"
                  }`}
                >
                  {d.g.toFixed(1)}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={250}>
          <p className="mt-12 text-sm text-espresso/70">
            That&apos;s 2–5× less sugar than everything else on the tray — and while
            an energy drink adds 32 mg of caffeine per 100 ml, NIU adds exactly none.
          </p>
          <p className="mt-3 text-xs text-espresso/45">
            Grams of sugar per 100 ml, typical published values; branded figures vary by market.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* Category proof: how big the 200 ml playbook already got — and the 0.75 L
   bar bottle as the continental gastronomy format (Thomas Henry, Schweppes DE). */
const BENCHMARKS = [
  {
    name: "Fever-Tree",
    origin: "London · est. 2004 · LSE-listed",
    stats: [
      ["£375m", "revenue FY2025"],
      ["£900m", "market cap"],
      ["70+", "countries"],
    ],
    note: "#1 mixer by value in UK on- and off-trade (CGA). Molson Coors bought 8.5% for £71m and took over US distribution in 2025. Formats: 200 ml glass, 500 ml, 150 ml cans.",
  },
  {
    name: "Thomas Henry",
    origin: "Berlin · est. 2010 · private",
    stats: [
      ["€40–50m", "revenue (est.)"],
      ["~80", "people"],
      ["50–60", "countries"],
    ],
    note: "Germany's on-trade premium-mixer leader, built “from gastronomy for gastronomy”. Runs on exactly our pair: 0.2 L serve + 0.75 L glass bar bottle — the 750 ml even leads its 2025 US launch.",
  },
] as const;

function Benchmark() {
  return (
    <section className="bg-espresso">
      <div className="mx-auto max-w-6xl px-6 py-32">
        <Reveal>
          <p className="mb-2 text-xs tracking-[0.5em] text-amber uppercase">The benchmark</p>
          <h2 className="font-display max-w-3xl text-4xl leading-tight md:text-5xl">
            Mixers built on a 200 ml bottle got this big.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-cream/70">
            The premium-mixer playbook is proven twice over — once from London,
            once from Berlin. Nobody has run it with coconut water yet.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {BENCHMARKS.map((b, i) => (
            <Reveal key={b.name} delay={i * 120}>
              <div className="h-full rounded-lg border border-cream/10 bg-espresso-2 p-8">
                <p className="font-display text-2xl">{b.name}</p>
                <p className="mt-1 text-xs tracking-[0.25em] text-cream/45 uppercase">{b.origin}</p>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {b.stats.map(([n, l]) => (
                    <div key={l}>
                      <p className="font-display text-2xl text-amber md:text-3xl">{n}</p>
                      <p className="mt-1 text-[11px] tracking-wide text-cream/50 uppercase">{l}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-relaxed text-cream/65">{b.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* the 0.75 L bar bottle */}
        <div className="mt-20 flex flex-col items-center gap-10 md:flex-row md:gap-16">
          <div className="flex-1">
            <Reveal>
              <p className="mb-4 text-xs tracking-[0.4em] text-amber uppercase">Range extension</p>
              <h3 className="font-display text-3xl leading-tight md:text-4xl">
                The 0.75 L bar bottle.
              </h3>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/75">
                Two formats, one system: the 200 ml serve for the table — and a
                0.75 L bottle for the speed rail, sharing setups and banquets.
                It’s the continental gastronomy convention Thomas Henry and
                Schweppes Germany run on — while the UK players stop at 500 ml,
                which makes the big bottle a differentiator, not a gamble.
              </p>
              <p className="mt-6 text-sm text-cream/45">
                Same amber glass, same label system, all four flavors.
              </p>
            </Reveal>
          </div>
          <div className="w-full max-w-xl flex-1">
            <Reveal delay={150}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/img/bottle-075-lineup.webp")}
                alt="NIU 0.75 L bar bottles, all four flavors"
                className="w-full rounded-lg object-cover"
              />
            </Reveal>
          </div>
        </div>
        <Reveal delay={200}>
          <p className="mt-10 text-xs text-cream/35">
            Sources: Fever-Tree FY25 results · CGA rankings · Molson Coors deal releases ·
            Thomas Henry company filings &amp; trade press. Thomas Henry revenue is an estimate
            extrapolated from the last published figure (€35m, 2020).
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
          <h2 className="font-display mb-4 text-4xl md:text-5xl">Four ways after dark</h2>
          <p className="max-w-xl text-cream/60">
            One bottle, four moods. Cap color is the only thing that changes —
            the rest is the same clean base.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {FLAVORS.map((f, i) => (
            <Reveal key={f.name} delay={i * 100}>
              <div className="group">
                <div className="overflow-hidden rounded-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(f.image)}
                    alt={`NIU ${f.name} bottle`}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-5 flex items-center gap-2.5">
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ background: f.color }}
                  />
                  <p className="font-display text-xl text-cream">{f.name}</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-cream/55">{f.note}</p>
                <p className="mt-3 text-[11px] tracking-[0.15em] text-cream/40 uppercase">
                  {f.serve}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={250}>
          <p className="mt-12 text-sm text-cream/45">
            200 ml serve · 0.75 L bar bottle · Ginger Yuzu is the candidate for a
            lightly sparkling edition.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Gallery() {
  const shots = [
    { src: "/img/packshot.webp", alt: "The NIU lineup on the bar" },
    { src: "/img/bottle-pure.webp", alt: "NIU Pure close-up" },
    { src: "/img/bottle-lime.webp", alt: "NIU Lime under the green light" },
    { src: "/img/bottle-pina.webp", alt: "NIU Piña on the backbar" },
    { src: "/img/bottle-gingeryuzu.webp", alt: "NIU Ginger Yuzu in the blue hour" },
    { src: "/img/bottle-075-pure.webp", alt: "NIU Pure 0.75 L bar bottle" },
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
              src={asset(s.src)}
              alt={s.alt}
              className="h-[38vh] w-auto shrink-0 rounded-lg object-cover md:h-[60vh]"
            />
          ))}
          <div className="flex h-[38vh] w-[60vw] shrink-0 items-center justify-center rounded-lg border border-dashed border-cream/20 px-4 text-center text-sm text-cream/40 md:h-[60vh] md:w-[40vw]">
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
            <img src={asset("/img/packshot.webp")} alt="NIU bar scene" className="h-full w-full rounded-lg object-cover" />
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
              <img src={asset("/img/bottle-pina.webp")} alt="NIU Piña under the bar light" className="w-full rounded-lg" />
              <figcaption className="mt-4 text-sm text-cream/50 italic">
                Piña, under the bar light. — editorial captions are placeholders
              </figcaption>
            </figure>
          </Reveal>
          <Reveal>
            <div className="flex h-[28vh] items-center justify-center rounded-lg border border-dashed border-cream/20 px-8 text-center text-sm text-cream/40 md:h-[50vh]">
              Serve shots, hands, moments — imagery to be added block by block
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
