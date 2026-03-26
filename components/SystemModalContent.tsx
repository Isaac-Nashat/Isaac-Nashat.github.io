"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { System } from "@/lib/systems";

interface SystemModalContentProps {
  system: System;
}

export default function SystemModalContent({ system }: SystemModalContentProps) {
  return (
    <>
      {/* Header */}
      <motion.div
        className="mb-10 md:mb-14"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-3 flex flex-wrap items-center gap-2 md:mb-4 md:gap-4">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/50 md:text-[12px] md:tracking-[0.25em]">
            {system.category}
          </span>
          <span className="h-px w-3 bg-white/30 md:w-4" />
          <span className="text-[11px] font-medium tracking-[0.2em] text-white/50 md:text-[12px] md:tracking-[0.25em]">
            {system.tags.join(" / ")}
          </span>
        </div>

        <h2 className="font-serif text-[clamp(2rem,10vw,4rem)] font-normal leading-[1.1] tracking-[-0.02em] text-white md:leading-[1.15] md:tracking-[-0.01em]">
          {system.title}
        </h2>

        {system.scale && (
          <p className="mt-4 text-[13px] font-medium tracking-[0.1em] uppercase text-white/50 md:mt-5 md:text-[14px]">
            Scales to {system.scale}
          </p>
        )}
      </motion.div>

      {/* Workflow Image */}
      <motion.div
        className="mb-10 overflow-hidden rounded-xl border border-white/6 md:mb-14 md:rounded-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {system.image ? (
          <div className="relative aspect-video">
            <Image
              src={system.image}
              alt={`${system.title} workflow diagram`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>
        ) : (
          <div className="flex aspect-video items-center justify-center bg-dark-gray/40">
            <div className="text-center">
              <svg className="mx-auto mb-3 h-8 w-8 text-white/20 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                <path d="M12 4v6M4 12h6M14 12h6M12 14v6" strokeOpacity="0.3" />
              </svg>
              <p className="text-[12px] font-light tracking-[0.1em] text-white/25 md:text-[13px]">
                Workflow diagram coming soon
              </p>
            </div>
          </div>
        )}
      </motion.div>

      {/* Overview */}
      <motion.div
        className="mb-14 rounded-xl border border-white/6 bg-dark-gray/20 p-5 sm:p-6 md:mb-20 md:rounded-2xl md:p-8 lg:p-10"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6 }}
      >
        <h3 className="mb-4 font-serif text-[clamp(1.25rem,3vw,2rem)] font-normal tracking-[-0.01em] text-white md:mb-6">
          Overview
        </h3>
        <p className="text-[15px] font-light leading-[1.75] text-white/90 md:text-[17px] md:leading-[1.8]">
          {system.overview}
        </p>
      </motion.div>

      {/* Highlights */}
      <motion.div
        className="mb-14 md:mb-20"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-64px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="mb-4 text-[11px] font-light tracking-[0.25em] uppercase text-white/50 md:mb-6 md:text-[13px]">
          Key Highlights
        </h3>
        <ul className="space-y-0">
          {system.highlights.map((item, i) => (
            <motion.li
              key={i}
              className="border-t border-white/6 py-4 md:py-5"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <p className="text-[14px] font-light leading-[1.7] text-gray/80 md:text-[16px] md:leading-relaxed">
                {item}
              </p>
            </motion.li>
          ))}
          <li className="border-t border-white/6" aria-hidden="true" />
        </ul>
      </motion.div>

      {/* Architecture */}
      <motion.div
        className="mb-14 rounded-xl border border-white/6 bg-dark-gray/20 p-5 sm:p-6 md:mb-20 md:rounded-2xl md:p-8 lg:p-10"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-64px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="mb-4 font-serif text-[clamp(1.25rem,3vw,2rem)] font-normal tracking-[-0.01em] text-white md:mb-6">
          How It Works
        </h3>
        <p className="text-[15px] font-light leading-[1.75] text-white/90 md:text-[17px] md:leading-[1.8]">
          {system.architecture}
        </p>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        className="mb-14 md:mb-20"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-64px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="mb-4 text-[11px] font-light tracking-[0.25em] uppercase text-white/50 md:mb-6 md:text-[13px]">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {system.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-white/8 bg-dark-gray/40 px-3 py-1.5 text-[12px] font-light tracking-[0.05em] text-white/60 md:px-4 md:py-2 md:text-[13px]"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-16 border-t border-white/10 pt-8 md:mt-24 md:pt-10">
        <p className="text-[11px] font-light tracking-[0.15em] uppercase text-white/40 md:text-[12px] md:tracking-[0.2em]">
          {system.title}
        </p>
      </div>
    </>
  );
}
