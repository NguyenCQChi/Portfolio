import type { Project } from "@/lib/constants";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export default function ProjectCard({ project, index, featured }: ProjectCardProps) {
  return (
    <article
      className={`group rounded-2xl border border-accent-blue/50 bg-bg-deep overflow-hidden transition-all duration-300 hover:border-accent-cyan hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] ${
        featured ? "col-span-full grid grid-cols-1 md:grid-cols-2" : ""
      }`}
    >
      {/* Image placeholder */}
      <div
        className={`relative bg-bg-nebula ${featured ? "min-h-[220px]" : "min-h-[200px]"}`}
      >
        {/* Scan-line overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,211,238,0.05) 2px, rgba(34,211,238,0.05) 4px)",
          }}
          aria-hidden="true"
        />
        {featured && (
          <span className="absolute top-4 left-4 rounded-full border border-accent-gold px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-gold">
            Featured
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-3 p-6">
        <span className="font-mono text-xs text-accent-gold">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-heading text-xl font-bold">{project.title}</h3>
        <p className="text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent-cyan/10 px-3 py-1 font-mono text-[11px] text-accent-cyan"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-5 pt-2 text-sm">
          <a
            href={project.githubUrl}
            className="inline-flex items-center gap-1.5 text-text-muted transition-colors hover:text-accent-cyan"
            aria-label={`${project.title} GitHub repository`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            GitHub
          </a>
          <a
            href={project.liveUrl}
            className="inline-flex items-center gap-1.5 text-text-muted transition-colors hover:text-accent-cyan"
            aria-label={`${project.title} live demo`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}
