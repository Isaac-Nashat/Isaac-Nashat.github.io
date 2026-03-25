"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import type { Project } from "@/lib/projects";

const narrativeSections = [
  { key: "overview", label: "Overview" },
  { key: "problem", label: "The Problem" },
  { key: "constraints", label: "Constraints" },
  { key: "process", label: "Process" },
  { key: "solution", label: "Solution" },
  { key: "tradeoffs", label: "Trade-offs & Decisions" },
  { key: "outcome", label: "Outcome" },
  { key: "hindsight", label: "What I'd Do Differently" },
] as const;

export default function CaseStudyModal({ project }: { project: Project }) {
  const router = useRouter();
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => router.back(), 500);
  }, [router]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const main = document.querySelector("main");
    main?.setAttribute("inert", "");
    return () => {
      document.body.style.overflow = "";
      main?.removeAttribute("inert");
    };
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [handleClose]);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: isClosing ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        onClick={handleClose}
      />

      {/* Panel */}
      <motion.div
        className="fixed top-0 right-0 bottom-0 z-[70] w-full overflow-y-auto bg-off-black md:w-[70vw] lg:w-[55vw]"
        initial={{ x: "100%" }}
        animate={{ x: isClosing ? "100%" : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label={`Case study: ${project.title}`}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          className="sticky top-0 z-10 flex w-full items-center justify-between bg-off-black/90 px-4 py-4 backdrop-blur-sm sm:px-8 sm:py-6 md:px-10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30"
        >
          <span className="text-[12px] font-light tracking-[0.3em] uppercase text-white/40">
            Case Study
          </span>
          <span className="flex items-center gap-4 text-[12px] font-light tracking-[0.2em] uppercase text-white/40 transition-colors hover:text-white">
            Close
            <svg
              width="16"
              height="16"
              viewBox="0 0 14 14"
              className="fill-none stroke-current"
            >
              <path d="M1 1l12 12M13 1L1 13" strokeWidth="1" />
            </svg>
          </span>
        </button>

        <div className="px-4 pb-24 sm:px-8 md:px-10">
          {/* Header */}
          <motion.div
            className="mb-12 pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-4 flex items-center gap-4">
              <span className="text-[12px] font-light tracking-[0.2em] uppercase text-white/40">
                {project.tags.join(" / ")}
              </span>
              <span className="h-px w-4 bg-white/20" />
              <span className="text-[12px] font-light tracking-[0.2em] text-white/40">
                {project.year}
              </span>
            </div>

            <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-normal leading-[1.15] tracking-[-0.01em] text-white">
              {project.title}
            </h2>

            <p className="mt-8 max-w-lg text-[16px] font-light leading-relaxed text-gray">
              {project.description}
            </p>
          </motion.div>

          {/* Key Results */}
          <motion.div
            className="mb-16 grid grid-cols-1 gap-6 border border-white/[0.08] p-6 sm:grid-cols-3 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {project.results.map((result, ri) => (
              <div key={ri} className="text-center">
                <p className="text-xl font-medium tabular-nums text-white md:text-2xl lg:text-3xl">
                  {result.value}
                </p>
                <p className="mt-2 text-[12px] font-light tracking-[0.2em] uppercase text-white/45">
                  {result.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="mb-14 h-px bg-white/10"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ originX: 0 }}
          />

          {/* Narrative sections */}
          {narrativeSections.map((section, i) => (
            <motion.div
              key={section.key}
              className={`mb-14 ${section.key === "hindsight" ? "border-l-2 border-white/[0.08] pl-6" : ""}`}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.7 + i * 0.07,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="mb-4 text-[12px] font-light tracking-[0.3em] uppercase text-white/40">
                {section.label}
              </p>
              <p className="max-w-xl text-[16px] font-light leading-[1.85] text-gray md:text-base">
                {project[section.key]}
              </p>
            </motion.div>
          ))}

          <motion.div
            className="mt-20 border-t border-white/10 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <p className="text-[12px] font-light tracking-[0.2em] uppercase text-white/40">
              {project.title}, {project.year}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
