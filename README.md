# Portfólio · Lucas Volpe

Portfólio pessoal de Lucas Volpe, desenvolvedor full-stack em São Paulo (React Native · Node.js · Supabase).

Next.js (App Router) · TypeScript · Tailwind CSS · GSAP (ScrollTrigger, SplitText) · Lenis.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Onde editar o conteúdo

Todo o texto do site fica em `content/`:

- `content/profile.ts`: nome, título, status, textos do Sobre e do Contato, e-mail, links e foto
- `content/projects.ts`: projetos (nome, descrição, stack, links e qual interface animada mostrar)
- `content/tech.ts`: cards de Skills e a lista "Estudando agora"

A foto fica em `public/lucas.webp` e o currículo deve ir em `public/cv/lucas-volpe-cv.pdf`.

## Deploy

O projeto está ligado à Vercel: cada push na branch principal publica uma nova versão.
