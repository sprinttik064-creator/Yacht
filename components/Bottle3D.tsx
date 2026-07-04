"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* Label drawn to an offscreen canvas and wrapped around the bottle.
   Typography only — the botanical illustration arrives with the brandbook. */
function makeLabelTexture() {
  const c = document.createElement("canvas");
  c.width = 2048;
  c.height = 1024;
  const x = c.getContext("2d")!;
  x.fillStyle = "#f0e9dc";
  x.fillRect(0, 0, c.width, c.height);
  // faint paper grain
  x.fillStyle = "rgba(0,0,0,0.025)";
  for (let i = 0; i < 900; i++) {
    x.fillRect(Math.random() * c.width, Math.random() * c.height, 2, 2);
  }
  // printed area sits in the front-facing slice of the wrap
  const cx = c.width * 0.5;
  x.textAlign = "center";
  x.fillStyle = "#2a2016";
  x.font = "600 34px Arial";
  x.fillText("C O C O N U T   M I X E R", cx, 150);
  x.font = "900 300px 'Arial Black', Arial";
  x.fillText("NIU", cx, 470);
  x.strokeStyle = "#2a2016";
  x.lineWidth = 3;
  x.beginPath();
  x.moveTo(cx - 130, 540);
  x.lineTo(cx + 130, 540);
  x.stroke();
  x.fillStyle = "#b9853f";
  x.font = "900 84px Arial";
  x.fillText("P U R E", cx, 690);
  x.fillStyle = "#2a2016";
  x.font = "400 52px Arial";
  x.fillText("200 ml", cx, 800);
  x.font = "600 30px Arial";
  x.fillText("N A T U R A L   I N G R E D I E N T S", cx, 900);
  const t = new THREE.CanvasTexture(c);
  t.anisotropy = 8;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function lathePoints(scale = 1) {
  // NIU silhouette: straight body, soft shoulder, short neck (units ~ bottle radii)
  const pts: THREE.Vector2[] = [
    new THREE.Vector2(0.0, 0.0),
    new THREE.Vector2(0.5, 0.0),
    new THREE.Vector2(0.62, 0.08),
    new THREE.Vector2(0.62, 1.5),
    new THREE.Vector2(0.58, 1.68),
    new THREE.Vector2(0.45, 1.86),
    new THREE.Vector2(0.34, 2.0),
    new THREE.Vector2(0.32, 2.12),
    new THREE.Vector2(0.32, 2.34),
  ];
  return pts.map((p) => new THREE.Vector2(p.x * scale, p.y * scale + (scale < 1 ? 0.02 : 0)));
}

function Bottle({ progress }: { progress: React.RefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const labelTexture = useMemo(() => makeLabelTexture(), []);
  const glassGeo = useMemo(() => new THREE.LatheGeometry(lathePoints(1), 96), []);
  const liquidGeo = useMemo(() => new THREE.LatheGeometry(lathePoints(0.93), 96), []);

  useFrame((state) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    // scroll drives two full turns; idle breathing keeps it alive at rest
    g.rotation.y = (progress.current ?? 0) * Math.PI * 4 - 0.5 + Math.sin(t * 0.25) * 0.04;
    g.rotation.z = 0.02 * Math.sin(t * 0.4);
    g.position.y = -1.15 + 0.03 * Math.sin(t * 0.7);
  });

  return (
    <group ref={group}>
      {/* amber glass shell */}
      <mesh geometry={glassGeo}>
        <meshPhysicalMaterial
          color="#8a4a16"
          transmission={0.88}
          thickness={0.45}
          roughness={0.06}
          ior={1.5}
          specularIntensity={1}
          transparent
        />
      </mesh>
      {/* liquid glowing inside */}
      <mesh geometry={liquidGeo} scale={[1, 0.82, 1]}>
        <meshStandardMaterial
          color="#c26a1c"
          emissive="#9a5512"
          emissiveIntensity={0.6}
          roughness={0.3}
        />
      </mesh>
      {/* wrapped cream label; cylinder UVs start on the camera-facing side,
          so flip it half a turn to bring the printed slice to the front */}
      <mesh position={[0, 0.82, 0]} rotation={[0, Math.PI, 0]}>
        <cylinderGeometry args={[0.645, 0.645, 0.92, 96, 1, true]} />
        <meshStandardMaterial map={labelTexture} roughness={0.85} />
      </mesh>
      {/* ivory aluminum cap */}
      <mesh position={[0, 2.42, 0]}>
        <cylinderGeometry args={[0.345, 0.345, 0.24, 64]} />
        <meshStandardMaterial color="#e9e2d4" roughness={0.45} metalness={0.35} />
      </mesh>
    </group>
  );
}

function Scene({ progress }: { progress: React.RefObject<number> }) {
  return (
    <>
      <ambientLight intensity={0.4} color="#ffdcb0" />
      {/* warm key, bar-lamp side */}
      <spotLight position={[-3.5, 4, 3]} angle={0.55} penumbra={1} intensity={140} color="#ffc98a" />
      {/* red neon rim, right */}
      <pointLight position={[3, 1.6, -1.5]} intensity={50} color="#c4272e" />
      {/* warm backlight glowing through the glass */}
      <pointLight position={[0.3, 0.6, -2]} intensity={45} color="#ff9e3d" />
      {/* disco-silver front glint */}
      <pointLight position={[2.2, 2.6, 2.5]} intensity={16} color="#d9dce1" />
      <Bottle progress={progress} />
    </>
  );
}

export default function BottleSpin() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      return;
    }
    const st = ScrollTrigger.create({
      trigger: wrapRef.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        progressRef.current = self.progress;
      },
    });
    return () => st.kill();
  }, []);

  if (reduced) {
    return (
      <section className="bg-espresso">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-32 md:flex-row">
          <BottleCopy />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/bottle-pure.webp" alt="NIU bottle" className="w-full max-w-sm rounded-lg" />
        </div>
      </section>
    );
  }

  return (
    <div ref={wrapRef} className="relative h-[250vh] bg-espresso">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="pointer-events-none absolute top-1/2 right-[10%] h-[55vh] w-[55vh] -translate-y-1/2 rounded-full bg-amber/10 blur-[130px]" />
        <div className="mx-auto grid h-full w-full max-w-6xl grid-rows-[auto_1fr] items-center gap-0 px-6 md:grid-cols-2 md:grid-rows-1">
          <BottleCopy />
          <div className="h-[55vh] w-full md:h-[80vh]">
            <Canvas
              camera={{ position: [0, 0.35, 4.3], fov: 35 }}
              dpr={[1, 1.75]}
              gl={{ antialias: true, alpha: true }}
            >
              <Scene progress={progressRef} />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottleCopy() {
  return (
    <div className="pt-24 md:pt-0">
      <p className="mb-6 text-xs tracking-[0.5em] text-amber uppercase">The bottle</p>
      <h2 className="font-display text-4xl leading-tight md:text-6xl">
        200 ml of night. <br /> Give it a spin.
      </h2>
      <p className="mt-8 max-w-md text-lg leading-relaxed text-cream/75">
        Amber glass, aluminum cap, built for the rail and the ice bucket.
        Keep scrolling — the bottle turns with you.
      </p>
    </div>
  );
}
