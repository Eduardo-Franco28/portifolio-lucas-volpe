// Ícones desenhados para cada tecnologia (traço, 24×24). Todo elemento usa
// pathLength=1 para que o CSS consiga "redesenhar" o traço no hover.
const L = { pathLength: 1 } as const;

const icons: Record<string, React.JSX.Element> = {
  "React Native": (
    <>
      <rect {...L} x="6" y="2" width="12" height="20" rx="3" />
      <ellipse {...L} cx="12" cy="11" rx="4.5" ry="1.9" />
      <path {...L} d="M10.5 18.5h3" />
    </>
  ),
  Expo: (
    <>
      <path {...L} d="M12 2.5c3 2 4.5 5.2 4.5 9.2L14.6 15H9.4l-1.9-3.3C7.5 7.7 9 4.5 12 2.5Z" />
      <circle {...L} cx="12" cy="9.5" r="1.7" />
      <path {...L} d="M9.6 15.5 8 20M14.4 15.5 16 20M12 16v5" />
    </>
  ),
  "Node.js": (
    <>
      <path {...L} d="M12 2.5l8.2 4.75v9.5L12 21.5l-8.2-4.75v-9.5Z" />
      <path {...L} d="M9.2 15V9.2l5.6 5.6V9" />
    </>
  ),
  Supabase: (
    <>
      <path {...L} d="M13.2 2.5 4.5 13.6h7l-1 7.9 8.9-11.3h-7Z" />
    </>
  ),
  PostgreSQL: (
    <>
      <ellipse {...L} cx="12" cy="5.5" rx="7" ry="2.6" />
      <path {...L} d="M5 5.5v13c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-13" />
      <path {...L} d="M5 12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6" />
    </>
  ),
  TypeScript: (
    <>
      <path {...L} d="M8 7 3 12l5 5" />
      <path {...L} d="m16 7 5 5-5 5" />
      <path {...L} d="M13.6 4.5 10.4 19.5" />
    </>
  ),
  "Next.js": (
    <>
      <rect {...L} x="3" y="4" width="18" height="16" rx="2.6" />
      <path {...L} d="M3 8.6h18" />
      <path {...L} d="m7.6 12.4 2.6 2.3-2.6 2.3M13 17h4" />
    </>
  ),
  React: (
    <>
      <ellipse {...L} cx="12" cy="12" rx="9.5" ry="3.7" />
      <ellipse {...L} cx="12" cy="12" rx="9.5" ry="3.7" transform="rotate(60 12 12)" />
      <ellipse {...L} cx="12" cy="12" rx="9.5" ry="3.7" transform="rotate(120 12 12)" />
      <circle {...L} cx="12" cy="12" r="1.5" />
    </>
  ),
  GSAP: (
    <>
      <path {...L} d="M3 18c4.5 0 4.5-12 9-12s4.5 12 9 12" />
      <circle {...L} cx="12" cy="6" r="1.6" />
      <path {...L} d="M3 21.5h18" />
    </>
  ),
  "GitHub Actions": (
    <>
      <circle {...L} cx="6" cy="6" r="2.6" />
      <circle {...L} cx="18" cy="18" r="2.6" />
      <path {...L} d="M6 8.6V11a3.5 3.5 0 0 0 3.5 3.5H15" />
      <path {...L} d="m12.6 11.8 2.7 2.7-2.7 2.7" />
    </>
  ),
  Vercel: (
    <>
      <path {...L} d="M12 3.5 21 20H3Z" />
      <path {...L} d="M12 10v4.5" />
    </>
  ),
  Docker: (
    <>
      <path {...L} d="M2.5 12.5h16c1.2 0 2.1-.9 2.6-2 .4 3.4-1.8 9-9.6 9-5 0-8-3-9-7Z" />
      <rect {...L} x="6" y="8.5" width="3" height="3" />
      <rect {...L} x="9.5" y="8.5" width="3" height="3" />
      <rect {...L} x="9.5" y="5" width="3" height="3" />
    </>
  ),
};

const fallback = (
  <>
    <path {...L} d="M8 7 3 12l5 5M16 7l5 5-5 5" />
  </>
);

export default function SkillIcon({ name }: { name: string }) {
  return (
    <span className="skill-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">{icons[name] ?? fallback}</svg>
    </span>
  );
}
