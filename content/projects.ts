// Projetos: um objeto por projeto, na ordem em que aparecem.
// `demo` escolhe qual tela animada acompanha o projeto (components/demos).
// A topologia de rede do Packet Tracer tem a própria seção (components/site/Network.tsx).
// TODO: confirme nome, ano, tecnologias e links de cada projeto.

export type DemoKind = "lab" | "routine";

export type Project = {
  slug: string;
  name: string;
  kind: string;
  year?: string;
  summary: string;
  stack: string[];
  links: { live?: string; github?: string };
  demo: DemoKind;
};

export const projects: Project[] = [
  {
    slug: "laboratorios",
    name: "Laboratórios", // TODO: nome do sistema
    kind: "Sistema para o setor de TI",
    summary:
      "Sistema para o setor de TI controlar os computadores dos laboratórios: quais máquinas estão livres, em uso ou em manutenção, e qual laboratório está reservado para cada aula.",
    stack: ["JavaScript", "HTML", "CSS"], // TODO: confirme
    links: {},
    demo: "lab",
  },
  {
    slug: "rotina",
    name: "Rotina", // TODO: nome do app
    kind: "App para crianças autistas",
    summary:
      "Aplicativo para crianças autistas, com telas simples e a rotina do dia mostrada em imagens, uma etapa de cada vez.", // TODO: confirme o que o app faz
    stack: ["JavaScript"], // TODO: confirme
    links: {},
    demo: "routine",
  },
];
