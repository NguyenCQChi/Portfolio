"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import { fadeInUp } from "@/lib/motion-variants";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";
import SectionHeader from "@/components/ui/section-header";
import SkillItem from "@/components/ui/skill-item";

export default function SkillsSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>();

  return (
    <section id="skills" ref={ref} className="py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <SectionHeader
          number="03"
          label="// Tech Stack"
          title="Tools of the Trade"
          centered
        />

        <motion.div
          className="space-y-12"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {Object.entries(SKILLS).map(([category, skills]) => (
            <motion.div key={category} variants={fadeInUp} className="text-center">
              <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-text-muted">
                {category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill) => (
                  <SkillItem key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
