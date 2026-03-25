"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Growth",
    items: [
      "Conversion Optimization",
      "Funnel Architecture",
      "Revenue Analytics & Attribution",
      "SEO & Performance Systems",
      "Experimentation (A/B, CRO)",
      "CAC / LTV Optimization",
    ],
  },
  {
    title: "Product",
    items: [
      "Product Strategy & Roadmapping",
      "User Research → Revenue Insights",
      "UX Systems & Decision Design",
      "Impact-Driven Prioritization",
      "Go-to-Market Alignment",
      "Data-Driven Design",
    ],
  },
  {
    title: "Automation",
    items: [
      "AI Agents & Autonomous Workflows",
      "Event-Driven Pipelines (n8n / RabbitMQ)",
      "CRM & Sales Automation",
      "Multi-Platform Integrations",
      "Self-Learning Feedback Loops",
      "Full-Stack Systems (Next.js / Python)",
    ],
  },
  {
    title: "Revenue",
    items: [
      "B2B SaaS Sales & Pipeline",
      "Enterprise Deal Structuring",
      "CRM Systems (Salesforce / HubSpot)",
      "Forecasting & Pipeline Health",
      "Stakeholder & C-Level Mgmt",
      "Renewal & Expansion Strategy",
    ],
  },
];

export default function Skills() {
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
        Expertise
      </motion.p>

      <div className="grid gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: gi * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h3 className="mb-5 text-lg font-medium tracking-[-0.01em] text-white md:mb-8 md:text-xl">
              {group.title}
            </h3>
            <ul className="space-y-0">
              {group.items.map((item, ii) => (
                <li key={item} className="border-t border-white/[0.06]">
                  <motion.div
                    className="group flex items-center py-3 transition-colors duration-300 hover:border-white/20 md:py-4"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: gi * 0.25 + ii * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span className="mr-3 h-px w-0 bg-white/30 transition-all duration-300 group-hover:w-3 md:mr-4 md:group-hover:w-4" />
                    <span className="text-[13px] font-light text-gray/70 transition-colors duration-300 group-hover:text-white md:text-[14px]">
                      {item}
                    </span>
                  </motion.div>
                </li>
              ))}
            </ul>
            <div className="border-t border-white/[0.06]" />
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
