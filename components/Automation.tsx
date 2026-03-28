"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { systems, systemCategories } from "@/lib/systems";
import type { System } from "@/lib/systems";
import SystemModal from "./SystemModal";

export default function Automation() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedSystem, setSelectedSystem] = useState<System | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const filtered =
    activeFilter === "All"
      ? systems.slice(0, 6)
      : systems.filter((s) => s.category === activeFilter);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedSystem(null);
      setIsClosing(false);
    }, 500);
  }, []);

  return (
    <section
      id="systems"
      className="relative bg-black pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20 border-t border-white/[0.06]"
    >
      <div className="content-grid">
        <motion.p
          className="mb-4 text-[11px] font-medium tracking-[0.3em] uppercase text-white/60 md:mb-6 md:text-[13px] md:tracking-[0.35em] lg:mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Systems I Build
        </motion.p>

        <div className="mb-10 md:mb-14 lg:max-w-3xl">
          <motion.h2
            className="font-serif text-[clamp(1.75rem,6vw,3.5rem)] font-normal leading-[1.2] tracking-[-0.01em] text-white md:leading-[1.25]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            I don&apos;t just plan the strategy.
            <br />
            I <span className="italic">automate</span> the execution.
          </motion.h2>

          <motion.p
            className="mt-6 text-[14px] font-light leading-[1.7] text-gray md:mt-8 md:text-[16px] md:leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Most operators design processes and hand them off. I build the
            autonomous systems that run them: AI agents, event-driven
            pipelines, and self-learning workflows that operate at scale
            without constant oversight.
          </motion.p>
        </div>

        <motion.div
          className="flex items-center gap-3 overflow-x-auto pb-2 mb-6 md:gap-6 md:overflow-visible md:pb-0 md:mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {systemCategories.map((cat) => (
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

        <AnimatePresence mode="popLayout">
          {filtered.length === 0 && (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-24 text-center text-[14px] font-light text-white/40"
            >
              No systems in this category yet.
            </motion.p>
          )}
        </AnimatePresence>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((system, i) => (
            <motion.button
              key={system.id}
              data-cursor="open"
              onClick={() => setSelectedSystem(system)}
              className="group rounded-xl border border-white/[0.06] bg-dark-gray/40 p-5 text-left transition-[background-color,border-color] duration-500 hover:bg-dark-gray hover:border-white/[0.1] md:rounded-2xl md:p-6 lg:p-8 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-white/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <span className="text-[10px] font-light tracking-[0.15em] uppercase text-white/45 md:text-[11px] md:tracking-[0.18em]">
                  {system.category}
                </span>
                {system.scale && (
                  <span className="text-[10px] font-light tracking-[0.1em] text-white/35 md:text-[11px]">
                    {system.scale}
                  </span>
                )}
              </div>
              <h3 className="mb-3 text-[15px] font-medium tracking-[-0.01em] text-white md:mb-4 md:text-[16px]">
                {system.title}
              </h3>
              <p className="mb-5 text-[13px] font-light leading-[1.7] text-gray/70 md:mb-6 md:text-[14px] md:leading-relaxed">
                {system.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {system.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/[0.06] px-2 py-1 text-[10px] font-light tracking-[0.08em] text-white/40 transition-colors duration-300 group-hover:text-white/55 md:text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 text-[10px] font-light tracking-[0.15em] uppercase text-white/45 transition-colors duration-300 group-hover:text-white/70 md:mt-5 md:gap-4 md:text-[12px] md:tracking-[0.2em]">
                <span>Explore System</span>
                <span className="block h-px w-0 bg-white/40 transition-all duration-500 group-hover:w-6 md:group-hover:w-8" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {selectedSystem && (
        <SystemModal
          system={selectedSystem}
          isClosing={isClosing}
          onClose={handleClose}
        />
      )}
    </section>
  );
}
