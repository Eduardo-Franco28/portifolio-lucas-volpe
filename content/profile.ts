// Tudo que aparece no site sobre você mora aqui.
// Itens marcados com TODO são texto de exemplo: troque antes de publicar.

export type Rich = Array<string | { mark: string }>;

export const profile = {
  name: "Lucas Volpe",
  initials: "LV",
  role: "Desenvolvedor full-stack",
  city: "São Paulo",
  timeZone: "America/Sao_Paulo",
  status: "Aberto a vagas full-stack e freelas",

  // Tese do hero: duas linhas, até ~11 caracteres cada para caber no celular.
  thesis: ["Do banco", "ao bolso."] as const,
  // Título do hero da v2: a palavra destacada ganha cor e um traço desenhado embaixo.
  headline: { before: "Do banco de dados ao app no seu", highlight: "bolso" },
  intro:
    "Construo apps de ponta a ponta: o banco no Supabase, a API em Node e o app em React Native que chega no seu celular.",
  stack: ["React Native", "Node.js", "Supabase"],

  email: "lucas.volpe@example.com", // TODO
  links: {
    linkedin: "https://www.linkedin.com/in/TODO", // TODO
    github: "https://github.com/TODO", // TODO
    cv: "/cv/lucas-volpe-cv.pdf", // TODO: coloque o PDF em public/cv/
  },

  // Quando tiver a foto: salve em public/ (ex.: public/lucas.jpg, 4:5, ~1200×1500)
  // e troque por { src: "/lucas.jpg", alt: "Lucas Volpe sorrindo no escritório" }.
  photo: { src: "/lucas.webp", alt: "Retrato de Lucas Volpe" } as null | { src: string; alt: string },

  about: {
    title: "Quem puxa o fio",
    // TODO: texto de exemplo. Os trechos { mark } ganham destaque.
    body: [
      "Sou o Lucas, ",
      { mark: "dev full-stack" },
      " em ",
      { mark: "São Paulo" },
      ". Gosto do caminho inteiro de um produto: modelar o banco, escrever a API e desenhar a tela que alguém vai abrir no ônibus. Hoje trabalho com ",
      { mark: "React Native" },
      ", ",
      { mark: "Node.js" },
      " e ",
      { mark: "Supabase" },
      ", e meço o que faço pelo que muda para quem usa.",
    ] as Rich,
    facts: [
      { label: "Base", value: "São Paulo, SP" },
      { label: "Foco", value: "Apps mobile e APIs" },
      { label: "Agora", value: "Mast" }, // TODO
    ],
  },

  contact: {
    title: "Tem um app na cabeça?",
    line: "Me conta o problema. Eu respondo em até um dia útil.", // TODO
  },
};
