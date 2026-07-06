// Substance-by-substance hydration map — shared by the homepage science
// block and the /science research note.
export const SUBSTANCES = [
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
