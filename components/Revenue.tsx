"use client";

import { motion } from "framer-motion";

const credentials = [
  "Owned full-cycle B2B SaaS sales across enterprise, mid-market, and SMB",
  "Built GTM strategies that improved pipeline quality and win rates",
  "Increased renewals by 25% and reduced CAC by 10%",
  "Led cross-functional execution across Product, Sales, and Analytics",
  "Built CRM systems and dashboards improving forecasting accuracy",
  "Managed C-level stakeholders and complex deal cycles",
];

export default function Revenue() {
  return (
    <section className="relative bg-black pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20 border-t border-white/[0.06]">
      <div className="content-grid bg-off-black rounded-xl p-5 md:rounded-2xl md:p-10 lg:p-12">
      <motion.p
        className="mb-4 text-[11px] font-medium tracking-[0.3em] uppercase text-white/60 md:mb-6 md:text-[13px] md:tracking-[0.35em] lg:mb-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Revenue Experience
      </motion.p>

      <div className="grid gap-8 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-5">
          <motion.h2
            className="font-serif text-[clamp(1.75rem,6vw,3.5rem)] font-normal leading-[1.2] tracking-[-0.01em] text-white md:leading-[1.25]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            I don&apos;t just design growth systems.
            I&apos;ve <span className="italic">operated</span> them.
          </motion.h2>
        </div>

        <div className="lg:col-span-7">
          <ul className="space-y-0">
            {credentials.map((item, i) => (
              <motion.li
                key={i}
                className="border-t border-white/[0.06] py-4 md:py-6"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="text-[14px] font-light leading-[1.7] text-gray md:text-[16px] md:leading-relaxed">
                  {item}
                </p>
              </motion.li>
            ))}
            <div className="border-t border-white/[0.06]" />
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
}
