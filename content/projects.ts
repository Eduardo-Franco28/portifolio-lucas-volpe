// Projetos: um objeto por projeto, na ordem em que aparecem.
// `demo` escolhe qual interface animada acompanha o projeto (components/demos).
// TODO: os três abaixo são exemplos de layout. Troque nome, texto e links.

export type DemoKind = "app" | "bot" | "realtime";

export type Project = {
  slug: string;
  name: string;
  kind: string;
  year: string;
  summary: string;
  stack: string[];
  links: { live?: string; github?: string };
  demo: DemoKind;
};

export const projects: Project[] = [
  {
    slug: "rota",
    name: "Rota",
    kind: "App mobile",
    year: "2026",
    summary:
      "App em React Native que organiza o dia de quem faz entregas: rota do dia, check-in em cada parada e funcionamento sem sinal.",
    stack: ["React Native", "Expo", "Supabase", "TypeScript"],
    links: { github: "https://github.com/TODO" },
    demo: "app",
  },
  {
    slug: "atende",
    name: "Atende",
    kind: "Bot de WhatsApp",
    year: "2025",
    summary:
      "Atendimento automático no WhatsApp: entende o pedido, consulta o estoque na API e só chama um humano quando precisa.",
    stack: ["Node.js", "WhatsApp Cloud API", "PostgreSQL"],
    links: { github: "https://github.com/TODO" },
    demo: "bot",
  },
  {
    slug: "painel",
    name: "Painel",
    kind: "Web em tempo real",
    year: "2025",
    summary:
      "Painel web que mostra pedidos chegando ao vivo, com Supabase Realtime e permissões por loja direto no banco.",
    stack: ["Next.js", "Supabase Realtime", "Row Level Security"],
    links: { live: "https://TODO", github: "https://github.com/TODO" },
    demo: "realtime",
  },
];
