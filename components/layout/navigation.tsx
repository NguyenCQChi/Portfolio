"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  /* Scroll-hide: hide on scroll-down, show on scroll-up */
  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    if (currentY < 50) {
      setIsVisible(true);
    } else if (currentY > lastScrollY.current + 10) {
      setIsVisible(false);
      setIsMenuOpen(false);
    } else if (currentY < lastScrollY.current - 10) {
      setIsVisible(true);
    }
    lastScrollY.current = currentY;
    ticking.current = false;
  }, []);

  /* Intersection Observer for active section detection */
  useEffect(() => {
    const handleScrollThrottled = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(handleScroll);
      }
    };
    window.addEventListener("scroll", handleScrollThrottled, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", handleScrollThrottled);
      observer.disconnect();
    };
  }, [handleScroll]);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 border-b border-accent-blue/30 backdrop-blur-xl transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ background: "rgba(3, 10, 20, 0.92)" }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <a
          href="#hero"
          className="font-heading text-[22px] font-bold tracking-tight text-text-primary"
        >
          C.N
          <span
            className="inline-block text-accent-cyan"
            style={{ animation: "logoPulse 3s ease-in-out infinite" }}
          >
            .
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative pb-1 text-sm font-semibold transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-accent-cyan"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent-cyan" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block h-0.5 w-5 bg-text-primary transition-all duration-300 ${
              isMenuOpen ? "translate-y-[4px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-text-primary transition-all duration-300 ${
              isMenuOpen ? "-translate-y-[4px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile slide-in panel */}
      <div
        className={`fixed inset-0 top-0 z-40 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ background: "rgba(3, 10, 20, 0.96)" }}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMobileMenu}
                className={`text-2xl font-heading font-bold transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-accent-cyan"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
