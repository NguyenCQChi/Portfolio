"use client";

import { useState, useEffect } from "react";
import { TERMINAL_CODE } from "@/lib/constants";

const TYPING_SPEED = 60;

export default function TerminalTyping() {
  const [displayedLength, setDisplayedLength] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // For reduced motion, reveal all at once via a 0ms timer (avoids sync setState in effect)
    if (prefersReduced) {
      const t = setTimeout(() => setDisplayedLength(TERMINAL_CODE.length), 0);
      return () => clearTimeout(t);
    }

    const interval = setInterval(() => {
      setDisplayedLength((prev) => {
        if (prev >= TERMINAL_CODE.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, TYPING_SPEED);

    return () => clearInterval(interval);
  }, []);

  const isTyping = displayedLength < TERMINAL_CODE.length;

  return (
    <div className="w-full rounded-xl border border-accent-blue/50 overflow-hidden">
      {/* Terminal chrome bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#0A0E17] border-b border-accent-blue/30">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
        <span className="ml-3 text-xs font-mono text-text-muted">
          ~/cassandra/portfolio
        </span>
      </div>

      {/* Terminal body */}
      <div className="bg-[#0A0E17] p-5 min-h-[180px]">
        <pre className="font-mono text-sm leading-relaxed text-accent-cyan whitespace-pre-wrap break-words">
          {TERMINAL_CODE.slice(0, displayedLength)}
          {isTyping && (
            <span
              className="inline-block w-2 h-4 ml-0.5 bg-accent-cyan align-middle"
              style={{ animation: "cursorBlink 1s steps(1) infinite" }}
            />
          )}
        </pre>
      </div>
    </div>
  );
}
