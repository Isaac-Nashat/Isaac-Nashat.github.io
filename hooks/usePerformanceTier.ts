"use client";

import { useState } from "react";

export type PerformanceTier = "high" | "medium" | "low";

interface NavigatorExtended extends Navigator {
  deviceMemory?: number;
}

export function usePerformanceTier(): PerformanceTier {
  const [tier] = useState<PerformanceTier>(() => {
    if (typeof window === "undefined") return "high";

    const nav = navigator as NavigatorExtended;
    const cores = nav.hardwareConcurrency || 4;
    const memory = nav.deviceMemory || 8;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced || cores <= 2 || memory <= 2) {
      return "low";
    }

    if (cores <= 4 || memory <= 4) {
      return "medium";
    }

    return "high";
  });

  return tier;
}
