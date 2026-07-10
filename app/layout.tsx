import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Gate from "@/components/Gate";

export const metadata: Metadata = {
  title: "NIU — Premium Coconut Mixer",
  description:
    "The anti-energy-drink: a premium coconut water mixer built for the bottle-service table. Served chilled, after midnight.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-espresso text-cream">
        <Gate>
          <SmoothScroll>{children}</SmoothScroll>
        </Gate>
      </body>
    </html>
  );
}
