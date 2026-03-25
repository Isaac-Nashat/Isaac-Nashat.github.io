"use client";

import { motion } from "framer-motion";
import AnimatedMetric from "./AnimatedMetric";

interface Role {
  title: string;
  period: string;
  highlights: string[];
  metrics?: { value: string; label: string }[];
}

interface Company {
  name: string;
  location: string;
  roles: Role[];
}

const experience: Company[] = [
  {
    name: "PlateForm",
    location: "Egypt / MENA",
    roles: [
      {
        title: "Founder & CEO",
        period: "2025 – Present",
        highlights: [
          "Built a commission-free SaaS ordering platform for restaurants across Egypt, Saudi Arabia, UAE, and the Gulf",
          "Scaled to 38+ restaurants, 50K+ orders processed, saving clients $3.7M+ in aggregator commissions",
        ],
        metrics: [{ value: "EGP 3.7M+", label: "saved for restaurants" }],
      },
    ],
  },
  {
    name: "DoorDash",
    location: "California, USA",
    roles: [
      {
        title: "Senior Associate, Customer Acquisition (Acting Account Developer)",
        period: "Jul 2024 – Oct 2025",
        highlights: [
          "Owned full-cycle enterprise B2B SaaS sales, from outbound strategy through negotiation and close",
          "Led growth strategy for key accounts, managing C-level and senior stakeholders",
        ],
        metrics: [{ value: "210%", label: "of target, Q1" }],
      },
      {
        title: "Associate Customer Acquisition Specialist",
        period: "Nov 2024 – Oct Jun",
        highlights: [
          "Built a custom CRM dashboard that improved forecasting accuracy and pipeline visibility",
          "Streamlined workflows, reducing manual reporting and increasing team productivity",
        ],
      },
    ],
  },
  {
    name: "VOIS (Vodafone UK)",
    location: "Alexandria, Egypt",
    roles: [
      {
        title: "Sales & Retention Representative (SME & Mentor)",
        period: "Oct 2021 – Nov 2024",
        highlights: [
          "Ranked top performer across sales and retention dashboards",
          "Piloted and launched Talkmobile's first Sales & Retention (TSAR) team",
        ],
        metrics: [{ value: "1st", label: "TSAR team launched" }],
      },
    ],
  },
  {
    name: "Regional Technology Services",
    location: "Remote / EMEA",
    roles: [
      {
        title: "High Ticket Sales Manager (Contract)",
        period: "Apr 2021 – Oct 2021",
        highlights: [
          "Led distributed B2B SaaS sales team across EMEA (SMB & Mid-Market)",
          "Implemented structured sales playbooks and coaching frameworks",
        ],
      },
    ],
  },
  {
    name: "Kuna",
    location: "Kyiv, Ukraine",
    roles: [
      {
        title: "Sales & Retention Manager",
        period: "Sep 2019 – Mar 2021",
        highlights: [
          "Led SaaS adoption, renewals, and expansion strategy",
          "Introduced Agile sales methodologies, improving forecasting accuracy",
        ],
        metrics: [{ value: "+25%", label: "renewal rate" }],
      },
    ],
  },
  {
    name: "XTB Online Investing",
    location: "Kyiv, Ukraine",
    roles: [
      {
        title: "Financial Services Sales Specialist",
        period: "Sep 2018 – Feb 2019",
        highlights: [
          "Managed client portfolios in a regulated financial environment",
          "Used CRM-driven insights to improve conversion and close rates",
        ],
        metrics: [
          { value: "+43%", label: "conversion rate" },
          { value: "−17%", label: "CAC reduction" },
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
          Experience
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
              7+ years building revenue across{" "}
              <span className="italic">five companies.</span>
            </motion.h2>

            <motion.p
              className="mt-6 text-[14px] font-light leading-[1.7] text-gray md:mt-8 md:text-[16px] md:leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              From financial services in Kyiv to enterprise SaaS in California.
              Enterprise, mid-market, and SMB. I&apos;ve sold across every
              segment and built the teams to scale them.
            </motion.p>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-0">
              {experience.map((company, ci) => (
                <motion.div
                  key={company.name}
                  className="border-t border-white/[0.06] py-6 md:py-8"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: ci * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="flex flex-col gap-1 mb-4 md:flex-row md:items-baseline md:justify-between md:mb-5">
                    <h3 className="text-lg font-medium tracking-[-0.01em] text-white md:text-xl">
                      {company.name}
                    </h3>
                    <span className="text-[11px] font-light tracking-[0.12em] text-white/40 md:text-[12px] md:tracking-[0.15em]">
                      {company.location}
                    </span>
                  </div>

                  {company.roles.map((role, ri) => (
                    <div
                      key={ri}
                      className={ri > 0 ? "mt-5 pt-5 border-t border-white/[0.04]" : ""}
                    >
                      <div className="flex flex-col gap-0.5 mb-3 md:flex-row md:items-baseline md:justify-between">
                        <p className="text-[14px] font-light text-white/80 md:text-[15px]">
                          {role.title}
                        </p>
                        <p className="text-[11px] font-light tracking-[0.08em] text-white/40 md:text-[12px]">
                          {role.period}
                        </p>
                      </div>

                      <ul className="space-y-1.5">
                        {role.highlights.map((h, hi) => (
                          <li
                            key={hi}
                            className="text-[13px] font-light leading-[1.65] text-gray/70 md:text-[14px] md:leading-relaxed"
                          >
                            {h}
                          </li>
                        ))}
                      </ul>

                      {role.metrics && role.metrics.length > 0 && (
                        <div className="mt-3 flex flex-wrap items-baseline gap-x-5 gap-y-2">
                          {role.metrics.map((m, mi) => (
                            <div key={mi} className="inline-flex items-baseline gap-2">
                              <AnimatedMetric
                                value={m.value}
                                className="text-[15px] font-medium tabular-nums text-white/90 md:text-base"
                              />
                              <span className="text-[10px] font-light tracking-[0.12em] uppercase text-white/45 md:text-[12px] md:tracking-[0.15em]">
                                {m.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              ))}
              <div className="border-t border-white/[0.06]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
