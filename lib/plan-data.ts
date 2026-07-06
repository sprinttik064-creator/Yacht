/**
 * FY Jul 2026 – Jun 2027 seeding model built on HUGEL's touring calendar.
 * Announced shows are sourced (see SOURCES); Dec'26–Jun'27 show counts are
 * modeled from his 2025–26 seasonal pattern and labeled as estimates.
 *
 * Bottom-up mechanics (all knobs listed in ASSUMPTIONS):
 * - Show-night stocking tiered by venue class: superclub/day-club 200,
 *   large club 120, standard room/beach 80 bottles per night.
 * - 40 unique venues seeded over the year; 40% convert to standing
 *   accounts (16 signed by Jun '27) in three regional cohorts with real
 *   seasonality: Med/Ibiza active May–Sep, Tulum/LatAm active Dec–Apr,
 *   US/Vegas year-round.
 * - Standing accounts reorder by tier: superclub ~200 bottles/week,
 *   standard ~100/week; launch order 500/300; the conversion month counts
 *   the launch order plus half a month of reorders (no double-dip).
 *
 * Revenue = bottles × €1.80 club buy-in. This is the CALENDAR-ONLY base
 * case: it shows what the tour carries organically. The briefing's €200k
 * Y1 target additionally assumes a direct venue-sales layer on top of the
 * calendar — kept out of this model on purpose.
 */

export const PRICE = 1.8; // € club buy-in per bottle

export const MONTHLY = [
  { m: "Jul", shows: 15, club: 12, signed: 0,  active: 0,  bottles: 1800, est: false },
  { m: "Aug", shows: 13, club: 12, signed: 2,  active: 2,  bottles: 3088, est: false },
  { m: "Sep", shows: 8,  club: 7,  signed: 4,  active: 4,  bottles: 3867, est: false },
  { m: "Oct", shows: 7,  club: 6,  signed: 6,  active: 3,  bottles: 2416, est: true },
  { m: "Nov", shows: 7,  club: 6,  signed: 7,  active: 4,  bottles: 2767, est: true },
  { m: "Dec", shows: 7,  club: 6,  signed: 9,  active: 6,  bottles: 4213, est: true },
  { m: "Jan", shows: 8,  club: 7,  signed: 11, active: 8,  bottles: 5294, est: true },
  { m: "Feb", shows: 5,  club: 5,  signed: 12, active: 9,  bottles: 5245, est: true },
  { m: "Mar", shows: 7,  club: 6,  signed: 13, active: 10, bottles: 6216, est: true },
  { m: "Apr", shows: 6,  club: 5,  signed: 14, active: 11, bottles: 6664, est: true },
  { m: "May", shows: 8,  club: 6,  signed: 15, active: 11, bottles: 6944, est: true },
  { m: "Jun", shows: 12, club: 10, signed: 16, active: 12, bottles: 7977, est: true },
] as const;

export const TOTALS = (() => {
  const bottles = MONTHLY.reduce((s, r) => s + r.bottles, 0);
  const shows = MONTHLY.reduce((s, r) => s + r.shows, 0);
  return {
    shows,
    bottles,
    revenue: Math.round(bottles * PRICE),
    signed: MONTHLY[MONTHLY.length - 1].signed,
    activeJun: MONTHLY[MONTHLY.length - 1].active,
    venues: 40,
    conversion: Math.round((MONTHLY[MONTHLY.length - 1].signed / 40) * 100), // = 40
  };
})();

export const CUMULATIVE = (() => {
  let acc = 0;
  return MONTHLY.map((r) => {
    acc += r.bottles * PRICE;
    return { label: r.m, value: Math.round(acc) };
  });
})();

// Briefing's conservative Y1 target — shown as a reference line. The gap
// between the calendar-only base and this line is the direct-sales layer.
export const TARGET = 200_000;

// Sensitivity, stated not charted: conversion 30% / 40% / 50% with lower
// and upper reorder rates.
export const RANGE = { low: 75_000, base: TOTALS.revenue, high: 145_000 };

export const REGIONS = [
  { label: "Europe · Ibiza", value: 45, detail: "Hï Thursdays + EU festivals, Jun–Sep core" },
  { label: "North America", value: 32, detail: "Wynn Las Vegas residency + US club headlines" },
  { label: "LatAm · Mexico", value: 18, detail: "Tulum/Zamna season, CO/BR/AR runs" },
  { label: "Other", value: 8, detail: "Turkey, Greece islands, Middle East, Asia" },
] as const;

