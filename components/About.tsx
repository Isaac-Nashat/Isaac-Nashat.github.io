"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AnimatedMetric from "./AnimatedMetric";

const philosophy = [
  {
    label: "Design",
    value: "I don't design for aesthetics. I design for decision-making and revenue impact.",
  },
  {
    label: "Systems",
    value: "I build the infrastructure that runs without me. AI agents, pipelines, and workflows that scale autonomously.",
  },
  {
    label: "Craft",
    value: "The smallest details are where trust is built, and where conversion is won or lost.",
  },
];

export default function About() {
  return (
    <AnimatedSection
      id="about"
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
        About
      </motion.p>

      <div className="grid gap-8 lg:grid-cols-12 lg:gap-6">
        {/* Bio */}
        <div className="lg:col-span-7">
          <motion.h2
            className="font-serif text-[clamp(1.75rem,6vw,3.5rem)] font-normal leading-[1.2] tracking-[-0.01em] text-white md:leading-[1.25]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            I solve revenue problems{" "}
            <span className="inline-block italic">disguised</span>{" "}
            as product, design, or growth challenges.
          </motion.h2>

          <motion.div
            className="mt-8 space-y-5 text-[14px] font-light leading-[1.75] text-gray md:mt-12 md:space-y-6 md:text-[16px] md:leading-[1.8]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>
              Most teams treat strategy, product, and sales as separate
              functions. That separation creates misalignment, slows
              execution, and leaks revenue.
            </p>
            <p>
              I work across the full system: from positioning and funnel
              design to product decisions and go-to-market execution,
              then I build the automation that keeps it running without me.
            </p>
            <p>
              My background spans B2B SaaS sales, GTM strategy, and
              building autonomous systems: AI agents, event-driven
              pipelines, and self-learning workflows. I don&apos;t just
              optimize processes. I automate them. The result: revenue
              engines that close, convert, and scale on their own.
            </p>
          </motion.div>
        </div>

        {/* Philosophy */}
        <div className="lg:col-span-5 lg:pt-4">
          <div className="space-y-0">
            {philosophy.map((item, i) => (
              <motion.div
                key={item.label}
                className="border-t border-white/10 py-5 md:py-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="mb-2 text-[11px] font-medium tracking-[0.25em] uppercase text-white/50 md:text-[12px] md:tracking-[0.3em]">
                  {item.label}
                </p>
                <p className="text-[14px] font-light leading-[1.7] text-gray md:text-[16px] md:leading-relaxed">
                  {item.value}
                </p>
              </motion.div>
            ))}
            <div className="border-t border-white/10" />
          </div>

          {/* Stats */}
          <motion.div
            className="mt-8 flex gap-6 md:mt-12 md:gap-8 lg:gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { number: "7+", label: "Years" },
              { number: "40+", label: "Projects" },
              { number: "25+", label: "Automations" },
              { number: "20+", label: "Clients" },
            ].map((stat) => (
              <div key={stat.label}>
                <AnimatedMetric value={stat.number} className="text-xl font-medium tabular-nums text-white md:text-2xl" />
                <p className="mt-1 text-[10px] font-light tracking-[0.15em] uppercase text-white/40 md:text-[12px] md:tracking-[0.2em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
    </AnimatedSection>
  );
}
