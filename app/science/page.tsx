import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NIU — The Research Note",
  description:
    "Hydration after midnight: what the clubbing-medicine literature actually shows, cited.",
  robots: { index: false },
};

const NIU_FIT = [
  { k: "Sodium — the electrolyte hyponatremia is about", v: "120 mg per bottle, dosed into isotonic range (60 mg/100 ml)" },
  { k: "Potassium — muscles, heart rhythm", v: "~500 mg naturally occurring · 25% NRV" },
  { k: "Magnesium — cramps, recovery", v: "56 mg added" },
  { k: "Caffeine · taurine on a racing heart", v: "zero — energy drinks add ~32 mg caffeine per 100 ml" },
  { k: "Added sugar", v: "zero — 5 g natural sugars per bottle" },
  { k: "Format", v: "200 ml serve — natural pacing against over-drinking" },
] as const;

const SUBSTANCES = [
  {
    name: "Alcohol",
    tag: "hydration relevant",
    relevant: true,
    body: "Ethanol suppresses vasopressin, so the kidneys shed more fluid than each drink brings in — and sodium, potassium and magnesium leave with it. A large share of the classic hangover is plain dehydration plus electrolyte imbalance.",
    angle: "The textbook case for an electrolyte mixer: replace the water and the salts while the night is still running, not the morning after.",
    src: "Hobson & Maughan · Alcohol and Alcoholism, 2010",
  },
  {
    name: "MDMA · ecstasy",
    tag: "hydration relevant — with a catch",
    relevant: true,
    body: "Impaired thermoregulation plus vasopressin release: the body overheats through hours of dancing while refusing to let water go. Litres of plain water then dilute blood sodium — the hyponatremia mechanism detailed above.",
    angle: "The one case with direct guidance: ~500 ml of fluid per hour, electrolytes preferred over plain water — sodium is the whole point.",
    src: "Henry 1998 · Hartung 2002 · sections 01–03",
  },
  {
    name: "Amphetamines · speed",
    tag: "partially relevant",
    relevant: true,
    body: "Hours of physical activity with thirst and appetite switched off, raised temperature and jaw tension; sessions run long and losses accumulate quietly.",
    angle: "Same sweat arithmetic as any marathon night — electrolyte fluids over plain water. No MDMA-style water-retention quirk, so the risk profile is simpler.",
    src: "Festival-medicine hydration guidance",
  },
  {
    name: "Cocaine",
    tag: "hydration won't fix this",
    relevant: false,
    body: "Vasoconstriction, racing heart, blood-pressure spikes, arrhythmia and infarction risk — and taken with alcohol the liver produces cocaethylene, more cardiotoxic than either substance alone.",
    angle: "Honestly: the danger is cardiac, and no drink mitigates it. The only relevant lines — zero caffeine adds no third stimulant on top, and the alcohol running alongside still costs water and salts.",
    src: "Pennings et al. · Addiction, 2002",
  },
  {
    name: "Ketamine",
    tag: "hydration won't fix this",
    relevant: false,
    body: "Dissociation and lost coordination (falls and injuries), nausea; with regular use, documented damage to the bladder — ketamine-associated ulcerative cystitis.",
    angle: "No hydration story to tell. At most: a non-alcoholic glass in hand. We won't pretend otherwise.",
    src: "Shahani et al. · Urology, 2007",
  },
  {
    name: "GHB",
    tag: "emergency risk — not a hydration case",
    relevant: false,
    body: "A depressant with a narrow dose window; combined with alcohol it can suppress breathing outright. Overdose looks like deep sleep and is not one.",
    angle: "Nothing a drink can do. Someone unresponsive on GHB needs medics immediately — that is the entire guidance.",
    src: "Mason & Kerns · Academic Emergency Medicine, 2002",
  },
] as const;

