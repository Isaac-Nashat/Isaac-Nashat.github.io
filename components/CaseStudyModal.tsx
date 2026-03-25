"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import type { Project } from "@/lib/projects";
import CaseStudyContent from "./CaseStudyContent";

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
        className="fixed inset-0 z-60 bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: isClosing ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        onClick={handleClose}
      />

      {/* Panel */}
      <motion.div
        className="fixed top-0 right-0 bottom-0 z-70 w-full bg-off-black md:w-[70vw] lg:w-[55vw]"
        initial={{ x: "100%" }}
        animate={{ x: isClosing ? "100%" : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label={`Case study: ${project.title}`}
      >
        {/* Close bar */}
        <div className="sticky top-0 z-10 flex min-h-14 w-full items-center justify-between border-b border-white/6 bg-off-black/90 px-8 py-4 backdrop-blur-sm md:px-10 md:py-5">
          <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/60 md:text-[13px] md:tracking-[0.35em]">
            Case Study
          </span>
          <button
            onClick={handleClose}
            className="flex items-center gap-3 text-[13px] font-light tracking-[0.15em] uppercase text-white/50 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 md:gap-4 md:text-[14px]"
            aria-label="Close case study"
          >
            Close
            <svg
              width="20"
              height="20"
              viewBox="0 0 14 14"
              className="fill-none stroke-current"
            >
              <path d="M1 1l12 12M13 1L1 13" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        <div className="h-[calc(100%-56px)] overflow-y-auto px-8 pb-24 pt-8 md:px-10 md:pt-10">
          <CaseStudyContent project={project} animationOffset={0.3} />
        </div>
      </motion.div>
    </>
  );
}
