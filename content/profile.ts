// Tudo que aparece no site sobre você mora aqui.
// Itens marcados com TODO ainda precisam de um dado seu antes de divulgar o link.

export type Rich = Array<string | { mark: string }>;

export const profile = {
  name: "Lucas Volpe",
  initials: "LV",
  role: "Suporte de TI, hardware e redes",
  city: "São Paulo",
  timeZone: "America/Sao_Paulo",
  status: "Aberto a vagas de suporte de TI e redes", // TODO: confirme se está procurando vaga

  // Título do hero: a palavra destacada ganha cor e um traço desenhado embaixo.
  headline: { before: "Abro o gabinete, passo o cabo e deixo a rede no", highlight: "ar" },
  intro:
    "Faço suporte de TI em São Paulo. Monto e conserto computadores, desenho redes no Cisco Packet Tracer e escrevo em JavaScript as ferramentas que o setor de TI precisa.",
  stack: ["Hardware", "Redes", "Suporte de TI"],

  email: "lucas.volpe@example.com", // TODO
  links: {
    linkedin: "https://www.linkedin.com/in/TODO", // TODO
    github: "https://github.com/TODO", // TODO
    cv: "/cv/lucas-volpe-cv.pdf", // TODO: coloque o PDF em public/cv/
  },

  // Foto 4:5 em public/. Para trocar, salve outra imagem e mude o src.
  photo: { src: "/lucas.webp", alt: "Retrato de Lucas Volpe" } as null | { src: string; alt: string },

  about: {
    // Os trechos { mark } ganham destaque.
    body: [
      "Sou o Lucas, de ",
      { mark: "São Paulo" },
      ". Minha parte preferida da TI é o ",
      { mark: "hardware" },
      ": abrir o gabinete, achar a peça com defeito e devolver a máquina ligando. Também gosto de software e uso ",
      { mark: "JavaScript" },
      " quando o problema pede um sistema. Fui estagiário de ",
      { mark: "suporte de TI" },
      " no ",
      { mark: "Colégio Rafael de Santo" },
      ", cuidando dos computadores da escola e de quem trabalha neles.",
    ] as Rich,
    facts: [
      { label: "Base", value: "São Paulo, SP" },
      { label: "Foco", value: "Hardware e redes" },
      { label: "Experiência", value: "Colégio Rafael de Santo" },
    ],
  },

  contact: {
    title: "Tem uma vaga ou uma máquina parada?",
    line: "Conta o que está acontecendo e eu te respondo por e-mail.",
  },
};
