import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-accent-blue/25 py-8">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-5 px-4 md:px-8">
        {/* Quick nav */}
        <ul className="flex gap-6">
          <li>
            <a
              href="#hero"
              className="text-[13px] font-semibold text-text-muted transition-colors hover:text-accent-cyan"
            >
              Home
            </a>
          </li>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] font-semibold text-text-muted transition-colors hover:text-accent-cyan"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Decorative stars */}
        <div className="flex items-center gap-3" aria-hidden="true">
          <span className="h-1 w-1 rounded-full bg-accent-gold" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
          <span className="h-1 w-1 rounded-full bg-accent-gold" />
        </div>

        {/* Copyright */}
        <p className="text-xs text-text-muted">
          Designed &amp; built by Cassandra Nguyen &middot; 2026
        </p>
      </div>
    </footer>
  );
}
