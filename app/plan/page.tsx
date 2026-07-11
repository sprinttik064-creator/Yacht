"use client";

import { CumulativeLine, MonthlyBars, RegionBars, SERIES, YearStack } from "@/components/PlanCharts";
import {
  ASSUMPTIONS,
  BENCHMARKS,
  CHANNELS,
  CUMULATIVE,
  MONTHLY,
  PHASES,
  RANGE,
  REGIONS,
  SHOWS,
  TARGET,
  TOTALS,
  YEARS,
  YEAR_TOTALS,
} from "@/lib/plan-data";

const eur = (v: number) => `€${(v / 1000).toFixed(0)}k`;
const eurM = (v: number) => (v >= 1 ? `€${v.toFixed(1)}m` : `€${Math.round(v * 1000)}k`);
const kBottles = (v: number) => `${(v / 1000).toFixed(1)}k btl`;

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="mb-2 text-xs tracking-[0.4em] text-amber uppercase">{children}</p>;
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg border border-cream/10 bg-espresso-2 p-6 md:p-8 ${className}`}>
      {children}
    </div>
  );
}

export default function Plan() {
  return (
    <main className="min-h-screen bg-espresso px-6 py-16 text-cream md:px-12">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* header */}
        <header className="pb-4">
          <p className="text-xs tracking-[0.5em] text-amber uppercase">
            NIU × HUGEL · Business plan · 2026 – 2031
          </p>
          <h1 className="font-display mt-4 text-4xl md:text-6xl">
            From the DJ booth to €12m.
          </h1>
          <p className="mt-4 max-w-2xl text-cream/65">
            Three channels, in strict order: the HUGEL circuit makes NIU the
            bottle-service mixer of the most photographed clubs on earth; that
            brand equity opens hotels &amp; bars through premium-mixer
            distribution; retail comes last, when the price reference is set.
            The same sequence Fever-Tree and Thomas Henry rode — applied to a
            category with no premium incumbent.
          </p>
        </header>

        {/* headline KPI tiles — the five-year arc */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            [eur(TOTALS.revenue), "year one — the proof", `${TOTALS.shows} shows · ${TOTALS.signed} standing club accounts`],
            [eurM(YEAR_TOTALS[2].total), "year three", "distributors + first retail listings"],
            [eurM(YEAR_TOTALS[4].total), "year five", "clubs + hotels & bars + retail compounding"],
            [`${(YEARS[4].pos / 1000).toFixed(1)}k`, "points of sale by Y5", "clubs, bars, hotels, retail doors"],
          ].map(([n, l, d]) => (
            <Card key={l as string} className="!p-5">
              <p className="font-display text-3xl text-amber md:text-4xl">{n}</p>
              <p className="mt-1 text-sm text-cream">{l}</p>
              <p className="mt-1 text-xs text-cream/45">{d}</p>
            </Card>
          ))}
        </div>

        {/* five-year build */}
        <div className="grid gap-6 lg:grid-cols-5">
          <Card className="lg:col-span-3">
            <Kicker>The five-year build — revenue by channel</Kicker>
            <p className="mb-4 text-sm text-cream/55">
              Y1 is the bottom-up tour model below. Y2–Y5 are channel cases from
              per-account run-rates: club account ~€11k/yr · hotel &amp; bar
              account ~€2k/yr · retail door ~€800/yr.
            </p>
            <YearStack
              data={YEARS.map((r) => ({
                label: r.y,
                sub: r.fy,
                note: r.note,
                segments: [
                  { name: "Premium clubs", value: r.clubs, color: SERIES.amber },
                  { name: "Hotels & bars", value: r.bars, color: SERIES.green },
                  { name: "Retail & e-com", value: r.retail, color: SERIES.blue },
                ],
              }))}
              format={eurM}
            />
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-cream/60">
              {[
                ["Premium clubs", SERIES.amber],
                ["Hotels & bars", SERIES.green],
                ["Retail & e-com", SERIES.blue],
              ].map(([n, c]) => (
                <span key={n} className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-[3px]" style={{ background: c }} />
                  {n}
                </span>
              ))}
            </div>
          </Card>
          <Card className="lg:col-span-2">
            <Kicker>Why these numbers are believable</Kicker>
            <div className="mt-4 space-y-3">
              {BENCHMARKS.map((b) => (
                <div key={b.k} className="flex items-end text-sm">
                  <span className="shrink-0 text-cream">{b.k}</span>
                  <span className="menu-leader" />
                  <span className="max-w-[55%] text-right text-cream/55">{b.v}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs leading-relaxed text-cream/40">
              Thomas Henry went €5m → €34m in six years selling premium mixers
              on-trade-first from Berlin. Fever-Tree built a ~£375m business on
              the 200 ml glass serve. NIU&apos;s Y5 case (€12.5m) asks for a
              fraction of either curve — in a category where no premium mixer
              exists yet.
            </p>
            <div className="mt-6 border-t border-cream/10 pt-4">
              <div className="grid grid-cols-3 gap-2 text-center">
                {YEARS.filter((_, i) => [0, 2, 4].includes(i)).map((r) => (
                  <div key={r.y}>
                    <p className="font-display text-xl text-cream">
                      {eurM(+(r.clubs + r.bars + r.retail).toFixed(2))}
                    </p>
                    <p className="text-[11px] tracking-wide text-cream/45 uppercase">{r.y} · FY {r.fy}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* channel strategy */}
        <div className="grid gap-6 md:grid-cols-3">
          {CHANNELS.map((c) => (
            <Card key={c.q}>
              <p className="text-xs tracking-[0.3em] text-amber uppercase">{c.q}</p>
              <p className="font-display mt-3 text-xl">{c.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">{c.text}</p>
            </Card>
          ))}
        </div>

        {/* ---- year one: the proof ---- */}
        <header className="pt-10 pb-2">
          <p className="text-xs tracking-[0.5em] text-amber uppercase">
            Year one in detail · FY Jul 2026 – Jun 2027
          </p>
          <h2 className="font-display mt-3 text-3xl md:text-5xl">
            The tour is the distribution.
          </h2>
          <p className="mt-4 max-w-2xl text-cream/65">
            Every HUGEL show puts NIU on a bottle-service table; every venue that
            reorders becomes a standing account. Calendar-only base case, anchored
            to the announced calendar — two active residencies and ~{TOTALS.shows}{" "}
            shows over the next 12 months. No direct-sales layer is assumed: this
            is what the tour carries on its own.
          </p>
        </header>

        {/* Y1 KPI tiles */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            [String(TOTALS.shows), "shows in 12 months", "Hï Ibiza weekly + Wynn Vegas + tour"],
            [String(TOTALS.venues), "venues seeded", `${TOTALS.signed} accounts signed · ${TOTALS.activeJun} active in Jun '27`],
            [`${Math.round(TOTALS.bottles / 1000)}k`, "bottles (club buy-in)", "tiered stocking + in-season reorders"],
            [eur(TOTALS.revenue), "FY base case", `range ${eur(RANGE.low)}–${eur(RANGE.high)} · briefing target €200k`],
          ].map(([n, l, d]) => (
            <Card key={l as string} className="!p-5">
              <p className="font-display text-3xl text-amber md:text-4xl">{n}</p>
              <p className="mt-1 text-sm text-cream">{l}</p>
              <p className="mt-1 text-xs text-cream/45">{d}</p>
            </Card>
          ))}
        </div>

        {/* charts */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <Kicker>Bottles moved per month</Kicker>
            <p className="mb-4 text-sm text-cream/55">
              Show-night stocking + standing-account reorders. Oct onwards modeled
              from the 2025–26 season pattern.
            </p>
            <MonthlyBars
              data={MONTHLY.map((r) => ({
                label: r.est ? `${r.m}*` : r.m,
                value: r.bottles,
                detail: `${r.shows} shows · ${r.active} active accounts`,
              }))}
              format={kBottles}
              unit="bottles"
            />
          </Card>
          <Card>
            <Kicker>Cumulative revenue vs target</Kicker>
            <p className="mb-4 text-sm text-cream/55">
              Club buy-in €1.80/bottle. The dashed €200k line is the briefing&apos;s
              Y1 target — the gap above the calendar-only base is the direct-sales
              layer the target assumes.
            </p>
            <CumulativeLine data={[...CUMULATIVE]} target={TARGET} targetLabel="€200k" format={eur} />
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* regions */}
          <Card>
            <Kicker>Where the shows are</Kicker>
            <p className="mb-6 text-sm text-cream/55">
              {TOTALS.shows} shows by region — the seeding map follows the calendar.
            </p>
            <RegionBars
              data={REGIONS.map((r, i) => ({
                ...r,
                color: [SERIES.amber, SERIES.green, SERIES.blue, SERIES.red][i],
              }))}
            />
            <div className="mt-8 border-t border-cream/10 pt-5">
              <Kicker>The funnel</Kicker>
              <div className="mt-3 grid grid-cols-4 gap-2 text-center">
                {[
                  [String(TOTALS.shows), "shows"],
                  [String(TOTALS.venues), "venues seeded"],
                  [`${TOTALS.conversion}%`, "convert"],
                  [String(TOTALS.signed), "accounts"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <p className="font-display text-xl text-cream">{n}</p>
                    <p className="text-[11px] text-cream/45 uppercase tracking-wide">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* assumptions */}
          <Card>
            <Kicker>Model assumptions</Kicker>
            <div className="mt-4 space-y-3">
              {ASSUMPTIONS.map((a) => (
                <div key={a.k} className="flex items-end text-sm">
                  <span className="shrink-0 text-cream">{a.k}</span>
                  <span className="menu-leader" />
                  <span className="max-w-[55%] text-right text-cream/55">{a.v}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs leading-relaxed text-cream/40">
              * Oct '26 – Jun '27 show counts are estimates extrapolated from the
              2025–26 pattern (Tulum/Zamna winters, Miami Music Week, Ibiza summers).
              Sensitivity: conversion 30/40/50% with lower/upper reorder rates gives
              {" "}{eur(RANGE.low)}–{eur(RANGE.high)} around the {eur(RANGE.base)} base.
              Reaching the €200k briefing target adds a direct venue-sales layer on
              top of the calendar — deliberately not modeled here. Deal terms,
              margins and legal are out of scope until the concept is agreed.
            </p>
          </Card>
        </div>

        {/* phases */}
        <div className="grid gap-6 md:grid-cols-3">
          {PHASES.map((p) => (
            <Card key={p.q}>
              <p className="text-xs tracking-[0.3em] text-amber uppercase">{p.q}</p>
              <p className="font-display mt-3 text-xl">{p.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">{p.text}</p>
            </Card>
          ))}
        </div>

        {/* schedule */}
        <Card>
          <Kicker>Announced calendar (as of Jul 4, 2026)</Kicker>
          <p className="mb-4 text-sm text-cream/55">
            Sourced from venue &amp; festival announcements (C) and tour aggregators (A).
            The two residencies anchor the plan.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-cream/15 text-xs tracking-widest text-cream/45 uppercase">
                  <th className="py-2 pr-4 font-normal">Date</th>
                  <th className="py-2 pr-4 font-normal">City</th>
                  <th className="py-2 pr-4 font-normal">Venue / event</th>
                  <th className="py-2 pr-4 font-normal">Type</th>
                  <th className="py-2 font-normal">Src</th>
                </tr>
              </thead>
              <tbody>
                {SHOWS.map((s) => (
                  <tr key={`${s.date}-${s.venue}`} className="border-b border-cream/5">
                    <td className="py-2.5 pr-4 whitespace-nowrap text-cream/80">{s.date}</td>
                    <td className="py-2.5 pr-4 text-cream/80">{s.city}</td>
                    <td className="py-2.5 pr-4 text-cream">{s.venue}</td>
                    <td className="py-2.5 pr-4 text-cream/60">{s.type}</td>
                    <td className="py-2.5 text-cream/40">{s.conf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <details className="mt-6">
            <summary className="cursor-pointer text-xs tracking-widest text-cream/45 uppercase">
              Monthly model — full table
            </summary>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-cream/15 text-xs tracking-widest text-cream/45 uppercase">
                    <th className="py-2 pr-4 font-normal">Month</th>
                    <th className="py-2 pr-4 font-normal">Shows</th>
                    <th className="py-2 pr-4 font-normal">Club nights</th>
                    <th className="py-2 pr-4 font-normal">Signed</th>
                    <th className="py-2 pr-4 font-normal">Active</th>
                    <th className="py-2 pr-4 font-normal">Bottles</th>
                    <th className="py-2 font-normal">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {MONTHLY.map((r) => (
                    <tr key={r.m} className="border-b border-cream/5 text-cream/70">
                      <td className="py-2 pr-4">{r.m}{r.est ? "*" : ""}</td>
                      <td className="py-2 pr-4">{r.shows}</td>
                      <td className="py-2 pr-4">{r.club}</td>
                      <td className="py-2 pr-4">{r.signed}</td>
                      <td className="py-2 pr-4">{r.active}</td>
                      <td className="py-2 pr-4">{r.bottles.toLocaleString("en")}</td>
                      <td className="py-2">€{Math.round(r.bottles * 1.8).toLocaleString("en")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        </Card>

        <p className="pt-2 pb-8 text-center text-xs text-cream/35">
          NIU · internal concept material · Y1 from the announced calendar (Hï Ibiza,
          Wynn Nightlife, festival lineups, tour aggregators) · Y2–Y5 are channel
          cases benchmarked on Thomas Henry / Fever-Tree, not commitments · Jul 2026
        </p>
      </div>
    </main>
  );
}
