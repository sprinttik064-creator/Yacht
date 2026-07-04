"use client";

import dynamic from "next/dynamic";

// three.js only makes sense in the browser — skip SSR entirely
const BottleSpin = dynamic(() => import("./Bottle3D"), { ssr: false });

export default function BottleSpinLazy() {
  return <BottleSpin />;
}
