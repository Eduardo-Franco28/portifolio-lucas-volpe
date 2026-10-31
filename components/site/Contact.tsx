"use client";

import { useRef } from "react";
import { profile } from "@/content/profile";
import { useReveal } from "@/lib/useReveal";
import CopyEmail from "@/components/ui/CopyEmail";

// Contato: o painel azul de sempre, num tom mais calmo. Convite de um lado,
// e-mail e links do outro.
export default function Contact() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);
  const [user, domain] = profile.email.split("@");

  const links = [
    { href: profile.links.linkedin, label: "LinkedIn", external: true },
    { href: profile.links.github, label: "GitHub", external: true },
    { href: profile.links.cv, label: "Currículo", external: false },
  ];

  return (
    <section id="contato" ref={root} aria-labelledby="contato-tv" className="px-gutter pb-[clamp(64px,8vw,120px)]">
      <div
        data-fx-zoom
        className="tv-blue tv-container grid gap-x-12 gap-y-12 overflow-hidden rounded-[32px] px-6 py-14 sm:px-12 sm:py-16 lg:grid-cols-12 lg:items-end"
        data-reveal-group
      >
        <div className="lg:col-span-6">
          <p data-reveal className="tv-label text-white">
            <span className="live-dot size-2 rounded-full bg-[var(--yellow)]" aria-hidden="true" />
            Contato
          </p>
          <h2
            id="contato-tv"
            data-split
            className="mt-5 text-[clamp(2.5rem,1.5rem+3.2vw,4.5rem)] font-bold leading-[1.04] tracking-[-0.035em]"
          >
            {profile.contact.title}
          </h2>
          <p data-reveal className="mt-5 max-w-[38ch] text-lead leading-snug text-[var(--muted)]">
            {profile.contact.line}
          </p>
        </div>

        <div className="lg:col-span-6">
          <p data-reveal className="text-small text-[var(--muted)]">
            Escreva para
          </p>
          <a
            data-reveal
            href={`mailto:${profile.email}`}
            className="mt-2 block break-words text-[clamp(1.75rem,1rem+2.2vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] underline decoration-white/30 decoration-2 underline-offset-[8px] transition-[text-decoration-color] hover:decoration-white"
          >
            {user}
            <wbr />@{domain}
          </a>

          <div data-reveal className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
            <CopyEmail email={profile.email} className="rounded-full font-semibold" />
            <ul className="flex flex-wrap gap-x-6 gap-y-2 font-semibold">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="underline decoration-2 underline-offset-[6px] hover:decoration-[var(--yellow)]"
                    {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
