"use client";

import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/constants";
import { fadeInUp } from "@/lib/motion-variants";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";

export default function ContactSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>();

  return (
    <section id="contact" ref={ref} className="relative py-32">
      {/* Nebula glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="relative mx-auto max-w-[600px] px-4 text-center md:px-8"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {/* Label */}
        <motion.p
          variants={fadeInUp}
          className="flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-text-muted mb-4"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="text-accent-gold"
            aria-hidden="true"
          >
            <path d="M8 0l2.1 5.3L16 6.2l-4.2 3.8 1.2 5.8L8 12.8l-5 3 1.2-5.8L0 6.2l5.9-.9z" />
          </svg>
          {"// Contact"}
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-4"
        >
          Let&apos;s Build Something{" "}
          <span className="bg-gradient-to-r from-accent-cyan to-accent-gold bg-clip-text text-transparent">
            Cosmic
          </span>{" "}
          Together
        </motion.h2>

        {/* Subtext */}
        <motion.p variants={fadeInUp} className="text-lg text-text-muted mb-8">
          Got an exciting project, a wild idea, or just want to say hi? I&apos;d
          love to hear from you.
        </motion.p>

        {/* CTA button */}
        <motion.div variants={fadeInUp} className="mb-10">
          <a
            href="mailto:chinsu190103@gmail.com"
            className="btn-primary inline-flex items-center gap-2 rounded-lg bg-accent-violet px-8 py-4 text-lg font-semibold text-white"
          >
            Launch a Conversation
            <svg
              width="18"
              height="18"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-4 mb-6"
        >
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-blue bg-bg-deep font-mono text-sm font-bold text-text-muted transition-all duration-200 hover:-translate-y-1 hover:border-accent-cyan hover:text-accent-cyan hover:shadow-[0_0_12px_rgba(34,211,238,0.15)]"
            >
              {link.abbr}
            </a>
          ))}
        </motion.div>

        {/* Email fallback */}
        <motion.p variants={fadeInUp} className="text-sm text-text-muted">
          or beam me at{" "}
          <a
            href="mailto:chinsu190103@gmail.com"
            className="text-accent-cyan hover:text-accent-purple"
          >
            chinsu190103@gmail.com
          </a>
        </motion.p>
      </motion.div>
    </section>
  );
}
