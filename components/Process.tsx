"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Diagnose",
    description: "Identify bottlenecks, not symptoms.",
  },
  {
    number: "02",
    title: "Prioritize",
    description: "Focus on highest-leverage opportunities.",
  },
  {
    number: "03",
    title: "Build",
    description: "Design the strategy. Build the system that executes it.",
  },
  {
    number: "04",
    title: "Automate",
    description: "Make it run without me. Measure, learn, improve.",
  },
];

export default function Process() {
  return (
    <section className="relative bg-black pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20 border-t border-white/[0.06]">
      <div className="content-grid">
      <motion.p
        className="mb-4 text-[11px] font-medium tracking-[0.3em] uppercase text-white/60 md:mb-6 md:text-[13px] md:tracking-[0.35em] lg:mb-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        How I Work
      </motion.p>

      <div className="grid gap-0 md:grid-cols-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            className="group relative border-t border-white/[0.06] py-10 md:border-l md:border-t-0 md:px-8 md:py-0 md:first:border-l-0 md:first:pl-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mb-4 text-[11px] font-medium tracking-[0.2em] text-white/50">
              {step.number}
            </p>
            <h3 className="mb-3 text-lg font-medium tracking-[-0.01em] text-white md:text-xl">
              {step.title}
            </h3>
            <p className="text-[14px] font-light leading-relaxed text-gray/70">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
