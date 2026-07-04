import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "NIU — Botanical Tonic",
  description:
    "Coconut water reimagined as a bar-grade botanical tonic. Served chilled, after midnight.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-espresso text-cream">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
