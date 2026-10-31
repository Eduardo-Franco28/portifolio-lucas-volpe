"use client";

import { useRef } from "react";
import { useLoop } from "./useLoop";

// TODO: recria a tela principal do app real. Hoje é um app de rotas de exemplo.
const stops = [
  { street: "R. Augusta, 1200", hood: "Consolação", done: true },
  { street: "Av. Paulista, 900", hood: "Bela Vista", done: true },
  { street: "R. Oscar Freire, 455", hood: "Jardins", done: false, next: true },
  { street: "R. Teodoro Sampaio, 2100", hood: "Pinheiros", done: false },
];

export default function AppDemo() {
  const root = useRef<HTMLDivElement>(null);

  useLoop(root, (tl) => {
    tl.fromTo(".stop", { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.12 })
      .fromTo(".progress", { scaleX: 0.5 }, { scaleX: 0.5, duration: 0.01 }, 0)
      .fromTo(".chip-done-next", { autoAlpha: 0 }, { autoAlpha: 0, duration: 0.01 }, 0)
      .fromTo(".chip-next", { autoAlpha: 1 }, { autoAlpha: 1, duration: 0.01 }, 0)
      .fromTo(".toast", { yPercent: -160, autoAlpha: 0 }, { yPercent: -160, autoAlpha: 0, duration: 0.01 }, 0)
      .to(".cta", { scale: 0.94, duration: 0.12, ease: "power2.in" }, "+=0.8")
      .to(".cta", { scale: 1, duration: 0.3 })
      .to(".stop-next", { backgroundColor: "#e8eeff", duration: 0.25 }, "<")
      .to(".chip-next", { autoAlpha: 0, duration: 0.2 }, "<")
      .to(".chip-done-next", { autoAlpha: 1, duration: 0.2 }, "<")
      .to(".progress", { scaleX: 0.75, duration: 0.7, ease: "power2.inOut" }, "<")
      .to(".toast", { yPercent: 0, autoAlpha: 1, duration: 0.5 }, "-=0.3")
      .to(".toast", { yPercent: -160, autoAlpha: 0, duration: 0.4, ease: "power2.in" }, "+=1.6")
      .to(".stop", { autoAlpha: 0, y: -12, duration: 0.4, stagger: 0.05, ease: "power2.in" }, "+=0.4")
      .to(".stop-next", { backgroundColor: "#ffffff", duration: 0.01 });
  });

  return (
    <div ref={root} data-ui className="mx-auto w-[min(300px,82vw)]">
      <div className="rounded-[46px] bg-[#1c1c1a] p-[10px]">
        <div className="relative aspect-[9/19] overflow-hidden rounded-[37px] bg-[#f4f3ef] font-sans text-[#141413]">
          <div className="flex items-center justify-between px-6 pt-3.5 text-[12px] font-semibold">
            <span>9:41</span>
            <span className="h-[22px] w-[78px] rounded-full bg-[#1c1c1a]" aria-hidden="true" />
            <span className="tabular-nums">5G</span>
          </div>

          <div className="toast absolute inset-x-3 top-11 z-10 rounded-2xl opacity-0 bg-[#141413] px-4 py-3 text-[12px] text-white">
            Check-in salvo · sincronizado
          </div>

          <div className="px-5 pt-6">
            <p className="text-[12px] text-[#6b6a64]">Quinta, 30 out</p>
            <p className="mt-0.5 text-[26px] font-extrabold leading-none tracking-tight">Hoje</p>
            <p className="mt-2 text-[12px] text-[#6b6a64]">4 paradas · 18 km · sem sinal? funciona igual</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#dedcd5]">
              <div className="progress h-full origin-left scale-x-75 rounded-full bg-[#1f5bff]" />
            </div>
          </div>

          <ul className="mt-4 space-y-2 px-3">
            {stops.map((s) => (
              <li
                key={s.street}
                className={`stop flex items-center justify-between gap-2 rounded-2xl bg-white px-3.5 py-3 ${s.next ? "stop-next" : ""}`}
              >
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-semibold">{s.street}</p>
                  <p className="text-[11px] text-[#6b6a64]">{s.hood}</p>
                </div>
                {s.next ? (
                  <span className="relative grid shrink-0 text-[10.5px] font-semibold">
                    <span className="chip-next col-start-1 row-start-1 rounded-full bg-[#1f5bff] px-2 py-1 text-white opacity-0">
                      Próxima
                    </span>
                    <span className="chip-done-next col-start-1 row-start-1 rounded-full bg-[#dff3e4] px-2 py-1 text-[#1d6b34]">
                      Entregue
                    </span>
                  </span>
                ) : (
                  <span
                    className={`shrink-0 rounded-full px-2 py-1 text-[10.5px] font-semibold ${
                      s.done ? "bg-[#dff3e4] text-[#1d6b34]" : "bg-[#eceae4] text-[#6b6a64]"
                    }`}
                  >
                    {s.done ? "Entregue" : "Depois"}
                  </span>
                )}
              </li>
            ))}
          </ul>

          <div className="absolute inset-x-3 bottom-4">
            <div className="cta flex h-12 items-center justify-center rounded-2xl bg-[#141413] text-[14px] font-semibold text-white">
              Fazer check-in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
