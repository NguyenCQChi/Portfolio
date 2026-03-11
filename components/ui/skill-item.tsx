import type { Skill } from "@/lib/constants";

export default function SkillItem({ name, icon }: Skill) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-accent-blue bg-bg-deep px-4 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-cyan hover:shadow-[0_0_12px_rgba(34,211,238,0.1)]">
      {/* Icon badge */}
      <span className="flex h-8 w-8 items-center justify-center rounded bg-accent-cyan/10 font-mono text-xs font-bold text-accent-cyan">
        {icon}
      </span>
      <span className="text-sm">{name}</span>
    </div>
  );
}
