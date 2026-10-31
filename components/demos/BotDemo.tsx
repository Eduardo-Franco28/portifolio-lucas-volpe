"use client";

import { useRef } from "react";
import { useLoop } from "./useLoop";

// TODO: troque pela conversa e pelos logs reais do bot.
const log = [
  { t: "14:02:11", line: "POST /webhook", tail: "200 · 31ms" },
  { t: "14:02:11", line: "intent → estoque.consulta", tail: "0.94" },
  { t: "14:02:12", line: "GET /estoque?sku=TN-42-PT", tail: "200 · 12ms" },
  { t: "14:02:12", line: "reply → template.estoque", tail: "enviado" },
  { t: "14:02:19", line: "POST /reservas", tail: "201 · 18ms" },
];

export default function BotDemo() {
  const root = useRef<HTMLDivElement>(null);

  useLoop(root, (tl) => {
    tl.set(".msg, .log-line, .typing", { autoAlpha: 0, y: 10 })
      .to(".msg-1", { autoAlpha: 1, y: 0, duration: 0.4 }, 0.3)
      .to(".log-1", { autoAlpha: 1, y: 0, duration: 0.3 }, "+=0.15")
      .to(".typing", { autoAlpha: 1, y: 0, duration: 0.25 })
      .to(".log-2", { autoAlpha: 1, y: 0, duration: 0.3 }, "+=0.2")
      .to(".log-3", { autoAlpha: 1, y: 0, duration: 0.3 }, "+=0.25")
      .to(".typing", { autoAlpha: 0, duration: 0.15 }, "+=0.2")
      .to(".msg-2", { autoAlpha: 1, y: 0, duration: 0.4 }, "<")
      .to(".log-4", { autoAlpha: 1, y: 0, duration: 0.3 }, "<0.1")
      .to(".msg-3", { autoAlpha: 1, y: 0, duration: 0.4 }, "+=0.3")
      .to(".reply-ok", { scale: 0.92, duration: 0.12, ease: "power2.in" }, "+=0.9")
      .to(".reply-ok", { scale: 1, duration: 0.25 })
      .to(".msg-4", { autoAlpha: 1, y: 0, duration: 0.4 }, "+=0.15")
      .to(".log-5", { autoAlpha: 1, y: 0, duration: 0.3 }, "<0.1")
      .to(".msg-5", { autoAlpha: 1, y: 0, duration: 0.4 }, "+=0.5")
      .to(".msg, .log-line", { autoAlpha: 0, duration: 0.35, ease: "power2.in" }, "+=2.2");
  });

  return (
    <div ref={root} data-ui className="grid w-full max-w-[640px] gap-3 sm:grid-cols-[1.05fr_1fr]">
      {/* Conversa */}
      <div className="overflow-hidden rounded-[22px] bg-[#efeae2] text-[13px] leading-snug text-[#141413]">
        <div className="flex items-center gap-3 bg-[#1f2c34] px-4 py-3 text-white">
          <span className="grid size-8 place-items-center rounded-full bg-[#1f5bff] text-[11px] font-bold">A</span>
          <div>
            <p className="text-[13px] font-semibold">Loja Pinheiros</p>
            <p className="text-[11px] text-[#9fb0b8]">online</p>
          </div>
        </div>
        <div className="flex min-h-[330px] flex-col gap-2 p-3">
          <p className="msg msg-1 max-w-[80%] self-end rounded-xl rounded-tr-sm bg-[#d9fdd3] px-3 py-2">
            Oi! Tem o tênis 42 preto?
          </p>
          <p className="typing max-w-[80%] self-start rounded-xl rounded-tl-sm bg-white px-3 py-2 tracking-[0.3em] text-[#8a8a85] opacity-0">
            •••
          </p>
          <p className="msg msg-2 max-w-[82%] self-start rounded-xl rounded-tl-sm bg-white px-3 py-2">
            Tenho sim: 3 pares na loja de Pinheiros. Quer que eu reserve um?
          </p>
          <div className="msg msg-3 flex gap-2 self-start">
            <span className="reply-ok rounded-full bg-white px-3 py-1.5 font-semibold text-[#1f5bff]">Reservar</span>
            <span className="rounded-full bg-white px-3 py-1.5 font-semibold text-[#1f5bff]">Falar com alguém</span>
          </div>
          <p className="msg msg-4 max-w-[80%] self-end rounded-xl rounded-tr-sm bg-[#d9fdd3] px-3 py-2">Reservar</p>
          <p className="msg msg-5 max-w-[82%] self-start rounded-xl rounded-tl-sm bg-white px-3 py-2">
            Pronto! Reservado até as 18h. Código <b>4821</b>.
          </p>
        </div>
      </div>

      {/* Logs do servidor */}
      <div className="flex flex-col overflow-hidden rounded-[22px] bg-[#111110] font-mono text-[11.5px] leading-relaxed text-[#d8d6cf]">
        <div className="flex items-center justify-between px-4 py-3 text-[11px] text-[#7d7b74]">
          <span>api · node</span>
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-[#7dff9b]" aria-hidden="true" />
            produção
          </span>
        </div>
        <ul className="flex-1 space-y-2 px-4 pb-4">
          {log.map((l, i) => (
            <li key={i} className={`log-line log-${i + 1} grid grid-cols-[auto_1fr] gap-x-3`}>
              <span className="text-[#6b6a64]">{l.t}</span>
              <span className="min-w-0">
                <span className="block truncate">{l.line}</span>
                <span className="text-[#5c86ff]">{l.tail}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
