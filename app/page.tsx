import Link from "next/link";
import HeroScrub from "@/components/HeroScrub";
import Reveal from "@/components/Reveal";
import { asset } from "@/lib/asset";
import { SUBSTANCES } from "@/lib/science-data";
import { TOTALS } from "@/lib/plan-data";

const FLAVORS = [
  {
    name: "Pure",
    color: "var(--color-flavor-pure)",
    cap: "aluminum",
    note: "The clean base. Coconut water, electrolytes, nothing to hide.",
    serve: "NIU Pure · cracked ice · nothing else",
    cocktail: { name: "White Palm", spec: "50 ml silver tequila · 100 ml NIU Pure · squeeze of lime · over rocks" },
    image: "/img/bottle-pure-alu.webp",  },
  {
    name: "Lime",
    color: "var(--color-flavor-lime)",
    cap: "green",
    note: "Cuts through the dark like a squeeze of lime over ice.",
    serve: "NIU Lime · crushed ice · lime wedge",
    cocktail: { name: "Midnight Gimlet", spec: "50 ml dry gin · 100 ml NIU Lime · crushed ice · lime wedge" },
    image: "/img/bottle-lime-alu.webp",  },
  {
    name: "Piña",
    color: "var(--color-flavor-pina)",
    cap: "golden",
    note: "Pineapple and coconut — the island side of the night.",
    serve: "NIU Piña · crushed ice · pineapple slice",
    cocktail: { name: "Piña Noir", spec: "50 ml white rum · 100 ml NIU Piña · pineapple slice — the colada, minus the cream" },
    image: "/img/bottle-pina-alu.webp",  },
  {
    name: "Ginger Yuzu",
    color: "var(--color-flavor-gingeryuzu)",
    cap: "blue",
    note: "Heat and citrus. Candidate for the lightly sparkling edition.",
    serve: "NIU Ginger Yuzu · highball ice · yuzu zest",
    cocktail: { name: "Tokyo Highball", spec: "45 ml Japanese whisky · 110 ml NIU Ginger Yuzu · tall glass · citrus zest" },
    image: "/img/bottle-gingeryuzu-alu.webp",  },
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
      <ShelfProblem />
      <Flavors />
      <Daylight />
      <HydrationEdge />
      <ScienceTeaser />
      <Brandbook />
      <PlanCTA />
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

        {/* The anti-energy-drink, visualized: NIU vs the caffeinated serve */}
        <Reveal delay={300}>
          <div className="mx-auto mt-14 max-w-2xl rounded-lg border border-cream/10 bg-espresso-2 p-8 text-left">
            <p className="mb-6 text-center text-xs tracking-[0.4em] text-amber uppercase">
              NIU vs the energy-drink serve · per 250 ml
            </p>
            <div className="space-y-5">
              {[
                { label: "Caffeine", niu: 0, them: 80, max: 80, unit: "mg", note: "nothing racing the heart at 4 a.m." },
                { label: "Added sugar", niu: 0, them: 27, max: 27, unit: "g", note: "no crash on the dance floor" },
                { label: "Electrolytes", niu: 700, them: 0, max: 700, unit: "mg", note: "rehydrates instead of dehydrating" },
              ].map((r) => (
                <div key={r.label}>
                  <div className="mb-1.5 flex items-baseline justify-between text-sm">
                    <span className="text-cream">{r.label}</span>
                    <span className="text-xs text-cream/45">{r.note}</span>
                  </div>
                  {[
                    { who: "NIU", v: r.niu, color: "var(--color-amber)" },
                    { who: "Energy drink", v: r.them, color: "var(--color-neon)" },
                  ].map((b) => (
                    <div key={b.who} className="mb-1 flex items-center gap-3">
                      <span className="w-24 shrink-0 text-[11px] tracking-wide text-cream/50 uppercase">{b.who}</span>
                      <div className="h-3 flex-1">
                        <div
                          className="h-3 rounded-[3px]"
                          style={{
                            width: `${Math.max((b.v / r.max) * 100, 1.5)}%`,
                            background: b.v === 0 ? "rgba(244,237,227,0.15)" : b.color,
                          }}
                        />
                      </div>
                      <span className="w-16 shrink-0 text-right text-sm text-cream/80">
                        {b.v} {r.unit}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p className="mt-6 border-t border-cream/10 pt-4 text-center text-sm text-cream/55">
              Zero stimulants. The night is loud enough — NIU carries you through
              it and doesn&apos;t charge interest in the morning.
            </p>
          </div>
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

/* The design gap, shown with the real shelf: five actual category packs
   arranged from loudest to closest-to-premium, then the object none of them
   makes — an amber glass bottle built for the table. Facts per
   COMPETITIVE_SCAN.md; competitor marks belong to their owners. */
const SHELF = [
  { img: "/img/shelf/vaivai.webp", name: "Vaïvaï", format: "330 ml tetra", note: "confetti carton", best: false },
  { img: "/img/shelf/vita-coco.webp", name: "Vita Coco", format: "330 ml tetra", note: "the supermarket original", best: false },
  { img: "/img/shelf/zico.webp", name: "ZICO", format: "330 ml tetra", note: "sports-aisle blue", best: false },
  { img: "/img/shelf/100-coconuts.webp", name: "100 Coconuts", format: "325 ml can", note: "the category's best can", best: true },
  { img: "/img/shelf/bervera.webp", name: "Bervera", format: "200 ml PET", note: "the category's best bottle", best: true },
] as const;

function ShelfProblem() {
  return (
    <section className="bg-espresso-2">
      <div className="mx-auto max-w-6xl px-6 py-32">
        <Reveal>
          <p className="mb-2 text-xs tracking-[0.5em] text-amber uppercase">The shelf problem</p>
          <h2 className="font-display max-w-3xl text-4xl leading-tight md:text-5xl">
            Five ways the category shows up. And the one it forgot.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-cream/70">
            The real shelf, arranged from loud to almost-premium. Even the two
            strongest designs in coconut water are a slim can and a pastel PET —
            made for the fridge shelf and the gym bag. Nobody has made the
            object a top venue can set next to champagne.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-6">
            {SHELF.map((s) => (
              <div key={s.name} className="flex flex-col">
                <div
                  className={`relative aspect-[3/4] overflow-hidden rounded-lg border bg-espresso ${
                    s.best ? "border-cream/25" : "border-cream/10"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(s.img)}
                    alt={`${s.name} packaging`}
                    className="h-full w-full object-cover opacity-80 saturate-[0.85]"
                  />
                  {s.best && (
                    <span className="absolute top-2 left-2 rounded-full bg-espresso/80 px-2.5 py-1 text-[9px] tracking-[0.15em] text-cream/70 uppercase">
                      category&apos;s best
                    </span>
                  )}
                </div>
                <p className="mt-2.5 text-sm text-cream/85">{s.name}</p>
                <p className="text-xs text-cream/40">{s.format} · {s.note}</p>
              </div>
            ))}
            {/* the missing object */}
            <div className="col-span-2 flex flex-col md:col-span-1">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg border-2 border-amber bg-espresso shadow-[0_0_50px_rgba(232,163,77,0.15)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset("/img/bottle-pure-alu.webp")}
                  alt="NIU amber glass bottle"
                  className="h-full w-full object-cover"
                />
                <span className="absolute top-2 left-2 rounded-full bg-amber px-2.5 py-1 text-[9px] font-semibold tracking-[0.15em] text-espresso uppercase">
                  built for the table
                </span>
              </div>
              <p className="mt-2.5 text-sm font-semibold text-amber">NIU</p>
              <p className="text-xs text-cream/40">200 ml amber glass · bar serve</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={250}>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Material", "Tetra, PET and aluminum across the shelf — NIU is the only amber glass."],
              ["Where it lives", "Retail fridges and DTC boxes — NIU is built for the backbar and the ice bucket."],
              ["The serve", "Personal sips with straws and screw caps — NIU pours a 200 ml mixer serve, bar-side."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-lg border border-cream/10 bg-espresso p-6">
                <p className="text-xs tracking-[0.3em] text-amber uppercase">{t}</p>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-xs leading-relaxed text-cream/35">
            Packaging shown for category comparison; trademarks belong to their
            owners. Formats and channels documented in the competitive scan — no
            coconut brand offers a bar-grade glass serve, and no premium-mixer
            house has a coconut SKU.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Flavors() {
  return (
    <>
      {/* Lineup intro — carries the same bar backdrop as the flavor blocks,
          so the scene starts at the headline instead of a flat black gap */}
      <section className="relative overflow-hidden bg-espresso-2">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: `url(${asset("/img/empty-bar.webp")})` }}
        />
        <div className="absolute inset-0 bg-espresso-2/45" />
        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-8">
          <Reveal>
            <p className="mb-2 text-xs tracking-[0.5em] text-amber uppercase">The lineup</p>
            <h2 className="font-display mb-4 text-4xl md:text-5xl">Four ways after dark</h2>
            <p className="max-w-xl text-cream/60">
              One bottle, four moods. Cap color is the only thing that changes —
              the rest is the same clean base.
            </p>
          </Reveal>
        </div>
      </section>

      {/* One full block per bottle */}
      {FLAVORS.map((f, i) => (
        <section key={f.name} className="relative overflow-hidden bg-espresso-2">
          {/* shared empty-bar backdrop: one venue for all four flavors, fixed on
              desktop so the room stays put while the flavors change the light */}
          <div
            className="absolute inset-0 bg-cover bg-center md:bg-fixed"
            style={{ backgroundImage: `url(${asset("/img/empty-bar.webp")})` }}
          />
          <div className="absolute inset-0 bg-espresso-2/45" />
          {/* flavor-tinted ambient glow */}
          <div
            className="pointer-events-none absolute top-1/2 h-[70vh] w-[70vh] -translate-y-1/2 rounded-full opacity-[0.13] blur-[110px]"
            style={{
              background: f.color,
              [i % 2 === 0 ? "right" : "left"]: "-15vh",
            } as React.CSSProperties}
          />
          <div
            className={`mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-16 md:min-h-screen md:flex-row md:gap-20 md:py-24 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* copy */}
            <div className="flex-1">
              <Reveal>
                <p className="text-xs tracking-[0.4em] text-cream/50 uppercase">
                  NIU · {String(i + 1).padStart(2, "0")}
                </p>
                <h3
                  className="font-display mt-4 text-5xl md:text-7xl"
                  style={{ color: f.color }}
                >
                  {f.name}
                </h3>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-8 max-w-md text-lg leading-relaxed text-cream/80">{f.note}</p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-10 max-w-md border-t border-cream/10 pt-6">
                  <p className="text-xs tracking-[0.3em] text-cream/40 uppercase">Serve it</p>
                  <p className="mt-2 text-cream/70">{f.serve}</p>
                </div>
                <div className="mt-6 max-w-md border-t border-cream/10 pt-6">
                  <p className="text-xs tracking-[0.3em] text-amber/80 uppercase">
                    Or mix it · {f.cocktail.name}
                  </p>
                  <p className="mt-2 text-cream/70">{f.cocktail.spec}</p>
                </div>
                <p className="mt-8 text-xs text-cream/40">
                  200 ml · {f.cap} cap · coconut mixer · enjoy responsibly
                </p>
              </Reveal>
            </div>
            {/* bottle visual */}
            <div className="w-full max-w-sm flex-1 md:max-w-md">
              <Reveal delay={150}>
                {/* portrait crop + slight zoom so the bottle dominates the frame */}
                <div className="overflow-hidden rounded-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(f.image)}
                    alt={`NIU ${f.name} bottle`}
                    className="aspect-[4/5] w-full scale-[1.08] object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

/* Compact hydration-vs-water block: what each drink actually puts back.
   Composition facts only — no invented retention numbers. */
const EDGE_ROWS = [
  { k: "Fluid", water: "yes", niu: "yes", pct: 100 },
  { k: "Sodium", water: "0", niu: "120 mg", pct: 100 },
  { k: "Potassium", water: "0", niu: "~500 mg", pct: 82 },
  { k: "Magnesium", water: "0", niu: "56 mg", pct: 46 },
] as const;

/* Beach-club day shift: the coconut ritual already sells at day venues as
   heavy fresh coconuts — NIU keeps the ritual, fixes the logistics.
   Venue price points sourced in COMPETITIVE_SCAN.md (venue serves addendum). */
const COCO_VS = [
  { k: "Serve size", fresh: "200–300 ml, luck of the nut", niu: "200 ml, every time" },
  { k: "Weight behind the bar", fresh: "~1.3 kg per serve", niu: "0.39 kg per bottle" },
  { k: "Chill time", fresh: "hours for a crate at 3–6 °C", niu: "minutes in ice" },
  { k: "Shelf life", fresh: "1–2 weeks chilled, days ambient", niu: "12 months, no fridge" },
  { k: "Prep", fresh: "machete + trained hands", niu: "twist the cap" },
  { k: "After the serve", fresh: "~1 kg of husk per serve to haul", niu: "a glass bottle back" },
] as const;

// Venue price points for the fresh-coconut ritual — sourced in
// COMPETITIVE_SCAN.md (venue serves addendum, Jul 2026).
const COCO_PRICES = [
  { n: "$14", where: "Club Space, Miami", what: "fresh coconut at the sunrise terrace — a viral ritual with its own TikTok pages" },
  { n: "$10 / $30", where: "Wynn resorts, Las Vegas", what: "CocoTaps tapped coconut, plain / with rum — ~1,800 nuts a week across 20+ Strip resorts" },
  { n: "~$5", where: "what the venue pays", what: "wholesale per delivered nut — for an unpredictable pour that dies in weeks" },
  { n: "4,800", where: "beach clubs worldwide", what: "a ~$6.8B market, and almost none of them run a fresh-coconut program" },
] as const;

function Daylight() {
  return (
    <section className="bg-cream text-espresso">
      <div className="mx-auto max-w-5xl px-6 py-32">
        <Reveal>
          <p className="mb-2 text-xs tracking-[0.5em] text-[#B06212] uppercase">The day shift</p>
          <h2 className="font-display max-w-3xl text-4xl leading-tight md:text-5xl">
            The beach-club day drink.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-espresso/70">
            Day venues already sell the coconut ritual — whole fresh coconuts with
            a straw at premium prices. The demand is proven at the till; the
            logistics are the pain. NIU keeps the coconut moment and drops the
            machete.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {COCO_PRICES.map((c) => (
              <div key={c.where} className="rounded-lg border border-espresso/15 bg-white/40 p-5">
                <p className="font-display text-3xl text-[#B06212]">{c.n}</p>
                <p className="mt-1 text-sm font-semibold text-espresso/85">{c.where}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-espresso/55">{c.what}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-espresso/40">
            Menu and wholesale figures from press, venue menus and supplier filings, 2024–26 —
            details and sources in the competitive scan.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12 overflow-hidden rounded-lg border border-espresso/15">
            <div className="grid grid-cols-[1.2fr_1fr_1fr] gap-x-4 border-b border-espresso/15 bg-espresso/5 px-6 py-3 text-[11px] tracking-[0.2em] uppercase">
              <span className="text-espresso/50">Behind the bar</span>
              <span className="text-espresso/50">Fresh coconut</span>
              <span className="font-semibold text-[#B06212]">NIU</span>
            </div>
            {COCO_VS.map((r) => (
              <div key={r.k} className="grid grid-cols-[1.2fr_1fr_1fr] gap-x-4 border-b border-espresso/10 px-6 py-3.5 text-sm last:border-b-0">
                <span className="text-espresso/80">{r.k}</span>
                <span className="text-espresso/60">{r.fresh}</span>
                <span className="font-semibold">{r.niu}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={250}>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-espresso/60">
            Fresh coconuts on premium day-club menus prove the price point — and
            every operational line above is why they stay a novelty. A bottled
            premium serve scales the same ritual to every parasol: stackable
            cases, minutes to chill, a consistent 200 ml pour, and a label that
            belongs at the table. Perfect for the hours when nobody wants
            alcohol yet — and the sun does the selling. The ceiling is generous:
            against a $14 nut — or the €14 a top Ibiza club charges for plain
            still water — a premium bottled coconut serve reads as fair.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function HydrationEdge() {
  return (
    <section className="bg-espresso-2">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-28 md:grid-cols-2 md:gap-16">
        <div>
          <Reveal>
            <p className="mb-2 text-xs tracking-[0.5em] text-amber uppercase">Hydration 101</p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Rehydrates better than water.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-lg leading-relaxed text-cream/70">
              Water refills the tank but not the salts — and rehydration only
              sticks when fluid arrives with sodium and potassium. That&apos;s
              the whole chart on the right.
            </p>
            <p className="mt-5 text-xs leading-relaxed text-cream/35">
              Maughan et al., AJCN 2016 (beverage hydration index) · ACSM
              fluid-replacement guidance.
            </p>
          </Reveal>
        </div>
        <Reveal delay={180}>
          <div className="rounded-lg border border-cream/10 bg-espresso p-7 md:p-8">
            <div className="mb-5 flex items-baseline justify-between text-[11px] tracking-[0.2em] uppercase">
              <span className="text-cream/40">Per 200 ml, what goes back in</span>
            </div>
            <div className="space-y-6">
              {EDGE_ROWS.map((r) => (
                <div key={r.k}>
                  <p className="text-sm text-cream/85">{r.k}</p>
                  <div className="mt-2 space-y-1.5">
                    <div className="flex items-center gap-3">
                      <span className="w-12 shrink-0 text-[11px] tracking-wide text-cream/40 uppercase">Water</span>
                      <div className="h-3 flex-1">
                        {r.k === "Fluid" ? (
                          <div className="h-3 w-full rounded-[4px] bg-cream/25" />
                        ) : (
                          <div className="h-3 w-[3px] rounded-[2px] bg-cream/25" />
                        )}
                      </div>
                      <span className="w-16 shrink-0 text-right text-xs text-cream/45">{r.water}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-12 shrink-0 text-[11px] tracking-wide text-amber uppercase">NIU</span>
                      <div className="h-3 flex-1">
                        <div
                          className="h-3 rounded-[4px] bg-amber"
                          style={{ width: `${r.pct}%` }}
                        />
                      </div>
                      <span className="w-16 shrink-0 text-right text-xs font-semibold text-cream">{r.niu}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[10px] leading-relaxed text-cream/30">
              Bars illustrate composition per bottle, not clinical retention
              rates. Recipe values pending lab analysis.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Night-hydration science, investor-density: three one-line findings, a
   compact relevance meter over the substance map, and the /science link.
   Full cited prose lives at /science — this is the diagram, not the essay. */
const SCIENCE_FACTS = [
  { n: "38°C+", title: "Heat is the first enemy", text: "hours of dancing are a thermal event", src: "Parrott 2012 · CDC 2014" },
  { n: "Na↓", title: "Plain water can turn on you", text: "in volume it dilutes blood sodium", src: "The Lancet 1998 · QJM 2002" },
  { n: "500 ml/h", title: "The guidance since the '90s", text: "electrolyte drinks over plain water", src: "DanceSafe · UK safer clubbing" },
] as const;

const METER = {
  full: { label: "helps", segments: 3, color: "var(--color-amber)" },
  partial: { label: "partly", segments: 2, color: "var(--color-amber)" },
  none: { label: "won't fix it", segments: 1, color: "rgba(244,237,227,0.28)" },
  warning: { label: "avoid in the glass", segments: 3, color: "var(--color-neon)" },
} as const;

function ScienceTeaser() {
  return (
    <section className="bg-espresso">
      <div className="mx-auto max-w-5xl px-6 py-32">
        <Reveal>
          <p className="mb-2 text-xs tracking-[0.5em] text-amber uppercase">
            Night hydration · the science
          </p>
          <h2 className="font-display max-w-3xl text-4xl leading-tight md:text-5xl">
            What the research says about long nights.
          </h2>
        </Reveal>

        {/* three findings, one line each */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {SCIENCE_FACTS.map((c, i) => (
            <Reveal key={c.n} delay={i * 100}>
              <div className="h-full rounded-lg border border-cream/10 bg-espresso-2 p-6">
                <p className="font-display text-3xl text-amber">{c.n}</p>
                <p className="mt-2 font-semibold text-cream">{c.title}</p>
                <p className="mt-1 text-sm text-cream/55">{c.text}</p>
                <p className="mt-3 text-[10px] tracking-[0.12em] text-amber/70 uppercase">{c.src}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* relevance meter — where an electrolyte drink genuinely matters */}
        <Reveal delay={150}>
          <div className="mt-14 rounded-lg border border-cream/10 bg-espresso-2 p-6 md:p-8">
            <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-xs tracking-[0.4em] text-amber uppercase">
                Where hydration actually helps
              </p>
              <p className="text-[11px] text-cream/35">
                honest map · full note with citations on /science
              </p>
            </div>
            <div className="space-y-3">
              {SUBSTANCES.map((s) => {
                const m = METER[s.meter];
                return (
                  <div key={s.name} className="flex items-center gap-3 md:gap-4">
                    <span className="w-40 shrink-0 text-sm text-cream/85 md:w-48">{s.name}</span>
                    <span className="flex w-16 shrink-0 gap-1">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="h-2.5 w-4 rounded-[2px]"
                          style={{
                            background: i < m.segments ? m.color : "rgba(244,237,227,0.08)",
                          }}
                        />
                      ))}
                    </span>
                    <span
                      className="w-24 shrink-0 text-[11px] tracking-wide uppercase md:w-28"
                      style={{ color: s.meter === "warning" ? "var(--color-neon)" : s.meter === "none" ? "rgba(244,237,227,0.4)" : "var(--color-amber)" }}
                    >
                      {m.label}
                    </span>
                    <span className="hidden flex-1 truncate text-sm text-cream/45 md:block">{s.short}</span>
                  </div>
                );
              })}
            </div>
            <p className="mt-6 border-t border-cream/10 pt-4 text-sm leading-relaxed text-cream/60">
              One row is about the mixer itself: caffeinated serves stack a second
              stimulant on top of the night — published work links caffeine with
              amplified MDMA hyperthermia and heart-rate load. NIU adds fluid and
              salts, not stimulation. And the red line stands: collapse or
              unresponsiveness means medics, not fluids.
            </p>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/science"
              className="inline-block rounded-full border border-amber px-8 py-3.5 text-sm font-semibold tracking-[0.15em] text-amber uppercase transition-colors duration-300 hover:bg-amber hover:text-espresso"
            >
              Read the full research →
            </Link>
            <p className="max-w-xs text-xs leading-relaxed text-cream/35">
              Cited harm-reduction science — not medical advice, and not an
              endorsement of anything. NIU is a drink.
            </p>
          </div>
        </Reveal>
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

/* The business-plan invitation: one loud amber block right before last call,
   headline numbers pulled live from the plan model so they never drift. */
function PlanCTA() {
  const stats = [
    { v: String(TOTALS.shows), l: "shows in year one" },
    { v: `${Math.round(TOTALS.bottles / 1000)}k`, l: "bottles poured" },
    { v: "16", l: "standing accounts" },
    { v: `€${Math.round(TOTALS.revenue / 1000)}k`, l: "base-case revenue" },
  ];
  return (
    <section className="relative overflow-hidden bg-espresso">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/10 blur-[140px]" />
      <div className="relative mx-auto max-w-5xl px-6 py-32">
        <Reveal>
          <div className="rounded-2xl border border-amber/50 bg-espresso-2/80 px-8 py-14 text-center shadow-[0_0_90px_rgba(232,163,77,0.14)] md:px-16">
            <p className="mb-4 text-xs tracking-[0.5em] text-amber uppercase">
              For partners &amp; investors
            </p>
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              The numbers behind the night
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/70">
              A year-one model built venue by venue on HUGEL&apos;s tour
              calendar — every show, every standing account, every bottle.
            </p>
            <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-y-10 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.l}>
                  <p className="font-display text-4xl text-amber md:text-5xl">{s.v}</p>
                  <p className="mt-2 text-xs tracking-widest text-cream/50 uppercase">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Link
                href="/plan"
                className="cta-glow inline-flex items-center gap-3 rounded-full bg-amber px-10 py-5 text-base font-bold tracking-[0.15em] text-espresso uppercase transition-transform duration-300 hover:scale-105"
              >
                View the business plan
                <span aria-hidden>→</span>
              </Link>
              <p className="mt-5 text-xs tracking-widest text-cream/40 uppercase">
                Interactive dashboard · monthly build-up · regions · assumptions
              </p>
            </div>
          </div>
        </Reveal>
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
