"use client";

import { useState } from "react";

/* Chart series colors validated for the dark surface (#14100C) with the
   dataviz palette checker: lightness band, chroma, CVD separation, contrast. */
export const SERIES = {
  amber: "#C97B2D",
  green: "#2FA35C",
  blue: "#2456E6",
  red: "#C4272E",
} as const;

const INK = "#f4ede3";
const INK_MUTED = "rgba(244,237,227,0.55)";
const INK_FAINT = "rgba(244,237,227,0.35)";
const GRID = "rgba(244,237,227,0.10)";

type Tip = { x: number; y: number; title: string; lines: string[] } | null;

function Tooltip({ tip }: { tip: Tip }) {
  if (!tip) return null;
  return (
    <div
      className="pointer-events-none absolute z-10 rounded-md border border-cream/15 bg-espresso px-3 py-2 text-xs shadow-xl"
      style={{ left: tip.x, top: tip.y, transform: "translate(-50%, -110%)" }}
    >
      <p className="font-semibold text-cream">{tip.title}</p>
      {tip.lines.map((l) => (
        <p key={l} className="text-cream/60">{l}</p>
      ))}
    </div>
  );
}

/** Monthly bars — one series, thin marks, rounded data ends, per-bar hover. */
export function MonthlyBars({
  data,
  format,
  color = SERIES.amber,
  unit,
}: {
  data: { label: string; value: number; detail?: string }[];
  format: (v: number) => string;
  color?: string;
  unit: string;
}) {
  const [tip, setTip] = useState<Tip>(null);
  const W = 720;
  const H = 240;
  const PAD = { l: 8, r: 8, t: 26, b: 24 };
  const max = Math.max(...data.map((d) => d.value)) * 1.15;
  const bw = (W - PAD.l - PAD.r) / data.length;
  const peak = data.reduce((a, b) => (b.value > a.value ? b : a), data[0]);

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={`Monthly ${unit}`}>
        {[0.25, 0.5, 0.75, 1].map((f) => (
          <line
            key={f}
            x1={PAD.l}
            x2={W - PAD.r}
            y1={PAD.t + (H - PAD.t - PAD.b) * (1 - f)}
            y2={PAD.t + (H - PAD.t - PAD.b) * (1 - f)}
            stroke={GRID}
            strokeWidth="1"
          />
        ))}
        {data.map((d, i) => {
          const h = ((H - PAD.t - PAD.b) * d.value) / max;
          const x = PAD.l + i * bw + bw * 0.22;
          const y = H - PAD.b - h;
          return (
            <g key={d.label}>
              <rect
                x={x}
                y={y}
                width={bw * 0.56}
                height={h}
                rx="4"
                fill={color}
                onMouseEnter={(e) => {
                  const host = (e.currentTarget.ownerSVGElement!.parentElement as HTMLElement).getBoundingClientRect();
                  const r = e.currentTarget.getBoundingClientRect();
                  setTip({
                    x: r.left + r.width / 2 - host.left,
                    y: r.top - host.top,
                    title: d.label,
                    lines: [format(d.value), ...(d.detail ? [d.detail] : [])],
                  });
                }}
                onMouseLeave={() => setTip(null)}
              />
              {d === peak && (
                <text x={x + bw * 0.28} y={y - 8} textAnchor="middle" fontSize="12" fill={INK}>
                  {format(d.value)}
                </text>
              )}
              <text
                x={PAD.l + i * bw + bw / 2}
                y={H - 6}
                textAnchor="middle"
                fontSize="10"
                fill={INK_FAINT}
              >
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>
      <Tooltip tip={tip} />
    </div>
  );
}

/** Cumulative line vs a dashed reference target. Crosshair-style hover per point. */
export function CumulativeLine({
  data,
  target,
  targetLabel,
  format,
}: {
  data: { label: string; value: number }[];
  target: number;
  targetLabel: string;
  format: (v: number) => string;
}) {
  const [tip, setTip] = useState<Tip>(null);
  const W = 720;
  const H = 260;
  const PAD = { l: 8, r: 64, t: 20, b: 24 };
  const max = Math.max(target, ...data.map((d) => d.value)) * 1.12;
  const xs = (i: number) => PAD.l + ((W - PAD.l - PAD.r) * i) / (data.length - 1);
  const ys = (v: number) => PAD.t + (H - PAD.t - PAD.b) * (1 - v / max);
  const path = data.map((d, i) => `${i ? "L" : "M"}${xs(i)},${ys(d.value)}`).join("");
  const area = `${path}L${xs(data.length - 1)},${H - PAD.b}L${xs(0)},${H - PAD.b}Z`;

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Cumulative revenue vs target">
        {[0.25, 0.5, 0.75, 1].map((f) => (
          <line key={f} x1={PAD.l} x2={W - PAD.r} y1={ys(max * f)} y2={ys(max * f)} stroke={GRID} strokeWidth="1" />
        ))}
        <path d={area} fill={SERIES.amber} opacity="0.12" />
        <path d={path} fill="none" stroke={SERIES.amber} strokeWidth="2" />
        <line
          x1={PAD.l}
          x2={W - PAD.r}
          y1={ys(target)}
          y2={ys(target)}
          stroke={INK_MUTED}
          strokeWidth="1.5"
          strokeDasharray="6 5"
        />
        <text x={W - PAD.r + 6} y={ys(target) + 4} fontSize="11" fill={INK_MUTED}>
          {targetLabel}
        </text>
        {data.map((d, i) => (
          <circle
            key={d.label}
            cx={xs(i)}
            cy={ys(d.value)}
            r="8"
            fill="transparent"
            onMouseEnter={(e) => {
              const host = (e.currentTarget.ownerSVGElement!.parentElement as HTMLElement).getBoundingClientRect();
              const r = e.currentTarget.getBoundingClientRect();
              setTip({
                x: r.left + r.width / 2 - host.left,
                y: r.top - host.top,
                title: d.label,
                lines: [format(d.value)],
              });
            }}
            onMouseLeave={() => setTip(null)}
          />
        ))}
        {data.map((d, i) =>
          i === data.length - 1 ? (
            <g key={d.label}>
              <circle cx={xs(i)} cy={ys(d.value)} r="4" fill={SERIES.amber} stroke="#14100C" strokeWidth="2" />
              <text x={xs(i) - 6} y={ys(d.value) - 10} textAnchor="end" fontSize="12" fill={INK}>
                {format(d.value)}
              </text>
            </g>
          ) : null,
        )}
        {data.map((d, i) => (
          <text key={d.label} x={xs(i)} y={H - 6} textAnchor="middle" fontSize="10" fill={INK_FAINT}>
            {d.label}
          </text>
        ))}
      </svg>
      <Tooltip tip={tip} />
    </div>
  );
}

/** Horizontal category bars with direct labels (fixed categorical order). */
export function RegionBars({
  data,
}: {
  data: { label: string; value: number; color: string; detail: string }[];
}) {
  const [tip, setTip] = useState<Tip>(null);
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="relative space-y-3">
      {data.map((d) => (
        <div key={d.label} className="flex items-center gap-3">
          <span className="w-36 shrink-0 text-xs tracking-wide text-cream/60 uppercase">{d.label}</span>
          <div className="h-4 flex-1">
            <div
              className="h-4 rounded-[4px]"
              style={{ width: `${(d.value / max) * 100}%`, background: d.color, minWidth: 8 }}
              onMouseEnter={(e) => {
                const host = (e.currentTarget.closest(".relative") as HTMLElement).getBoundingClientRect();
                const r = e.currentTarget.getBoundingClientRect();
                setTip({
                  x: r.left + r.width / 2 - host.left,
                  y: r.top - host.top,
                  title: d.label,
                  lines: [`${d.value} shows`, d.detail],
                });
              }}
              onMouseLeave={() => setTip(null)}
            />
          </div>
          <span className="w-10 text-right text-sm text-cream">{d.value}</span>
        </div>
      ))}
      <Tooltip tip={tip} />
    </div>
  );
}
