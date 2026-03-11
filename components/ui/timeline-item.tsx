import type { TimelineItem as TimelineData } from "@/lib/constants";

interface TimelineItemProps {
  item: TimelineData;
  isFirst?: boolean;
}

export default function TimelineItem({ item, isFirst }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      {/* Glowing node */}
      <span
        className={`absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 ${
          isFirst
            ? "border-accent-gold bg-accent-gold/30 shadow-[0_0_8px_rgba(251,191,36,0.4)]"
            : "border-accent-cyan bg-accent-cyan/20 shadow-[0_0_8px_rgba(34,211,238,0.3)]"
        }`}
        aria-hidden="true"
      />

      <span className="block font-mono text-xs text-text-muted mb-1">
        {item.year}
      </span>
      <h4 className="font-heading text-base font-bold mb-1">{item.title}</h4>
      <p className="text-sm leading-relaxed text-text-muted">
        {item.description}
      </p>
    </div>
  );
}
