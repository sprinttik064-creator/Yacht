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

        {/* 04 where NIU fits */}
        <section className="mt-16">
          <Kicker>04 · Where NIU fits</Kicker>
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
