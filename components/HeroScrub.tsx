"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 242;
const frameSrc = (i: number) => `/hero/${String(i + 1).padStart(4, "0")}.webp`;

/**
 * Scroll-scrubbed hero: 242 frames (Kling v2 videos: bar push-in → Pure bottle
 * → dive into the liquid) drawn to a canvas, frame index driven by scroll
 * progress across a 500vh pinned section. The last frame matches the About
 * section's liquid-wall background, so unpinning is seamless.
 */
export default function HeroScrub() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      return;
    }

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const images: (HTMLImageElement | null)[] = new Array(FRAME_COUNT).fill(null);
    let currentFrame = 0;
    let drawnFrame = -1;
    let rafId = 0;
    let destroyed = false;

    // Horizontal focal point of the subject per frame, as a fraction of frame
    // width. On portrait screens the 16:9 frame is cropped hard, so the crop
    // window tracks the bottle: centered on the 4-bottle lineup, drifting right
    // as the camera settles on the Pure bottle (~0.73), then easing back to
    // center as the dive dissolves into the abstract liquid.
    const focalX = (i: number) => {
      if (i <= 120) return 0.5 + (0.73 - 0.5) * (i / 120);
      if (i <= 200) return 0.73 + (0.5 - 0.73) * ((i - 121) / 79);
      return 0.5;
    };

    const draw = () => {
      // nearest loaded frame at or below the requested one, so scrubbing
      // never blanks while later frames are still downloading
      let idx = currentFrame;
      while (idx > 0 && !images[idx]) idx--;
      const img = images[idx];
      if (img && idx !== drawnFrame) {
        drawnFrame = idx;
        const cw = canvas.width;
        const ch = canvas.height;
        const scale = Math.max(cw / img.width, ch / img.height);
        const w = img.width * scale;
        const h = img.height * scale;
        const maxOff = Math.max(0, w - cw);
        const x = Math.min(maxOff, Math.max(0, focalX(idx) * w - cw / 2));
        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, -x, (ch - h) / 2, w, h);
      }
      rafId = requestAnimationFrame(draw);
    };

    const resize = () => {
      canvas.width = window.innerWidth * Math.min(window.devicePixelRatio, 2);
      canvas.height = window.innerHeight * Math.min(window.devicePixelRatio, 2);
      drawnFrame = -1;
    };
    resize();
    window.addEventListener("resize", resize);

    // Priority load: first frame, then every 8th as a coarse pass, then the rest
    const load = (i: number) =>
      new Promise<void>((res) => {
        if (images[i] || destroyed) return res();
        const img = new Image();
        img.onload = () => {
          images[i] = img;
          res();
        };
        img.onerror = () => res();
        img.src = frameSrc(i);
      });

    (async () => {
      await load(0);
      const coarse = [];
      for (let i = 0; i < FRAME_COUNT; i += 8) coarse.push(load(i));
      await Promise.all(coarse);
      for (let i = 0; i < FRAME_COUNT; i++) void load(i);
    })();

    rafId = requestAnimationFrame(draw);

    const st = ScrollTrigger.create({
      trigger: wrapRef.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        currentFrame = Math.min(
          FRAME_COUNT - 1,
          Math.round(self.progress * (FRAME_COUNT - 1)),
        );
        if (overlayRef.current) {
          // headline melts away over the first 15% of the scrub
          const o = Math.max(0, 1 - self.progress / 0.15);
          overlayRef.current.style.opacity = String(o);
          overlayRef.current.style.visibility = o === 0 ? "hidden" : "visible";
        }
      },
    });

    return () => {
      destroyed = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      st.kill();
    };
  }, []);

  if (reduced) {
    return (
      <section className="relative h-screen">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/bottle-original.webp"
          alt="NIU botanical tonic bottle on a bar counter"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <HeroCopy />
      </section>
    );
  }

  return (
    <div ref={wrapRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <canvas ref={canvasRef} className="h-full w-full" />
        <div ref={overlayRef}>
          <HeroCopy />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
          <span className="animate-bounce text-xs tracking-[0.4em] text-cream/60 uppercase">
            Scroll
          </span>
        </div>
      </div>
    </div>
  );
}

function HeroCopy() {
  return (
    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
      <p className="mb-4 text-xs tracking-[0.5em] text-amber uppercase">
        Premium coconut mixer
      </p>
      <h1 className="font-display text-[clamp(5rem,18vw,16rem)] leading-none tracking-tight text-cream">
        NIU
      </h1>
      <p className="mt-6 max-w-md px-6 text-sm tracking-widest text-cream/80 uppercase">
        The anti-energy-drink. Served after midnight
      </p>
    </div>
  );
}
