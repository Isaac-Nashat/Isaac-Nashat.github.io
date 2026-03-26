"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function useAnimatedCounter(
  target: number,
  duration = 1.5,
  startOnView = true,
  delay?: number,
  externalInView?: boolean,
) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const selfInView = useInView(ref, { once: true, margin: "-40px" });
  const isInView = externalInView ?? selfInView;
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

    const runAnimation = () => {
      hasAnimated.current = true;
      const start = performance.now();
      const step = (now: number) => {
        const elapsed = Math.min((now - start) / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - elapsed, 3);
        setValue(Math.round(eased * target));
        if (elapsed < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if (delay != null && !startOnView) {
      const timeout = setTimeout(runAnimation, delay * 1000);
      return () => clearTimeout(timeout);
    }

    runAnimation();
  }, [target, duration, isInView, startOnView, shouldReduceMotion, delay]);

  return { value, ref };
}

export function parseMetric(raw: string): {
  prefix: string;
  number: number;
  suffix: string;
} {
  const match = raw.match(/^([+\-−]?[A-Za-z\s]*)(\d+(?:\.\d+)?)(.*)/);
  if (!match || !match[2]) return { prefix: "", number: 0, suffix: raw };
  return {
    prefix: match[1].replace("−", "−"),
    number: parseFloat(match[2]),
    suffix: match[3],
  };
}
