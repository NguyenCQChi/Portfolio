import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * Triggers once when element enters viewport.
 * Returns [ref, isIntersecting] tuple.
 */
export function useIntersectionObserver<T extends HTMLElement>(
  threshold = 0.15
): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect(); // trigger once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isIntersecting];
}