// Announced, dated shows (as of 2026-07-04). C = venue/promoter source,
// A = aggregator listing.
export const SHOWS = [
  { date: "Thursdays · Jul 2 – Sep 24", city: "Ibiza", venue: "Hï Ibiza — Make The Girls Dance (residency, 13 nights)", type: "Residency", conf: "C" },
  { date: "Jul 4", city: "Las Vegas", venue: "Encore Beach Club (Wynn residency)", type: "Day-club", conf: "C" },
  { date: "Jul 10", city: "Salzburgring", venue: "Electric Love Festival", type: "Festival", conf: "A" },
  { date: "Jul 17–19", city: "Weeze", venue: "Parookaville", type: "Festival", conf: "C" },
  { date: "Jul 17–26", city: "Boom", venue: "Tomorrowland — The Library", type: "Festival", conf: "C" },
  { date: "Jul 26", city: "Mykonos", venue: "Cavo Paradiso", type: "Club", conf: "A" },
  { date: "Aug 6–9", city: "Cluj-Napoca", venue: "UNTOLD Festival", type: "Festival", conf: "C" },
  { date: "Aug 8", city: "Las Vegas", venue: "EBC at Night (Wynn)", type: "Club", conf: "A" },
  { date: "Aug 22", city: "Toronto", venue: "RBC Amphitheatre", type: "Headline", conf: "A" },
  { date: "Aug 23", city: "Brooklyn", venue: "Brooklyn Army Terminal, Pier 4", type: "Headline", conf: "C" },
  { date: "Aug 30", city: "Çeşme", venue: "Before Sunset Beach Resort", type: "Beach club", conf: "A" },
  { date: "Sep 5", city: "Washington, DC", venue: "Echostage", type: "Club", conf: "A" },
  { date: "Sep 13", city: "Chicago", venue: "Navy Pier", type: "Open-air", conf: "A" },
  { date: "Oct 2–3", city: "Napa", venue: "Palm Tree Music Festival (w/ Kygo, Zedd)", type: "Festival", conf: "C" },
  { date: "Oct 9", city: "Denver", venue: "The Junkyard", type: "Club", conf: "A" },
  { date: "Nov 7", city: "Berkeley", venue: "Greek Theatre", type: "Headline", conf: "C" },
] as const;

export const ASSUMPTIONS = [
  { k: "Club buy-in", v: "€1.80 per bottle (briefing)" },
  { k: "Show-night stocking", v: "by venue class: 200 superclub · 120 large · 80 standard" },
  { k: "Festivals", v: "sampling & brand only — €0 in this model" },
  { k: "Venue → account conversion", v: "40% of 40 seeded venues → 16 accounts" },
  { k: "Standing account", v: "~200 btl/wk superclub · ~100 btl/wk standard, in season" },
  { k: "Seasonality", v: "Ibiza/Med May–Sep · Tulum/LatAm Dec–Apr · US year-round" },
  { k: "Launch order", v: "500 / 300 bottles + half-month reorders in month one" },
  { k: "Bottle-service price to guest", v: "€9–12 — the club keeps the margin" },
] as const;

export const PHASES = [
  {
    q: "Phase 1 · Jul–Sep 2026",
    title: "Ibiza proof of concept",
    text: "13 remaining Hï Ibiza Thursdays (~6,000 guests each) + Wynn Las Vegas dates. NIU on the rail at every HUGEL table; first standing accounts signed from venues that reorder.",
  },
  {
    q: "Phase 2 · Oct 2026 – Mar 2027",
    title: "Follow the calendar",
    text: "US club headlines (Echostage, Greek Theatre), LatAm spring run, Tulum/Zamna season, Miami Music Week. Every stop seeds a venue; signed accounts compound to ~13.",
  },
  {
    q: "Phase 3 · Apr–Jun 2027",
    title: "Season two at scale",
    text: "Ibiza year-two with NIU as the house mixer from opening week, EDC Week Vegas, EU festival season. Retail groundwork starts here — the path to the Y3 €2.4m case.",
  },
] as const;
