"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { LogoCloud } from "@/components/ui/logo-cloud-3";
import AnimatedMetric from "@/components/AnimatedMetric";

const nameChars = "Isaac".split("");

const clientLogos = [
  { src: "/logos/frame-8.svg", alt: "Vodafone" },
  { src: "/logos/group-1.svg", alt: "Stripe" },
  { src: "/logos/group-2.svg", alt: "Notion" },
  { src: "/logos/group-4.svg", alt: "Linear" },
  { src: "/logos/frame-9.svg", alt: "Figma" },
];

const resultItems = [
  { metric: "+40%", label: "conversion" },
  { metric: "+55%", label: "inquiries" },
  { metric: "3x", label: "session duration" },
  { metric: "+25%", label: "renewals" },
  { metric: "−10%", label: "CAC" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [targetMouse, setTargetMouse] = useState({ x: 0.5, y: 0.5 });
  const [smoothMouse, setSmoothMouse] = useState({ x: 0.5, y: 0.5 });
  const shouldReduceMotion = useReducedMotion();

  const isTouchDevice = useMemo(() => {
    if (typeof window === "undefined") return false;
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.7, 1], [0, 120, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const rawScaleY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6],
    [1, 1.015, 0.985],
  );
  const scaleY = useSpring(rawScaleY, { stiffness: 100, damping: 25 });

  const textOpacityShift = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 0.96, 0.9]);
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setTargetMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;
    let raf: number;
    const animate = () => {
      setSmoothMouse((prev) => ({
        x: prev.x + (targetMouse.x - prev.x) * 0.07,
        y: prev.y + (targetMouse.y - prev.y) * 0.07,
      }));
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, [targetMouse, isTouchDevice]);

  useEffect(() => {
    if (isTouchDevice) return;
    const el = ref.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove, isTouchDevice]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-bg px-6 py-20 md:px-10 md:py-0 lg:px-20"
    >
      {/* Glow with inertia — drifts behind cursor */}
      {!isTouchDevice && !shouldReduceMotion && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(650px circle at ${smoothMouse.x * 100}% ${smoothMouse.y * 100}%, rgba(255,255,255,0.04) 0%, transparent 60%)`,
          }}
        />
      )}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.015)_0%,transparent_70%)]" />

      <motion.div
        className="relative z-10 flex flex-col items-center"
        style={shouldReduceMotion ? undefined : { y, opacity }}
      >
        {/* Eyebrow */}
        <motion.p
          className="mb-4 text-center text-[11px] font-medium tracking-[0.3em] uppercase text-white/60 md:mb-6 md:text-[13px] md:tracking-[0.35em]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Revenue & Growth Operator
        </motion.p>

        {/* Name — each char has unique depth */}
        <motion.h1
          className="font-serif text-[clamp(3.5rem,15vw,12rem)] leading-[1.05] tracking-[-0.02em] font-normal will-change-transform md:leading-[1] md:tracking-[-0.035em]"
          style={
            shouldReduceMotion
              ? { color: "#F2F2F2", transform: "translateY(-4px)" }
              : { scaleY, opacity: textOpacityShift, color: "#F2F2F2", transform: "translateY(-4px)" }
          }
        >
          {nameChars.map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ y: 120 + i * 6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 2.4 + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Tagline — balanced wrap, no forced break */}
        <motion.p
          className="mt-4 px-4 text-center text-[15px] font-normal leading-[1.65] md:mt-6 md:px-0 md:text-[16px] md:leading-[1.6]"
          style={
            {
              textWrap: "balance",
              maxWidth: "440px",
              color: "var(--color-text-muted)",
              fontWeight: "var(--font-weight-regular)",
            } as React.CSSProperties
          }
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.4, ease: [0.22, 1, 0.36, 1] }}
        >
          I turn products, funnels, and teams into revenue engines through
          strategy, product, and GTM execution.
        </motion.p>

        {/* Results — data resolving in, not just appearing */}
        <motion.p
          className="mt-6 flex flex-wrap items-center justify-center gap-x-1.5 px-2 text-[10px] font-medium tracking-[0.15em] uppercase md:mt-8 md:gap-x-2 md:px-0 md:text-[11px] md:tracking-[0.18em]"
          style={{ color: "var(--color-text-subtle)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3.6 }}
        >
          <span className="mr-0.5 md:mr-1">Selected results:</span>
          {resultItems.map((item, i) => (
            <motion.span
              key={item.metric}
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.7,
                delay: 3.6 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <AnimatedMetric value={item.metric} className="text-[var(--color-text-muted)]" duration={1.8} delay={3.8 + i * 0.12} /> {item.label}
              {i < resultItems.length - 1 && <span className="mx-2">·</span>}
            </motion.span>
          ))}
        </motion.p>

        {/* CTA — micro-resistance */}
        <motion.div
          className="mt-6 md:mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 4.2 }}
        >
          <a
            href="#work"
            className="group flex items-center gap-3 text-[11px] font-medium tracking-[0.18em] uppercase opacity-80 transition-all delay-[60ms] duration-400 hover:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 md:gap-4 md:text-[12px] md:tracking-[0.2em]"
            style={{ color: "var(--color-text)" }}
          >
            <span className="block h-px w-6 bg-white/30 transition-all delay-[60ms] duration-500 group-hover:w-10 group-hover:bg-white md:w-8 md:group-hover:w-14" />
            See the Results
            <span className="block h-px w-6 bg-white/30 transition-all delay-[60ms] duration-500 group-hover:w-10 group-hover:bg-white md:w-8 md:group-hover:w-14" />
          </a>
        </motion.div>
      </motion.div>

      {/* Client logos — outside scroll container, pinned near bottom */}
      <motion.div
        className="absolute bottom-20 md:bottom-24 lg:bottom-28 left-1/2 w-full max-w-lg -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 4.6 }}
      >
        <LogoCloud logos={clientLogos} className="opacity-40" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.6, duration: 0.8 }}
      >
        <motion.div
          className="h-12 w-px bg-gradient-to-b from-white/0 to-white/30"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Decorative lines */}
      <motion.div
        className="absolute top-1/2 left-8 hidden h-px w-16 -translate-y-1/2 bg-gradient-to-r from-white/0 to-white/10 lg:block"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 3.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
      />
      <motion.div
        className="absolute top-1/2 right-8 hidden h-px w-16 -translate-y-1/2 bg-gradient-to-l from-white/0 to-white/10 lg:block"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 3.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 1 }}
      />
    </section>
  );
}
