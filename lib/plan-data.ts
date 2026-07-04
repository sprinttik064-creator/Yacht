/**
 * FY Jul 2026 – Jun 2027 seeding model built on HUGEL's touring calendar.
 * Announced shows are sourced (see SOURCES); Dec'26–Jun'27 show counts are
 * modeled from his 2025–26 seasonal pattern and labeled as estimates.
 * Revenue = bottles × €1.80 club buy-in (briefing). Conservative scenario.
 */

export const PRICE = 1.8; // € club buy-in per bottle

// Monthly model. bottles = show-night stocking (180/club night)
// + standing accounts (~150 bottles/week) + launch orders (300 per new account).
export const MONTHLY = [
  { m: "Jul", shows: 15, club: 12, accounts: 0,  bottles: 2160,  est: false },
  { m: "Aug", shows: 13, club: 12, accounts: 3,  bottles: 5010,  est: false },
  { m: "Sep", shows: 8,  club: 7,  accounts: 6,  bottles: 6060,  est: false },
  { m: "Oct", shows: 7,  club: 6,  accounts: 8,  bottles: 6880,  est: true },
  { m: "Nov", shows: 7,  club: 6,  accounts: 10, bottles: 8180,  est: true },
  { m: "Dec", shows: 7,  club: 6,  accounts: 12, bottles: 9480,  est: true },
  { m: "Jan", shows: 8,  club: 7,  accounts: 14, bottles: 10960, est: true },
  { m: "Feb", shows: 5,  club: 5,  accounts: 15, bottles: 10950, est: true },
  { m: "Mar", shows: 7,  club: 6,  accounts: 16, bottles: 11780, est: true },
  { m: "Apr", shows: 6,  club: 5,  accounts: 17, bottles: 12250, est: true },
  { m: "May", shows: 8,  club: 6,  accounts: 18, bottles: 13080, est: true },
  { m: "Jun", shows: 12, club: 10, accounts: 20, bottles: 15400, est: true },
] as const;

export const TOTALS = (() => {
  const bottles = MONTHLY.reduce((s, r) => s + r.bottles, 0);
  const shows = MONTHLY.reduce((s, r) => s + r.shows, 0);
  return {
    shows,
    bottles,
    revenue: Math.round(bottles * PRICE),
    accounts: MONTHLY[MONTHLY.length - 1].accounts,
    venues: 45,
  };
})();

export const CUMULATIVE = (() => {
  let acc = 0;
  return MONTHLY.map((r) => {
    acc += r.bottles * PRICE;
    return { label: r.m, value: Math.round(acc) };
  });
})();

export const TARGET = 200_000; // € — briefing's conservative Y1

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
  { k: "Show-night stocking", v: "180 bottles per club/day-club night" },
  { k: "Festivals", v: "sampling & brand only — €0 in this model" },
  { k: "Venue → account conversion", v: "40% of seeded venues reorder" },
  { k: "Standing account", v: "~150 bottles / week while in season" },
  { k: "Launch order", v: "300 bottles when an account converts" },
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
    text: "US club headlines (Echostage, Greek Theatre), LatAm spring run, Tulum/Zamna season, Miami Music Week. Every stop seeds a venue; accounts compound to ~16.",
  },
  {
    q: "Phase 3 · Apr–Jun 2027",
    title: "Season two at scale",
    text: "Ibiza year-two with NIU as the house mixer from opening week, EDC Week Vegas, EU festival season. Retail groundwork starts here — the path to the Y3 €2.4m case.",
  },
] as const;
