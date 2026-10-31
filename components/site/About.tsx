"use client";

import { useRef } from "react";
import Image from "next/image";
import { profile } from "@/content/profile";
import { useReveal } from "@/lib/useReveal";

// Sobre mim: foto e texto lado a lado, centralizados na página.
export default function About() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);
  const { about, photo } = profile;

  return (
    <section
      id="sobre"
      ref={root}
      aria-labelledby="sobre-tv"
      className="tv-panel px-gutter py-[clamp(96px,12vw,200px)]"
    >
      <div className="tv-container grid items-center gap-x-[clamp(32px,6vw,96px)] gap-y-14 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div data-reveal-group className="mx-auto w-full max-w-[460px]">
          <div data-reveal className="rounded-[28px] bg-[#1b2338] p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-[var(--blue)]">
              {photo ? (
                <div data-fx-parallax="7" className="absolute inset-x-0 -top-[9%] h-[118%]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 768px) 460px, 100vw"
                    className="object-cover object-[50%_35%]"
                  />
                </div>
              ) : (
                <p className="tv-mono absolute inset-x-0 bottom-0 z-10 p-4 text-small text-white">
                  Foto 4:5 · 1200 × 1500
                </p>
              )}
            </div>
          </div>
        </div>

        <div data-reveal-group>
          <h2 id="sobre-tv" data-split className="tv-display text-[clamp(3.5rem,1.5rem+6vw,7rem)]">
            Sobre mim
          </h2>
          <p data-reveal className="mt-8 max-w-[38ch] text-[clamp(1.25rem,1rem+1vw,1.875rem)] leading-[1.35]">
            {about.body.map((part, i) =>
              typeof part === "string" ? (
                part
              ) : (
                <span
                  key={i}
                  className="rounded-[4px] bg-[var(--blue-2)] px-[0.14em] text-white [box-decoration-break:clone]"
                >
                  {part.mark}
                </span>
              ),
            )}
          </p>

          <dl data-reveal className="mt-12 grid gap-6 sm:grid-cols-3">
            {about.facts.map((f) => (
              <div key={f.label} className="rounded-[18px] bg-white/[0.04] p-4">
                <dt className="tv-mono text-small text-muted">{f.label}</dt>
                <dd className="mt-2 text-[1.25rem] font-bold leading-tight">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
