"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { usePerformanceTier } from "@/hooks/usePerformanceTier";

const Preloader = dynamic(() => import("@/components/Preloader"), {
  ssr: false,
});

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

export default function ClientShell() {
  const tier = usePerformanceTier();
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {!shouldReduceMotion && <Preloader />}
      {tier !== "low" && !shouldReduceMotion && <CustomCursor />}
    </>
  );
}
