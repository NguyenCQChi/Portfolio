/* Site-wide content data — single source of truth */

export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SocialLink {
  label: string;
  href: string;
  abbr: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const PROJECTS: Project[] = [
  {
    id: "stellar-dashboard",
    title: "Stellar Dashboard",
    description:
      "Real-time analytics dashboard with interactive charts, dark theme, and responsive data visualization for a SaaS platform. Led frontend architecture and built custom charting components.",
    tags: ["React", "TypeScript", "D3.js", "Tailwind"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "nebula-ecommerce",
    title: "Nebula E-Commerce",
    description:
      "Full-stack storefront with product filtering, cart management, Stripe checkout, and admin dashboard.",
    tags: ["Next.js", "Prisma", "Stripe", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
  },
  {
    id: "orbit-task-manager",
    title: "Orbit Task Manager",
    description:
      "Kanban-style project management with drag-and-drop, real-time collab, and theme switching.",
    tags: ["React", "Firebase", "Framer Motion", "DnD Kit"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
  },
  {
    id: "aurora-weather",
    title: "Aurora Weather App",
    description:
      "Beautiful weather app with location-based forecasts, animated icons, and dynamic gradient backgrounds.",
    tags: ["Vue 3", "OpenWeather API", "GSAP", "CSS"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2026 — Present",
    title: "Frontend Engineer @ Stellar Labs",
    description:
      "Building design systems and interactive dashboards for enterprise SaaS. Leading component library architecture.",
  },
  {
    year: "2024 — 2026",
    title: "Junior Developer @ Pixel Forge",
    description:
      "Shipped 12+ production features. Led migration from CRA to Next.js 14. Reduced bundle size by 40%.",
  },
  {
    year: "2023",
    title: "CS Degree @ University of Technology",
    description:
      "Graduated with honors. Capstone: accessible component library for React.",
  },
  {
    year: "2022",
    title: "First Line of Code",
    description:
      "Built my first HTML page. Fell in love with the browser as a creative canvas.",
  },
];

export const SKILLS: Record<string, Skill[]> = {
  Frontend: [
    { name: "React", icon: "Re" },
    { name: "Next.js", icon: "Nx" },
    { name: "TypeScript", icon: "TS" },
    { name: "Vue", icon: "Vu" },
    { name: "JavaScript", icon: "JS" },
    { name: "HTML5", icon: "HT" },
  ],
  "Styling & Animation": [
    { name: "Tailwind CSS", icon: "TW" },
    { name: "CSS3", icon: "CS" },
    { name: "Framer Motion", icon: "FM" },
    { name: "shadcn/ui", icon: "SC" },
    { name: "GSAP", icon: "GS" },
    { name: "Three.js", icon: "3J" },
  ],
  "Tools & Infrastructure": [
    { name: "Git", icon: "Gi" },
    { name: "Vite", icon: "Vi" },
    { name: "Figma", icon: "Fg" },
    { name: "Vercel", icon: "Ve" },
    { name: "PostgreSQL", icon: "Db" },
    { name: "Prisma", icon: "Pr" },
  ],
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "#", abbr: "GH" },
  { label: "LinkedIn", href: "#", abbr: "LI" },
  { label: "X", href: "#", abbr: "X" },
  { label: "CodePen", href: "#", abbr: "CP" },
];

export const TERMINAL_CODE = `const developer = {
  name: "Cassandra Nguyen",
  role: "Frontend Engineer",
  loves: ["UI", "animation", "a11y"],
  status: "building cool things",
};`;
