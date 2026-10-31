// Tecnologias da seção Skills: uma por card, com a área em que se encaixa.
// TODO: revise as descrições e a lista "estudando agora".

export type Area = "Mobile" | "Backend" | "Web" | "DevOps";

export type Tech = { name: string; area: Area; desc: string; mark: string };

export const tech: Tech[] = [
  { name: "React Native", area: "Mobile", mark: "RN", desc: "Apps iOS e Android com uma base de código só." },
  { name: "Expo", area: "Mobile", mark: "EX", desc: "Build, publicação nas lojas e atualizações OTA." },
  { name: "Node.js", area: "Backend", mark: "NO", desc: "APIs, filas e integrações que aguentam o uso real." },
  { name: "Supabase", area: "Backend", mark: "SB", desc: "Auth, Realtime e Postgres com regras de acesso no banco." },
  { name: "PostgreSQL", area: "Backend", mark: "PG", desc: "Modelagem relacional e consultas em produção." },
  { name: "TypeScript", area: "Web", mark: "TS", desc: "Tipagem do app à API, para errar no editor e não no usuário." },
  { name: "Next.js", area: "Web", mark: "NX", desc: "Sites e painéis rápidos, com SEO e rotas de API." },
  { name: "React", area: "Web", mark: "RE", desc: "Interfaces em componentes, com estado previsível." },
  { name: "GSAP", area: "Web", mark: "GS", desc: "Animações e efeitos de scroll orquestrados em timeline." },
  { name: "GitHub Actions", area: "DevOps", mark: "GA", desc: "Testes e deploy automáticos a cada pull request." },
  { name: "Vercel", area: "DevOps", mark: "VC", desc: "Deploy com preview por branch e domínio próprio." },
  { name: "Docker", area: "DevOps", mark: "DK", desc: "Ambientes iguais na máquina e no servidor." },
];

export const studying = [
  { title: "Kubernetes", note: "Orquestração de containers" },
  { title: "Testes E2E no mobile", note: "Detox e Maestro" },
  { title: "IA aplicada", note: "LLMs em fluxos de produto" },
];
