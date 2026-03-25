"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/projects";
import AnimatedMetric from "./AnimatedMetric";

const categories = ["All", "Branding", "Web", "Product"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isTouchDevice] = useState(
    () =>
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0),
  );

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const row1 = filtered.slice(0, 2);
  const row2 = filtered.slice(2, 4);

  return (
    <section
      id="work"
      className="relative bg-black pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20 border-t border-white/[0.06]"
    >
      <div className="content-grid">
        {/* Header + filter */}
        <div className="flex flex-col gap-4 mb-6 md:gap-6 md:mb-8 md:flex-row md:items-end md:justify-between lg:mb-12">
          <motion.p
            className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/60 md:text-[13px] md:tracking-[0.35em]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Selected Work
          </motion.p>

          <motion.div
            className="flex items-center gap-3 overflow-x-auto pb-2 md:gap-6 md:overflow-visible md:pb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`whitespace-nowrap px-2 py-2 text-[11px] font-light tracking-[0.12em] uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 md:text-[12px] md:tracking-[0.15em] ${
                  activeFilter === cat
                    ? "text-white"
                    : "text-white/40 hover:text-white/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

        {/* Bento grid */}
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 && (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-24 text-center text-[14px] font-light text-white/40"
            >
              No projects in this category yet.
            </motion.p>
          )}
        </AnimatePresence>

        <div className="content-grid">
        <div className="flex flex-col gap-4">          {/* Row 1 */}
          {row1.length > 0 && (
            <div className="flex flex-col gap-4 md:flex-row md:h-[432px]">
              {row1.map((project, i) => (
                <BentoCard
                  key={project.id}
                  project={project}
                  index={i}
                  widthClass={i === 0 ? "md:w-[58%]" : "md:w-[42%]"}
                  isTall={false}
                  hoveredId={hoveredId}
                  setHoveredId={setHoveredId}
                  isTouchDevice={isTouchDevice}
                />
              ))}
            </div>
          )}

          {/* Row 2 — taller */}
          {row2.length > 0 && (
            <div className="flex flex-col gap-4 md:flex-row md:h-[512px]">
              {row2.map((project, i) => (
                <BentoCard
                  key={project.id}
                  project={project}
                  index={i + 2}
                  widthClass={i === 0 ? "md:w-[67%]" : "md:w-[33%]"}
                  isTall={true}
                  hoveredId={hoveredId}
                  setHoveredId={setHoveredId}
                  isTouchDevice={isTouchDevice}
                />
              ))}
            </div>
          )}
        </div>
        </div>
    </section>
  );
}

function BentoCard({
  project,
  index,
  widthClass,
  isTall,
  hoveredId,
  setHoveredId,
  isTouchDevice,
}: {
  project: (typeof projects)[number];
  index: number;
  widthClass: string;
  isTall: boolean;
  hoveredId: number | null;
  setHoveredId: (id: number | null) => void;
  isTouchDevice: boolean;
}) {
  const isWide = widthClass.includes("58%") || widthClass.includes("67%");
  const isNoirStudio = project.slug === "noir-studio";
  const isAtelier = project.slug === "atelier";

  return (
    <motion.div
      className={widthClass}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={`/work/${project.slug}`}
        data-cursor="view"
        className={`group relative flex h-full flex-col justify-between rounded-xl border border-white/[0.06] bg-dark-gray/40 p-5 text-left transition-all duration-500 hover:bg-dark-gray hover:border-white/[0.1] md:rounded-2xl md:p-6 lg:p-8 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-white/30 ${
          !isTouchDevice && hoveredId !== null && hoveredId !== project.id
            ? "blur-[1px] opacity-60"
            : ""
        }`}
        style={{ paddingLeft: '8px', paddingRight: '8px' }}
        onMouseEnter={() => {
          if (!isTouchDevice) setHoveredId(project.id);
        }}
        onMouseLeave={() => {
          if (!isTouchDevice) setHoveredId(null);
        }}
      >
        <div>
          <div className="flex items-center justify-between mb-3 md:mb-4 lg:mb-6">
            <span
              className={`text-[10px] font-light tracking-[0.15em] uppercase text-white/45 md:text-[11px] md:tracking-[0.18em] lg:text-[12px] lg:tracking-[0.2em] ${
                isNoirStudio ? "px-2 py-2" : ""
              } ${isAtelier ? "my-2" : ""}`}
              style={{ marginTop: '8px', marginBottom: '8px' }}
            >
              {project.tags.join(" / ")}
            </span>
            <span
              className={`text-[10px] font-light tracking-[0.15em] text-white/45 md:text-[11px] md:tracking-[0.18em] lg:text-[12px] lg:tracking-[0.2em] ${
                isNoirStudio ? "py-2" : ""
              }`}
            >
              {project.year}
            </span>
          </div>

          <h3
            className={`font-serif font-normal tracking-[-0.01em] text-white transition-transform duration-500 group-hover:translate-x-2 ${
              isNoirStudio ? "px-2" : ""
            } ${isAtelier ? "mx-2" : ""} ${
              isWide
                ? "text-[clamp(1.5rem,5vw,3rem)] leading-[1.15] md:leading-[1.2]"
                : "text-[clamp(1.25rem,4vw,2.25rem)] leading-[1.15] md:leading-[1.2]"
            }`}
          >
            {project.title}
          </h3>
        </div>

        <div className="mt-auto pt-6 md:pt-8" style={{ paddingBottom: '8px' }}>
          {/* Insight swap */}
          <div className="relative min-h-[2.5rem]">
            <p
              className={`font-light leading-[1.65] text-gray/70 transition-all duration-500 delay-0 group-hover:opacity-0 group-hover:translate-y-[-4px] group-hover:delay-[400ms] md:leading-relaxed ${
                isNoirStudio ? "mx-2" : ""
              } ${isWide ? "text-[13px] md:text-[14px]" : "text-[13px] md:text-[14px]"}`}
            >
              {project.description}
            </p>
            <p
              className={`absolute font-light italic leading-[1.65] text-white/60 opacity-0 translate-y-2 transition-all duration-500 delay-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-[600ms] md:leading-relaxed ${
                isNoirStudio ? "inset-x-0 bottom-0 top-auto mx-2" : "inset-0"
              } ${isWide ? "text-[13px] md:text-[14px]" : "text-[13px] md:text-[14px]"}`}
            >
              &ldquo;{project.insight}&rdquo;
            </p>
          </div>

          {/* Metrics — wide cards only */}
          {isWide && project.results.length > 0 && (
            <div className={`mt-3 flex gap-4 md:mt-4 md:gap-6 ${isNoirStudio ? "px-2" : ""}`}>
              {project.results.slice(0, 2).map((r) => (
                <div key={r.label}>
                  <AnimatedMetric value={r.value} className="text-[15px] font-medium tabular-nums text-white/90 md:text-base" />
                  <p className="text-[10px] font-light tracking-[0.12em] uppercase text-white/45 md:text-[12px] md:tracking-[0.15em]">
                    {r.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div
            className={`mt-3 flex items-center gap-3 text-[10px] font-light tracking-[0.15em] uppercase text-white/45 transition-colors delay-[40ms] duration-300 group-hover:text-white/70 md:mt-4 md:gap-4 md:text-[12px] md:tracking-[0.2em] ${
              isNoirStudio ? "px-2" : ""
            }`}
            style={{ paddingBottom: '8px' }}
          >
            <span>Explore Case</span>
            <span className="block h-px w-0 bg-white/40 transition-all delay-[40ms] duration-500 group-hover:w-6 md:group-hover:w-8" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
