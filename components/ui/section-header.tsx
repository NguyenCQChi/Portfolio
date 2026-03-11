interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
  centered?: boolean;
}

export default function SectionHeader({
  number,
  label,
  title,
  centered,
}: SectionHeaderProps) {
  return (
    <div className={`relative mb-12 ${centered ? "text-center" : ""}`}>
      {/* Ghost number */}
      <span
        className="absolute -top-6 font-heading text-8xl font-bold text-accent-cyan opacity-[0.04] select-none pointer-events-none"
        aria-hidden="true"
        style={centered ? { left: "50%", transform: "translateX(-50%)" } : {}}
      >
        {number}
      </span>

      {/* Label with gold star */}
      <p
        className={`flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-text-muted mb-3 ${
          centered ? "justify-center" : ""
        }`}
      >
        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" className="text-accent-gold" aria-hidden="true">
          <path d="M8 0l2.1 5.3L16 6.2l-4.2 3.8 1.2 5.8L8 12.8l-5 3 1.2-5.8L0 6.2l5.9-.9z" />
        </svg>
        {label}
      </p>

      {/* Title */}
      <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-4">
        {title}
      </h2>

      {/* Gradient divider */}
      <div
        className={`h-0.5 w-16 bg-gradient-to-r from-accent-cyan to-accent-violet ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
