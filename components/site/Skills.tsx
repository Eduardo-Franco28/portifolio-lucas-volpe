"use client";

import { useRef, type PointerEvent } from "react";
import { tech, studying } from "@/content/tech";
import { useReveal } from "@/lib/useReveal";
import SkillIcon from "./SkillIcon";

// O brilho do card segue o mouse.
const glow = (e: PointerEvent<HTMLLIElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

// Skills: um card por tecnologia, com ícone desenhado que se refaz no hover.
export default function Skills() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section
      id="skills"
      ref={root}
      aria-labelledby="skills-tv"
      className="relative overflow-hidden px-gutter py-[clamp(96px,12vw,200px)]"
    >
      <p
        aria-hidden="true"
        data-fx-drift
        className="tv-display pointer-events-none absolute left-1/2 top-[clamp(40px,6vw,96px)] -translate-x-1/2 select-none whitespace-nowrap text-[clamp(8rem,24vw,26rem)] text-[var(--line)]"
      >
        Stack
      </p>

      <div className="tv-container relative grid gap-6 md:grid-cols-12 md:items-end" data-reveal-group>
        <div className="md:col-span-7">
          <p data-reveal className="tv-label">
            Skills
          </p>
          <h2 id="skills-tv" data-split className="tv-display mt-5 text-[clamp(3.5rem,1.5rem+6vw,7.5rem)]">
            Ferramentas do dia a dia
          </h2>
        </div>
        <p data-reveal className="max-w-[38ch] text-lead leading-snug text-[var(--muted)] md:col-span-5">
          O que eu uso para tirar a ideia do papel, do app no celular ao deploy.
        </p>
      </div>

      <ul className="tv-container relative mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" data-reveal-group>
        {tech.map((t) => (
          <li
            key={t.name}
            data-reveal
            tabIndex={0}
            onPointerMove={glow}
            className="skill-card flex flex-col rounded-[22px] bg-[var(--surface)] p-6 outline outline-1 outline-[var(--line)] transition-[transform,outline-color] duration-300 hover:-translate-y-1 hover:outline-[var(--accent)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            <SkillIcon name={t.name} />
            <h3 className="mt-5 text-[1.25rem] font-bold leading-tight">{t.name}</h3>
            <p className="mt-2 flex-1 text-[0.95rem] text-[var(--muted)]">{t.desc}</p>
            <p className="mt-5 text-[0.8125rem] font-semibold text-[var(--muted)]">{t.area}</p>
          </li>
        ))}
      </ul>

      <div className="tv-container relative mt-16" data-reveal-group>
        <h3 data-reveal className="text-[1.25rem] font-bold">
          Estudando agora
        </h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {studying.map((s) => (
            <li key={s.title} data-reveal className="flex items-center gap-4 rounded-[18px] bg-[var(--surface-2)] p-4">
              <span className="live-dot size-2 shrink-0 rounded-full bg-[var(--blue-2)]" aria-hidden="true" />
              <span>
                <span className="block font-semibold">{s.title}</span>
                <span className="block text-small text-[var(--muted)]">{s.note}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
