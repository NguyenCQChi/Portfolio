"use client";

import { motion } from "framer-motion";
import { TIMELINE } from "@/lib/constants";
import { fadeInUp } from "@/lib/motion-variants";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";
import SectionHeader from "@/components/ui/section-header";
import TimelineItem from "@/components/ui/timeline-item";

export default function AboutSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>();

  return (
    <section id="about" ref={ref} className="py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <SectionHeader
          number="02"
          label="// About"
          title="The Developer Behind the Code"
        />

        <motion.div
          className="grid grid-cols-1 gap-16 lg:grid-cols-2"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* Bio */}
          <motion.div variants={fadeInUp}>
            <p className="text-lg leading-relaxed text-text-muted">
              I&apos;m an <strong className="text-accent-cyan">engineer</strong>{" "}
              who believes the web should feel alive. My work sits at the
              intersection of <em>design</em> and <em>engineering</em> —
              crafting{" "}
              <strong className="text-accent-cyan">interactive UIs</strong>,{" "}
              <strong className="text-accent-cyan">design systems</strong>, and
              smooth animations that put users first.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              I enjoy solving real-world problems through code, whether that
              means designing data-driven applications, improving performance,
              or turning complex ideas into intuitive experiences. When I&apos;m
              not coding, you&apos;ll usually find me stargazing, exploring new
              technologies, sketching UI concepts, or working on side projects
              that help me grow as an engineer.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="relative border-l-2 border-gradient-to-b pl-0"
            style={{
              borderImage:
                "linear-gradient(to bottom, var(--color-accent-cyan), var(--color-accent-violet)) 1",
            }}
            variants={fadeInUp}
          >
            {TIMELINE.map((item, i) => (
              <TimelineItem key={item.year} item={item} isFirst={i === 0} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