const SOURCES = [
  "Henry JA, Jeffreys KJ, Dawling S. Toxicity and deaths from 3,4-methylenedioxymethamphetamine (“ecstasy”). The Lancet, 1992.",
  "Henry JA et al. Low-dose MDMA (“ecstasy”) induces vasopressin secretion. The Lancet, 1998.",
  "Hartung TK et al. Hyponatraemic states following MDMA (“ecstasy”) ingestion. QJM: An International Journal of Medicine, 2002.",
  "Wolff K et al. Vasopressin and oxytocin secretion in response to the consumption of ecstasy in a clubbing population. Journal of Psychopharmacology, 2006.",
  "Campbell GA, Rosner MH. The agony of ecstasy: MDMA and the kidney. Clinical Journal of the American Society of Nephrology, 2008.",
  "Parrott AC. MDMA and temperature: a review of the thermal effects of “ecstasy” in humans. Drug and Alcohol Dependence, 2012.",
  "CDC. Illness and deaths among persons attending an electronic dance-music festival — New York City, 2013. MMWR, 2014.",
  "DanceSafe — heatstroke & hydration harm-reduction guidance (dancesafe.org).",
  "London Drug Policy Forum — “Dance Till Dawn Safely” safer-clubbing guidance (~500 ml fluid per hour of dancing).",
  "Hobson RM, Maughan RJ. Hydration status and the diuretic action of a small dose of alcohol. Alcohol and Alcoholism, 2010.",
  "Pennings EJ, Leccese AP, Wolff FA. Effects of concurrent use of alcohol and cocaine. Addiction, 2002.",
  "Shahani R et al. Ketamine-associated ulcerative cystitis: a new clinical entity. Urology, 2007.",
  "Mason PE, Kerns WP. Gamma hydroxybutyric acid (GHB) intoxication. Academic Emergency Medicine, 2002.",
] as const;

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs tracking-[0.4em] text-amber uppercase">{children}</p>
  );
}

