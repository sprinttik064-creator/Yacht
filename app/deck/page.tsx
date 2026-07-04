import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "NIU — Concept Deck",
  description: "Premium coconut mixer — concept for Flo Hugel, July 2026.",
  robots: { index: false },
};

const FLAVORS = [
  { name: "Pure", color: "var(--color-flavor-pure)", note: "The clean base" },
  { name: "Lime", color: "var(--color-flavor-lime)", note: "Citrus over ice" },
  { name: "Piña", color: "var(--color-flavor-pina)", note: "The sober colada" },
  { name: "Ginger Yuzu", color: "var(--color-flavor-gingeryuzu)", note: "Sparkling candidate" },
] as const;

function Slide({
  children,
  kicker,
  className = "",
}: {
  children: React.ReactNode;
  kicker?: string;
  className?: string;
}) {
  return (
    <section
      className={`relative flex h-screen snap-start flex-col justify-center overflow-hidden px-8 md:px-24 ${className}`}
    >
      {kicker && (
        <Reveal>
          <p className="mb-8 text-xs tracking-[0.5em] text-amber uppercase">{kicker}</p>
        </Reveal>
      )}
      {children}
    </section>
  );
}

export default function Deck() {
  return (
    <div
      data-lenis-prevent
      className="h-screen snap-y snap-mandatory overflow-y-auto bg-espresso text-cream"
    >
      {/* 1 · Cover */}
      <section className="relative flex h-screen snap-start flex-col items-center justify-center overflow-hidden text-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url(/img/packshot.webp)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-espresso/60" />
        <div className="relative">
          <p className="mb-6 text-xs tracking-[0.5em] text-amber uppercase">
            Concept · July 2026 · Prepared for Flo Hugel
          </p>
          <h1 className="font-display text-[clamp(5rem,16vw,14rem)] leading-none">NIU</h1>
          <p className="mt-6 text-sm tracking-[0.3em] text-cream/80 uppercase">
            The premium coconut mixer
          </p>
        </div>
        <p className="absolute bottom-8 text-xs tracking-[0.4em] text-cream/40 uppercase">
          Scroll ↓
        </p>
      </section>

      {/* 2 · The gap */}
      <Slide kicker="01 · The gap">
        <Reveal>
          <h2 className="font-display max-w-4xl text-4xl leading-tight md:text-6xl">
            Every bottle-service table in every club pours the same three mixers.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12 flex flex-wrap gap-4">
            {["Cranberry", "Orange", "Soda"].map((s) => (
              <span key={s} className="rounded-full border border-cream/15 px-6 py-3 text-sm tracking-widest text-cream/50 uppercase">
                {s}
              </span>
            ))}
            <span className="rounded-full border border-dashed border-amber px-6 py-3 text-sm tracking-widest text-amber uppercase">
              The fourth slot
            </span>
          </div>
        </Reveal>
        <Reveal delay={250}>
          <p className="mt-12 max-w-2xl text-lg text-cream/70">
            The demand already exists — Las Vegas venues like Encore Beach Club sell
            coconut water as a <em>paid premium add-on</em> in bottle service today.
            Unbranded. The serve is on the table; the brand slot is empty.
          </p>
        </Reveal>
      </Slide>

      {/* 3 · The thesis */}
      <Slide kicker="02 · The thesis">
        <Reveal>
          <h2 className="font-display text-5xl leading-tight md:text-7xl">
            The anti-<wbr />energy-drink.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-14 grid max-w-3xl gap-8 md:grid-cols-3">
            {[
              ["No alcohol", "clear of every spirits exclusivity"],
              ["No caffeine", "no taurine, nothing to regret at 4 a.m."],
              ["No conflicts", "competes only with cranberry & OJ"],
            ].map(([t, d]) => (
              <div key={t}>
                <p className="font-display text-xl text-amber">{t}</p>
                <p className="mt-2 text-sm text-cream/60">{d}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={250}>
          <p className="mt-14 max-w-2xl text-lg text-cream/70">
            A healthy premium mixer doesn&apos;t fight for a slot on the table —
            it creates a new category and owns it from day one.
          </p>
        </Reveal>
      </Slide>

      {/* 4 · The product */}
      <Slide kicker="03 · The product">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl">Built like a bar menu.</h2>
        </Reveal>
        <div className="mt-14 max-w-2xl space-y-5">
          {[
            ["Base", "pure coconut water — no added sugar"],
            ["Electrolytes", "magnesium + dosed sodium, added"],
            ["Potassium", "~500 mg, naturally occurring"],
            ["Caffeine & taurine", "none, by design"],
            ["Function", "hydrates through the night, softens the morning"],
          ].map(([item, detail], i) => (
            <Reveal key={item} delay={i * 80}>
              <div className="flex items-end text-lg">
                <span>{item}</span>
                <span className="menu-leader" />
                <span className="text-right text-cream/60">{detail}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Slide>

      {/* 5 · The bottle */}
      <section className="relative flex h-screen snap-start items-center overflow-hidden">
        <div
          className="absolute inset-y-0 right-0 hidden w-1/2 bg-cover bg-center md:block"
          style={{ backgroundImage: "url(/img/bottle-original.webp)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/90 to-transparent" />
        <div className="relative px-8 md:w-1/2 md:px-24">
          <Reveal>
            <p className="mb-8 text-xs tracking-[0.5em] text-amber uppercase">04 · The bottle</p>
            <h2 className="font-display text-4xl md:text-6xl">200 ml. Amber glass. On purpose.</h2>
          </Reveal>
          <Reveal delay={150}>
            <ul className="mt-12 max-w-md space-y-4 text-lg text-cream/75">
              <li>— 200 ml is the premium-mixer format: the Fever-Tree playbook.</li>
              <li>— 250 ml deliberately avoided — that&apos;s the Red Bull format.</li>
              <li>— UHT: 12 months unrefrigerated, club-storeroom friendly.</li>
              <li>— Aluminum screw cap; cap color = flavor.</li>
            </ul>
          </Reveal>
          <Reveal delay={250}>
            <p className="mt-10 text-sm text-cream/40 italic">
              Render shows v1 label — final label reads &quot;Coconut mixer&quot;.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6 · The range */}
      <Slide kicker="05 · The range">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl">Four ways after dark.</h2>
        </Reveal>
        <div className="mt-14 grid max-w-5xl gap-6 md:grid-cols-4">
          {FLAVORS.map((f, i) => (
            <Reveal key={f.name} delay={i * 100}>
              <div className="rounded-lg border border-cream/10 bg-espresso-2 p-6">
                <div className="mb-5 h-1 w-full rounded" style={{ background: f.color }} />
                <p className="font-display text-xl" style={{ color: f.color }}>{f.name}</p>
                <p className="mt-2 text-sm text-cream/60">{f.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <p className="mt-10 text-sm text-cream/50">
            Launch still. Ginger Yuzu is the candidate for a lightly sparkling edition.
          </p>
        </Reveal>
      </Slide>

      {/* 7 · Category is open */}
      <Slide kicker="06 · The category">
        <Reveal>
          <h2 className="font-display max-w-4xl text-4xl leading-tight md:text-6xl">
            Nobody owns coconut water in the club channel. Yet.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12 grid max-w-4xl gap-8 md:grid-cols-3">
            {[
              ["Incumbents sell health", "Vaïvaï, 100 Coconuts, Bervera, ZICO — grocery hydration brands. Zero bottle-service programs."],
              ["Vita Coco pours from tetra", "Their bar push is an awareness play for retail — no bar-serve SKU, no club program. They are also the closing window."],
              ["The playbook is unapplied", "Fever-Tree: ~55% on-trade revenue, 11 years the #1 mixer, on a 200 ml glass serve. No coconut brand uses it."],
            ].map(([t, d], i) => (
              <div key={t}>
                <p className="font-display text-lg text-amber">{String(i + 1).padStart(2, "0")} · {t}</p>
                <p className="mt-3 text-sm leading-relaxed text-cream/60">{d}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={250}>
          <p className="mt-12 text-sm text-cream/40">
            Full scan with sources: 10+ brands, pricing, channels — in the appendix document.
          </p>
        </Reveal>
      </Slide>

      {/* 8 · The model */}
      <Slide kicker="07 · The model">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl">Bottle-service economics.</h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-14 grid max-w-4xl gap-10 md:grid-cols-3">
            <div>
              <p className="font-display text-5xl text-amber">€1.80</p>
              <p className="mt-3 text-sm text-cream/60">club buy-in per bottle</p>
            </div>
            <div>
              <p className="font-display text-5xl text-amber">€9–12</p>
              <p className="mt-3 text-sm text-cream/60">on the bottle-service menu</p>
            </div>
            <div>
              <p className="font-display text-5xl text-amber">5–6×</p>
              <p className="mt-3 text-sm text-cream/60">venue margin — the club wins first</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={250}>
          <div className="mt-14 max-w-2xl space-y-4 text-lg text-cream/75">
            <p>Year 1 — seeding via residencies ≈ <span className="text-cream">€200k</span> revenue.</p>
            <p>Year 3 — with retail entry ≈ <span className="text-cream">€2.4m</span>, conservative.</p>
          </div>
        </Reveal>
      </Slide>

      {/* 9 · Why Flo */}
      <Slide kicker="08 · Why Flo">
        <Reveal>
          <h2 className="font-display max-w-4xl text-4xl leading-tight md:text-6xl">
            The distribution is already booked. It&apos;s your calendar.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12 max-w-2xl space-y-6 text-lg text-cream/75">
            <p>
              — Residencies in top clubs worldwide = a seeding channel no beverage
              startup can buy.
            </p>
            <p>
              — Slots next to the pregame/recovery program: the supplement prepares
              the night, NIU carries it.
            </p>
            <p>
              — Clean of alcohol and energy-drink exclusivities — the one drink
              category open to you.
            </p>
            <p>
              — First nightlife-native mixer brand. The slot exists; nobody has
              claimed it.
            </p>
          </div>
        </Reveal>
      </Slide>

      {/* 10 · Close */}
      <section className="relative flex h-screen snap-start flex-col items-center justify-center overflow-hidden text-center">
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/15 blur-[120px]" />
        <div className="relative">
          <Reveal>
            <p className="mb-6 text-xs tracking-[0.5em] text-amber uppercase">Last call</p>
            <p className="font-display text-[clamp(4rem,14vw,12rem)] leading-none">NIU</p>
            <p className="mt-6 text-sm tracking-widest text-cream/60 uppercase">
              The fourth slot is open.
            </p>
            <p className="mt-10 text-xs text-cream/35">
              NIU — Hawaiian for coconut. Working title; naming options incl. wildcard
              in the concept paper.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
