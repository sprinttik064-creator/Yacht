import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NIU × HUGEL — Seeding Plan FY26/27",
  description:
    "Business plan dashboard: HUGEL's touring calendar as the NIU distribution engine.",
  robots: { index: false },
};

export default function PlanLayout({ children }: { children: React.ReactNode }) {
  return children;
}