export default function Science() {
  return (
    <main className="min-h-screen bg-espresso px-6 py-20 text-cream md:px-12">
      <article className="mx-auto max-w-3xl">
        {/* header */}
        <header>
          <p className="text-xs tracking-[0.5em] text-amber uppercase">
            NIU · Research note
          </p>
          <h1 className="font-display mt-5 text-4xl leading-tight md:text-6xl">
            Hydration after midnight.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-cream/70">
            What thirty years of clubbing-medicine literature actually shows —
            and where a coconut-water mixer honestly fits. Every claim below is
            cited; the sources are at the end.
          </p>
          <p className="mt-4 rounded-lg border border-cream/10 bg-espresso-2 px-5 py-4 text-sm leading-relaxed text-cream/55">
            Straight talk first: nothing on this page is medical advice, and
            nothing here endorses taking anything. The only zero-risk choice is
            not to. This is the published science of what happens on dancefloors
            — and what event medicine recommends people drink there.
          </p>
        </header>

        {/* 01 heat */}
        <section className="mt-20">
          <Kicker>01 · The heat problem</Kicker>
          <h2 className="font-display text-3xl md:text-4xl">
            Hours of dancing are a thermal event.
          </h2>
          <p className="mt-6 leading-relaxed text-cream/75">
            MDMA impairs the body&apos;s ability to regulate temperature, and a
            packed dancefloor is already a hot, humid room. Reviews of the
            thermal effects in humans document core temperatures climbing with
            dose, ambient heat and continuous dancing — hyperthermia remains the
            classic ecstasy-related emergency, and it is what killed and
            hospitalized attendees at major festivals as recently as the 2013
            New York EDM festival documented by the CDC.
          </p>
          <p className="mt-4 text-xs tracking-[0.12em] text-amber/80 uppercase">
            Parrott 2012 · CDC MMWR 2014
          </p>
        </section>

        {/* 02 water paradox */}
        <section className="mt-16">
          <Kicker>02 · The water paradox</Kicker>
          <h2 className="font-display text-3xl md:text-4xl">
            Plain water, in volume, can become the danger.
          </h2>
          <p className="mt-6 leading-relaxed text-cream/75">
            The counter-intuitive finding, established experimentally in 1998:
            even a low dose of MDMA makes the body release vasopressin — the
            hormone that tells kidneys to hold water. A clubber who responds to
            heat by drinking litres of plain water is then diluting their blood
            sodium while the body refuses to let the water go. The result is
            dilutional hyponatremia — documented in case series through the
            1990s and 2000s, reviewed in the nephrology literature, and the
            mechanism behind the most famous ecstasy-related death of all:
            18-year-old Leah Betts in 1995, who died not from the pill itself
            but from water intoxication after drinking several litres in a
            short window.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["1998", "MDMA shown to trigger vasopressin release (The Lancet)"],
              ["1995", "Leah Betts dies of water intoxication, not toxicity"],
              ["2002", "QJM case series formalizes MDMA hyponatremia"],
            ].map(([n, l]) => (
              <div key={n} className="rounded-lg border border-cream/10 bg-espresso-2 p-5">
                <p className="font-display text-3xl text-amber">{n}</p>
                <p className="mt-2 text-xs leading-relaxed text-cream/55">{l}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs tracking-[0.12em] text-amber/80 uppercase">
            Henry et al. 1998 · Hartung et al. 2002 · Campbell &amp; Rosner 2008 · Wolff et al. 2006
          </p>
        </section>

        {/* 03 guidance */}
        <section className="mt-16">
          <Kicker>03 · What guidance converged on</Kicker>
          <h2 className="font-display text-3xl md:text-4xl">
            ~500 ml an hour. Make it electrolytes.
          </h2>
          <p className="mt-6 leading-relaxed text-cream/75">
            Out of those cases came the harm-reduction consensus that has held
            for decades, from the UK&apos;s safer-clubbing guidance to DanceSafe&apos;s
            materials today: if you&apos;re dancing, drink about 500 ml of fluid per
            hour — not dramatically more — and prefer isotonic, electrolyte-carrying
            drinks over plain water, with salty snacks if you can. Replace what
            sweat takes out; don&apos;t dilute what&apos;s left.
          </p>
          <p className="mt-4 text-xs tracking-[0.12em] text-amber/80 uppercase">
            DanceSafe · London Drug Policy Forum, “Dance Till Dawn Safely”
          </p>
        </section>

        {/* 04 substance by substance */}
        <section className="mt-16">
          <Kicker>04 · Substance by substance</Kicker>
          <h2 className="font-display text-3xl md:text-4xl">
            What hydration can — and cannot — do.
          </h2>
          <p className="mt-6 leading-relaxed text-cream/75">
            Different substances break the body differently, and an electrolyte
            drink is not a remedy for most of it. Here is the honest map — the
            cases where hydration science genuinely applies, and the cases where
            pretending it helps would be dangerous.
          </p>
          <div className="mt-10 space-y-5">
            {SUBSTANCES.map((s) => (
              <div key={s.name} className="rounded-lg border border-cream/10 bg-espresso-2 p-6 md:p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-display text-xl">{s.name}</p>
                  <span
                    className={`rounded-full border px-3 py-1 text-[10px] tracking-[0.15em] uppercase ${
                      s.relevant
                        ? "border-amber/60 text-amber"
                        : "border-cream/25 text-cream/45"
                    }`}
                  >
                    {s.tag}
                  </span>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-[11px] tracking-[0.2em] text-cream/40 uppercase">On the body</p>
                    <p className="mt-2 text-sm leading-relaxed text-cream/70">{s.body}</p>
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.2em] text-cream/40 uppercase">The hydration angle</p>
                    <p className="mt-2 text-sm leading-relaxed text-cream/70">{s.angle}</p>
                  </div>
                </div>
                <p className="mt-4 text-[11px] tracking-[0.12em] text-amber/70 uppercase">{s.src}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 rounded-lg border border-neon/30 bg-neon/5 px-5 py-4 text-sm leading-relaxed text-cream/70">
            The line that matters most: overheating, confusion, collapse or
            unresponsiveness is a medical emergency. Fluids are not the answer
            at that point — medics are. Every venue&apos;s staff should know it.
          </p>
        </section>

        {/* 05 where NIU fits */}
        <section className="mt-16">
          <Kicker>05 · Where NIU fits</Kicker>
          <h2 className="font-display text-3xl md:text-4xl">
            The recipe sits where the guidance points.
          </h2>
          <div className="mt-8 space-y-3">
            {NIU_FIT.map((r) => (
              <div key={r.k} className="flex items-end text-sm">
                <span className="shrink-0 text-cream/85">{r.k}</span>
                <span className="menu-leader" />
                <span className="max-w-[50%] text-right text-cream/60">{r.v}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 rounded-lg border border-cream/10 bg-espresso-2 px-5 py-4 text-sm leading-relaxed text-cream/55">
            The honest limit: no clinical trial of coconut water exists in this
            context, and NIU makes no medical claims. What the composition
            matches is the published hydration guidance above — an isotonic,
            caffeine-free, low-sugar electrolyte drink in a format bars actually
            serve.
          </p>
        </section>

        {/* sources */}
        <section className="mt-16">
          <Kicker>Sources</Kicker>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-cream/55">
            {SOURCES.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </section>

        <footer className="mt-20 border-t border-cream/10 pt-8 pb-10">
          <Link
            href="/"
            className="text-xs tracking-[0.3em] text-amber uppercase hover:text-cream"
          >
            ← Back to NIU
          </Link>
        </footer>
      </article>
    </main>
  );
}
