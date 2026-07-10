"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

/**
 * Client-side velvet rope for the private preview. The password is never
 * stored in the bundle — only its SHA-256 hash. This keeps casual visitors
 * and search engines out; it is not bank-grade security (the page assets
 * are still publicly served), which is fine for a pitch preview.
 */
const PASS_HASH =
  "012290a9e1752268cacad0878bce2644a3486a7327cd3f1dca9f67e561062eec";
const STORAGE_KEY = "niu-gate";

const sha256 = async (text: string) => {
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(text),
  );
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
};

export default function Gate({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<"checking" | "locked" | "open">(
    "checking",
  );
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      setState(localStorage.getItem(STORAGE_KEY) === PASS_HASH ? "open" : "locked");
    } catch {
      setState("locked");
    }
  }, []);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const value = inputRef.current?.value.trim() ?? "";
    if ((await sha256(value)) === PASS_HASH) {
      try {
        localStorage.setItem(STORAGE_KEY, PASS_HASH);
      } catch {
        /* private mode — still open for this visit */
      }
      setState("open");
    } else {
      setError(true);
      inputRef.current?.select();
    }
  };

  if (state === "open") return <>{children}</>;

  return (
    <div className="fixed inset-0 z-50 flex min-h-screen flex-col items-center justify-center bg-espresso px-6 text-center">
      {state === "locked" && (
        <>
          <p className="mb-6 text-xs tracking-[0.5em] text-amber uppercase">
            Private preview
          </p>
          <p className="font-display text-7xl tracking-tight text-cream md:text-8xl">
            NIU
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/50">
            This page is shared by invitation. Enter the access code to
            continue.
          </p>
          <form onSubmit={submit} className="mt-10 flex w-full max-w-xs flex-col gap-4">
            <input
              ref={inputRef}
              type="password"
              autoFocus
              placeholder="Access code"
              onChange={() => setError(false)}
              className={`w-full border-b bg-transparent px-1 py-3 text-center text-lg tracking-[0.2em] text-cream outline-none transition-colors placeholder:text-cream/25 ${
                error ? "border-neon" : "border-cream/30 focus:border-amber"
              }`}
            />
            <button
              type="submit"
              className="rounded-full bg-amber px-8 py-3.5 text-sm font-bold tracking-[0.15em] text-espresso uppercase transition-colors hover:bg-cream"
            >
              Enter
            </button>
            <p
              className={`text-xs tracking-widest text-neon uppercase transition-opacity ${
                error ? "opacity-100" : "opacity-0"
              }`}
            >
              Wrong code — try again
            </p>
          </form>
        </>
      )}
    </div>
  );
}
