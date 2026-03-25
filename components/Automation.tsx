"use client";

import { motion } from "framer-motion";

interface System {
  title: string;
  description: string;
  tags: string[];
}

const systems: System[] = [
  {
    title: "AI Sales & Lead Engines",
    description:
      "End-to-end pipelines that qualify leads, score intent, and route prospects to the right action: auto-reply, nurture, or human handoff.",
    tags: ["AI Agents", "Lead Scoring", "Pipeline Automation"],
  },
  {
    title: "Social CRM Systems",
    description:
      "Multi-platform intake from Facebook, Instagram, TikTok, and YouTube, funneled through AI intent detection into WhatsApp conversion sequences.",
    tags: ["Multi-Platform", "WhatsApp API", "RabbitMQ"],
  },
  {
    title: "Competitor Intelligence",
    description:
      "Automated scraping and AI analysis of competitor content. Extracts winning hooks, patterns, and generates actionable weekly strategies.",
    tags: ["Web Scraping", "AI Analysis", "Content Strategy"],
  },
  {
    title: "AI Support Agents",
    description:
      "Autonomous ticket triage, knowledge base retrieval, and AI-generated responses with human escalation paths and self-improving feedback loops.",
    tags: ["NLP", "Queue Systems", "Learning Loops"],
  },
  {
    title: "HR & Recruitment Automation",
    description:
      "CV assessment engines with dual-AI pipelines, automated scoring, candidate ranking, and recruiter notification workflows.",
    tags: ["Document Processing", "AI Scoring", "Google Workspace"],
  },
  {
    title: "Content & Repurposing Engines",
    description:
      "One piece of content in, platform-specific outputs across LinkedIn, Twitter, and Instagram. Performance feedback loops learn what works.",
    tags: ["AI Generation", "Multi-Format", "Performance Learning"],
  },
];

export default function Automation() {
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

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {systems.map((system, i) => (
            <motion.div
              key={system.title}
              className="group rounded-xl border border-white/[0.06] bg-dark-gray/40 p-5 transition-all duration-500 hover:bg-dark-gray hover:border-white/[0.1] md:rounded-2xl md:p-6 lg:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
