"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function useAnimatedCounter(
  target: number,
  duration = 1.5,
  startOnView = true,
  delay?: number,
) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    if (shouldReduceMotion) {
      setValue(target);
      hasAnimated.current = true;
      return;
    }

    if (startOnView && !isInView) return;
    if (delay != null && !startOnView) {
      hasAnimated.current = true;
      const timeout = setTimeout(() => {
        const start = performance.now();
        const step = (now: number) => {
          const elapsed = Math.min((now - start) / (duration * 1000), 1);
          const eased = 1 - Math.pow(1 - elapsed, 3);
          setValue(Math.round(eased * target));
          if (elapsed < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }

    hasAnimated.current = true;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setValue(Math.round(eased * target));
      if (elapsed < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, isInView, startOnView, shouldReduceMotion, delay]);

  return { value, ref };
}

export function parseMetric(raw: string): {
  prefix: string;
  number: number;
  suffix: string;
} {
  const match = raw.match(/^([+\-−]?)(\d+(?:\.\d+)?)(.*)/);
  if (!match) return { prefix: "", number: 0, suffix: raw };
  return {
    prefix: match[1].replace("−", "−"),
    number: parseFloat(match[2]),
    suffix: match[3],
  };
}
