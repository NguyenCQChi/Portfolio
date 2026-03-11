import TerminalTyping from "@/components/interactive/terminal-typing";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Nebula gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(124,58,237,0.08) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 70% 40%, rgba(34,211,238,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-4 py-32 md:px-8 lg:grid-cols-[1.4fr_1fr]">
        {/* Text column */}
        <div className="flex flex-col gap-6">
          {/* Greeting label */}
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent-gold">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0l2.1 5.3L16 6.2l-4.2 3.8 1.2 5.8L8 12.8l-5 3 1.2-5.8L0 6.2l5.9-.9z" />
            </svg>
            Available for hire
          </p>

          {/* Heading */}
          <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            I craft interfaces that feel like{" "}
            <span className="bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent">
              magic
            </span>
          </h1>

          {/* Tagline */}
          <p className="max-w-md text-lg leading-relaxed text-text-muted">
            <strong className="text-text-primary">Cassandra Nguyen</strong> — frontend
            engineer turning ideas into interactive, accessible, and delightful web
            experiences.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#work"
              className="btn-primary inline-flex items-center gap-2 rounded-lg bg-accent-violet px-7 py-3.5 font-semibold text-white"
            >
              Explore My Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a
              href="#contact"
              className="btn-ghost inline-flex items-center gap-2 rounded-lg border border-accent-blue px-7 py-3.5 font-semibold text-accent-cyan"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Terminal column */}
        <div className="w-full max-w-md lg:max-w-none">
          <TerminalTyping />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted">
          scroll
        </span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          stroke="currentColor"
          className="text-text-muted"
          style={{ animation: "scrollBounce 2s ease-in-out infinite" }}
          aria-hidden="true"
        >
          <path d="M8 4v12M4 12l4 4 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
