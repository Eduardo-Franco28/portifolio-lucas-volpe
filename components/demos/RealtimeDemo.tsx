"use client";

import { useRef } from "react";
import { useLoop } from "./useLoop";

// TODO: troque pelas colunas e pelos dados reais do painel.
type Row = { id: string; store: string; value: string; status: "Novo" | "Pago" | "Separando" };

const incoming: Row[] = [
  { id: "#10293", store: "Vila Madalena", value: "R$ 184,90", status: "Novo" },
  { id: "#10292", store: "Moema", value: "R$ 62,00", status: "Novo" },
  { id: "#10291", store: "Pinheiros", value: "R$ 239,50", status: "Novo" },
];
const base: Row[] = [
  { id: "#10290", store: "Tatuapé", value: "R$ 98,40", status: "Pago" },
  { id: "#10289", store: "Pinheiros", value: "R$ 145,00", status: "Separando" },
  { id: "#10288", store: "Santana", value: "R$ 37,90", status: "Pago" },
  { id: "#10287", store: "Moema", value: "R$ 312,00", status: "Pago" },
];

const statusTone: Record<Row["status"], string> = {
  Novo: "bg-[#e3eaff] text-[#1f45c4]",
  Pago: "bg-[#dff3e4] text-[#1d6b34]",
  Separando: "bg-[#f4ecd8] text-[#7a5a12]",
};

function TableRow({ row, className = "" }: { row: Row; className?: string }) {
  return (
    <tr className={className}>
      <td className="py-0 pl-4">
        <div className="row-inner flex h-11 items-center font-mono text-[12px]">{row.id}</div>
      </td>
      <td className="hidden sm:table-cell">
        <div className="row-inner flex h-11 items-center">{row.store}</div>
      </td>
      <td>
        <div className="row-inner flex h-11 items-center justify-end tabular-nums">{row.value}</div>
      </td>
      <td className="pr-4">
        <div className="row-inner flex h-11 items-center justify-end">
          <span className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${statusTone[row.status]}`}>
            {row.status}
          </span>
        </div>
      </td>
    </tr>
  );
}

export default function RealtimeDemo() {
  const root = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);

  useLoop(root, (tl) => {
    const n = { v: 125 };
    const render = () => {
      if (count.current) count.current.textContent = String(Math.round(n.v));
    };
    tl.set(".new .row-inner", { height: 0, autoAlpha: 0 })
      .set(".new", { backgroundColor: "rgba(31,91,255,0)" })
      .set(n, { v: 125 })
      .call(render);

    // Os pedidos novos entram por cima, um de cada vez.
    [1, 2, 3].forEach((step) => {
      const row = `.new-${4 - step}`;
      tl.to(`${row} .row-inner`, { height: 44, autoAlpha: 1, duration: 0.5, ease: "power3.inOut" }, "+=0.9")
        .to(row, { backgroundColor: "rgba(31,91,255,0.14)", duration: 0.2 }, "<0.2")
        .to(n, { v: 125 + step, duration: 0.3, onUpdate: render }, "<")
        .to(row, { backgroundColor: "rgba(31,91,255,0)", duration: 1.2 });
    });
    tl.to(".dot", { scale: 1.6, autoAlpha: 0.4, duration: 0.6, yoyo: true, repeat: 5, ease: "sine.inOut" }, 0);
    tl.to({}, { duration: 1.8 });
  });

  return (
    <div ref={root} data-ui className="w-full max-w-[680px] overflow-hidden rounded-[14px] bg-[#fbfaf8] text-[13px] text-[#141413]">
      <div className="flex items-center gap-3 bg-[#e7e5df] px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#cfccc4]" />
          <span className="size-2.5 rounded-full bg-[#cfccc4]" />
          <span className="size-2.5 rounded-full bg-[#cfccc4]" />
        </span>
        <span className="flex-1 truncate rounded-md bg-[#f6f5f1] px-3 py-1 text-[12px] text-[#6b6a64]">
          painel.app/pedidos
        </span>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-4 px-4 pb-3 pt-5">
        <div>
          <p className="text-[18px] font-extrabold tracking-tight">Pedidos ao vivo</p>
          <p className="mt-1 flex items-center gap-2 text-[12px] text-[#6b6a64]">
            <span className="dot size-2 rounded-full bg-[#1d9b46]" aria-hidden="true" />
            Supabase Realtime · conectado
          </p>
        </div>
        <p className="text-right">
          <span className="block text-[11px] text-[#6b6a64]">Hoje</span>
          <span ref={count} className="text-[28px] font-extrabold leading-none tabular-nums">
            128
          </span>
        </p>
      </div>

      <table className="w-full border-collapse text-left">
        <thead className="bg-[#efede8] text-[11px] text-[#6b6a64]">
          <tr>
            <th className="py-2 pl-4 font-medium">Pedido</th>
            <th className="hidden py-2 font-medium sm:table-cell">Loja</th>
            <th className="py-2 text-right font-medium">Valor</th>
            <th className="py-2 pr-4 text-right font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {incoming.map((r, i) => (
            <TableRow key={r.id} row={r} className={`new new-${i + 1}`} />
          ))}
          {base.map((r) => (
            <TableRow key={r.id} row={r} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
