"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import AnimatedMetric from "./AnimatedMetric";

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

interface CaseStudyContentProps {
  project: Project;
  animationOffset?: number;
}

export default function CaseStudyContent({
  project,
  animationOffset = 0,
}: CaseStudyContentProps) {
  return (
    <>
      {/* Header */}
      <motion.div
        className="mb-12 md:mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: animationOffset,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="mb-3 flex flex-wrap items-center gap-2 md:mb-4 md:gap-4">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/50 md:text-[12px] md:tracking-[0.25em]">
            {project.tags.join(" / ")}
          </span>
          <span className="h-px w-3 bg-white/30 md:w-4" />
          <span className="text-[11px] font-medium tracking-[0.2em] text-white/50 md:text-[12px] md:tracking-[0.25em]">
            {project.year}
          </span>
        </div>

        <h2 className="font-serif text-[clamp(2rem,10vw,5rem)] font-normal leading-[1.1] tracking-[-0.02em] text-white md:leading-[1.15] md:tracking-[-0.01em]">
          {project.title}
        </h2>

        <p className="mt-6 max-w-lg text-[14px] font-light leading-[1.7] text-gray md:mt-8 md:text-[16px] md:leading-relaxed">
          {project.description}
        </p>
      </motion.div>

      {/* Before Snapshot */}
      {project.before.length > 0 && (
        <motion.div
          className="mb-10 mt-10 border-l-2 border-white/8 pl-5 md:mb-12 md:mt-12 md:pl-6 lg:pl-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: animationOffset + 0.1, duration: 0.6 }}
        >
          <p className="mb-3 text-[11px] font-medium tracking-[0.25em] uppercase text-white/50 md:mb-4 md:text-[12px] md:tracking-[0.3em]">
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
        className="mb-14 mt-10 grid grid-cols-1 gap-5 rounded-xl border border-white/8 p-5 sm:grid-cols-3 md:mb-20 md:mt-12 md:gap-6 md:p-8 lg:p-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: animationOffset + 0.15, duration: 0.6 }}
      >
        {project.results.map((result, ri) => (
          <div key={ri} className="text-center">
            <AnimatedMetric
              value={result.value}
              className="text-2xl font-medium tabular-nums text-white md:text-3xl lg:text-4xl"
              duration={2}
            />
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
        className="mb-12 h-px bg-white/10 md:mb-16"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: animationOffset + 0.2, duration: 0.8 }}
        style={{ originX: 0 }}
      />

      {/* Sections */}
      {narrativeSections.map((section, i) => {
        const isHighlight =
          section.key === "problem" ||
          section.key === "solution" ||
          section.key === "outcome";
        const isReflection = section.key === "hindsight";

        return (
          <motion.div
            key={section.key}
            className={`mb-14 md:mb-20 ${
              isReflection
                ? "border-l-2 border-white/8 pl-5 md:pl-6 lg:pl-8"
                : ""
            } ${
              isHighlight
                ? "rounded-xl border border-white/6 bg-dark-gray/20 p-5 sm:p-6 md:rounded-2xl md:p-8 lg:p-10"
                : ""
            }`}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-64px" }}
            transition={{
              delay: i * 0.05,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h3
              className={`mb-4 md:mb-6 ${
                isHighlight
                  ? "font-serif text-[clamp(1.25rem,3vw,2rem)] font-normal tracking-[-0.01em] text-white"
                  : "text-[11px] font-light tracking-[0.25em] uppercase text-white/50 md:text-[13px]"
              }`}
            >
              {section.label}
            </h3>
            <div
              className={`${
                isHighlight ? "text-white/90" : "text-gray/80"
              }`}
            >
              {project[section.key]
                ?.split("\n\n")
                .map((paragraph: string, pi: number) => (
                  <p
                    key={pi}
                    className={`${pi > 0 ? "mt-5 md:mt-6" : ""} ${
                      isHighlight
                        ? "text-[15px] leading-[1.75] md:text-[17px] md:leading-[1.8]"
                        : "text-[14px] leading-[1.8] md:text-[16px] md:leading-[1.85]"
                    } font-light`}
                  >
                    {paragraph}
                  </p>
                ))}
            </div>
          </motion.div>
        );
      })}

      {/* Footer */}
      <div className="mt-16 border-t border-white/10 pt-8 md:mt-24 md:pt-10">
        <p className="text-[11px] font-light tracking-[0.15em] uppercase text-white/40 md:text-[12px] md:tracking-[0.2em]">
          {project.title}, {project.year}
        </p>
      </div>
    </>
  );
}
