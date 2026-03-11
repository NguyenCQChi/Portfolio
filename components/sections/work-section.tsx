"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { fadeInUp } from "@/lib/motion-variants";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";
import SectionHeader from "@/components/ui/section-header";
import ProjectCard from "@/components/ui/project-card";

export default function WorkSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>();

  return (
    <section id="work" ref={ref} className="py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <SectionHeader number="01" label="// Featured Work" title="Selected Projects" />

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {PROJECTS.map((project, i) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <ProjectCard
                project={project}
                index={i}
                featured={project.featured}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
