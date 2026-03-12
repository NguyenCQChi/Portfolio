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
    id: "finance-tracker",
    title: "Personal Finance Tracking",
    description:
      "Full-stack finance tracker for managing transactions, budgets, and recurring bills. Built interactive dashboards and data tables for real-time financial insights.",
    tags: ["Next.js", "Nest.js", "Full-stack", "Shadcn"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "my-chat",
    title: "My Chat",
    description:
      "Real-time chat application with user authentication, persistent messaging, and live updates using WebSockets.",
    tags: ["Next.js", "Firebase", "Websocket", "Material UI"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
  },
  // {
  //   id: "orbit-task-manager",
  //   title: "Orbit Task Manager",
  //   description:
  //     "Kanban-style project management with drag-and-drop, real-time collab, and theme switching.",
  //   tags: ["React", "Firebase", "Framer Motion", "DnD Kit"],
  //   githubUrl: "#",
  //   liveUrl: "#",
  //   featured: false,
  // },
  // {
  //   id: "aurora-weather",
  //   title: "Aurora Weather App",
  //   description:
  //     "Beautiful weather app with location-based forecasts, animated icons, and dynamic gradient backgrounds.",
  //   tags: ["Vue 3", "OpenWeather API", "GSAP", "CSS"],
  //   githubUrl: "#",
  //   liveUrl: "#",
  //   featured: false,
  // },
];

// export const TIMELINE: TimelineItem[] = [
//   {
//     year: "2025 - Present",
//     title: "Frontend Developer @ PHP Insurance Services Inc.",
//     description:
//       "Shipped 12+ production features. Led migration from CRA to Next.js 14. Reduced bundle size by 40%.",
//   },
//   {
//     year: "2022",
//     title: "Software Developer (Collaboration) @ YVR Environmental Monitoring Agency",
//     description:
//       "Optimized device power consumption to extend battery life by 20%. Migrated the software from C to C++.",
//   },
//   {
//     year: "2022",
//     title: "Frontend Developer Intern @ PHP Insurance Services Inc.",
//     description:
//       "Shipped 12+ production features. Led migration from CRA to Next.js 14. Reduced bundle size by 40%.",
//   },
//   {
//     year: "2021 - 2024",
//     title: "Computer System Technology (Artificial Intelligence Option) @ BCIT",
//     description:
//       "Graduated with distinction. Capstone: build projects in web development, real-time applications, software development, and machine learning.",
//   },
// ];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2025 - Present",
    title: "Software Developer @ PHP Insurance Services Inc.",
    description:
      "Developing data-driven web features using React, Next.js, and TypeScript. Improved dashboard performance through lazy loading and optimized data fetching. Built a serverless PDF generation pipeline using Puppeteer and Google Cloud Functions.",
  },
  {
    year: "2023",
    title: "Software Developer (Collaboration) @ YVR Water Monitoring Project",
    description:
      "Contributed to an environmental monitoring system processing sensor data. Refactored embedded firmware from C to C++ to improve maintainability and optimized power usage to extend device battery life.",
  },
  {
    year: "2022",
    title: "Front-End Developer Intern @ PHP Insurance Services Inc.",
    description:
      "Developed responsive interfaces with React and Next.js. Improved page load performance through image optimization and lazy loading, and implemented SEO and analytics tracking.",
  },
  {
    year: "2021 - 2024",
    title: "Computer Systems Technology (AI Option) @ BCIT",
    description:
      "Graduated with distinction. Built projects in web development, real-time applications, and machine learning.",
  },
];

// export const SKILLS: Record<string, Skill[]> = {
//   "Web Development": [
//     { name: "React", icon: "Re" },
//     { name: "Next.js", icon: "Nx" },
//     { name: "TypeScript", icon: "TS" },
//     { name: "JavaScript", icon: "JS" },
//     { name: "HTML5", icon: "HT" },
//   ],
//   "Languages": [
//     { name: 'JavaScript', icon: 'JS'},
//     { name: 'Java', icon: 'JV'},
//     { name: 'Python', icon: 'Py' },
//     { name: 'C', icon: "C" }
//   ],
//   "Styling & Animation": [
//     { name: "Tailwind CSS", icon: "TW" },
//     { name: "CSS3", icon: "CS" },
//     { name: "Framer Motion", icon: "FM" },
//     { name: "shadcn/ui", icon: "SC" },
//     { name: "Three.js", icon: "3J" },
//     { name: 'Antd', icon: 'AD'}
//   ],
//   "Tools & Infrastructure": [
//     { name: "Git", icon: "Gi" },
//     { name: "Vite", icon: "Vi" },
//     { name: "Figma", icon: "Fg" },
//     { name: "Vercel", icon: "Ve" },
//     { name: "PostgreSQL", icon: "Db" },
//   ],
// };

export const SKILLS: Record<string, Skill[]> = {
  "Frontend Development": [
    { name: "React", icon: "Re" },
    { name: "Next.js", icon: "Nx" },
    { name: "TypeScript", icon: "TS" },
    { name: "JavaScript", icon: "JS" },
    { name: "HTML5", icon: "HT" },
    { name: "Redux", icon: "Rx" },
  ],

  "Backend & Data": [
    { name: "Node.js", icon: "Nd" },
    { name: "Firebase", icon: "Fb" },
    { name: "MySQL", icon: "My" },
    { name: "REST APIs", icon: "AP" },
    { name: "WebSockets", icon: "WS" },
  ],

  Languages: [
    { name: "JavaScript", icon: "JS" },
    { name: "TypeScript", icon: "TS" },
    { name: "Python", icon: "Py" },
    { name: "Java", icon: "JV" },
    { name: "C / C++", icon: "C" },
  ],

  "Styling & UI": [
    { name: "Tailwind CSS", icon: "TW" },
    { name: "CSS3", icon: "CS" },
    { name: "Material UI", icon: "MU" },
    { name: "Ant Design", icon: "AD" },
    { name: "shadcn/ui", icon: "SC" },
  ],

  "Tools & Infrastructure": [
    { name: "Git", icon: "Gi" },
    { name: "Vercel", icon: "Ve" },
    { name: "Docker", icon: "Dc" },
    { name: "Google Cloud", icon: "Gc" },
    { name: "Figma", icon: "Fg" },
  ],
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/NguyenCQChi", abbr: "GH" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chinguyen19/",
    abbr: "LI",
  },
];

export const TERMINAL_CODE = `const developer = {
  name: "Chi Nguyen",
  role: "Frontend Engineer, Software Engineer",
  loves: ["UI", "development", "OOP"],
  status: "building cool things",
};`;
