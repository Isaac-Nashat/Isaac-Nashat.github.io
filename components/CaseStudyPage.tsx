"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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

export default function CaseStudyPage({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-off-black">
      {/* Nav */}
      <nav className="flex items-center justify-between px-4 py-6 md:px-10 lg:px-20">
        <Link
          href="/"
          className="font-serif text-lg tracking-[0.05em] text-white hover:opacity-70 transition-opacity duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Isaac
        </Link>
        <Link
          href="/"
          className="group flex items-center gap-4 text-[12px] font-light tracking-[0.15em] uppercase text-white/40 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="transition-transform group-hover:-translate-x-1"
          >
            <path d="M10 1L3 7l7 6" />
          </svg>
          Back
        </Link>
      </nav>

      <article className="mx-auto max-w-3xl px-5 pb-16 pt-6 md:px-10 md:pb-24 md:pt-8 lg:pt-16">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-3 flex flex-wrap items-center gap-2 md:mb-4 md:gap-4">
            <span className="text-[10px] font-light tracking-[0.15em] uppercase text-white/40 md:text-[12px] md:tracking-[0.2em]">
              {project.tags.join(" / ")}
            </span>
            <span className="h-px w-3 bg-white/20 md:w-4" />
            <span className="text-[10px] font-light tracking-[0.15em] text-white/40 md:text-[12px] md:tracking-[0.2em]">
              {project.year}
            </span>
          </div>

          <h1 className="font-serif text-[clamp(2.25rem,10vw,6rem)] font-normal leading-[1.1] tracking-[-0.02em] text-white md:leading-[1.15] md:tracking-[-0.01em]">
            {project.title}
          </h1>

          <p className="mt-6 max-w-lg text-[14px] font-light leading-[1.7] text-gray md:mt-10 md:text-[16px] md:leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Before Snapshot */}
        {project.before.length > 0 && (
          <motion.div
            className="mb-10 border-l-2 border-white/[0.08] pl-4 md:mb-12 md:pl-6 lg:pl-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6 }}
          >
            <p className="mb-3 text-[10px] font-light tracking-[0.25em] uppercase text-white/40 md:mb-4 md:text-[12px] md:tracking-[0.3em]">
              Before
            </p>
            <ul className="space-y-1.5 md:space-y-2">
              {project.before.map((item, bi) => (
                <li
                  key={bi}
                  className="text-[13px] font-light leading-[1.65] text-white/50 md:text-[14px] md:leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Key Results */}
        <motion.div
          className="mb-14 grid grid-cols-1 gap-5 rounded-xl border border-white/[0.08] p-6 sm:grid-cols-3 md:mb-20 md:gap-6 md:p-8 lg:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          {project.results.map((result, ri) => (
            <div key={ri} className="text-center">
              <p className="text-[1.75rem] font-medium tabular-nums text-white md:text-2xl lg:text-3xl xl:text-4xl">
                {result.value}
              </p>
              <p className="mt-1.5 text-[10px] font-light tracking-[0.15em] uppercase text-white/45 md:mt-2 md:text-[12px] md:tracking-[0.2em]">
                {result.label}
              </p>
              {result.context && (
                <p className="mt-0.5 text-[11px] font-light italic text-white/40 md:mt-1 md:text-[12px]">
                  {result.context}
                </p>
              )}
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="mb-16 h-px bg-white/10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          style={{ originX: 0 }}
        />

        {/* Sections */}
        {narrativeSections.map((section, i) => {
          const isHighlight = section.key === "problem" || section.key === "solution" || section.key === "outcome";
          const isReflection = section.key === "hindsight";
          
          return (
            <motion.div
              key={section.key}
              className={`mb-20 ${isReflection ? "border-l-2 border-white/[0.08] pl-6 md:pl-8" : ""} ${isHighlight ? "rounded-2xl border border-white/[0.06] bg-dark-gray/20 p-8 md:p-10" : ""}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-64px" }}
              transition={{
                delay: i * 0.05,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3 className={`mb-6 ${isHighlight ? "font-serif text-[clamp(1.5rem,3vw,2rem)] font-normal tracking-[-0.01em] text-white" : "text-[13px] font-light tracking-[0.25em] uppercase text-white/50"}`}>
                {section.label}
              </h3>
              <div className={`prose-custom ${isHighlight ? "text-white/90" : "text-gray/80"}`}>
                {project[section.key]?.split('\n\n').map((paragraph: string, pi: number) => (
                  <p 
                    key={pi} 
                    className={`${pi > 0 ? 'mt-6' : ''} ${isHighlight ? 'text-[17px] leading-[1.8]' : 'text-[16px] leading-[1.85]'} font-light`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          );
        })}

        {/* Footer */}
        <div className="mt-24 border-t border-white/10 pt-10 flex items-center justify-between">
          <p className="text-[12px] font-light tracking-[0.2em] uppercase text-white/40">
            {project.title}, {project.year}
          </p>
          <Link
            href="/#work"
            className="group flex items-center gap-4 text-[12px] font-light tracking-[0.15em] uppercase text-white/40 transition-colors hover:text-white"
          >
            All Work
            <span className="block h-px w-6 bg-white/30 transition-all duration-500 group-hover:w-10 group-hover:bg-white" />
          </Link>
        </div>
      </article>
    </div>
  );
}
