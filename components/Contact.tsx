"use client";

import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://x.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
];

export default function Contact() {
  const [state, handleSubmit] = useForm("xpqoaljy");

  return (
    <section
      id="contact"
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
          Contact
        </motion.p>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          {/* Left side - Availability and description */}
          <div className="lg:col-span-5">
            <motion.h2
              className="font-serif text-[clamp(2rem,8vw,4rem)] font-normal leading-[1.15] tracking-[-0.01em] text-white md:leading-[1.2]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Let&apos;s work{" "}
              <span className="inline-block italic">together.</span>
            </motion.h2>

            <motion.div
              className="mt-6 flex flex-col gap-2 md:mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 border border-white/10 px-3 py-1.5 rounded-md w-fit md:px-4 md:py-2">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-light tracking-[0.12em] uppercase text-white/60 md:text-[12px] md:tracking-[0.15em]">
                  Available for consultation & freelance
                </span>
              </div>
              <p className="text-[11px] font-light tracking-[0.08em] text-white/45 md:text-[12px] md:tracking-[0.1em]">
                Currently working with teams in EU & US
              </p>
            </motion.div>

            <motion.p
              className="mt-6 text-[14px] font-light leading-[1.7] text-gray md:mt-10 md:text-[16px] md:leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              I typically work with teams that care about measurable outcomes, not
              just aesthetics. Best suited for teams with clear goals, real
              timelines, and a bias toward action.
            </motion.p>
          </div>

          {/* Right side - Form in a card */}
          <div className="lg:col-span-7">
            <motion.div
              className="rounded-xl border border-white/[0.06] bg-dark-gray/40 p-5 md:rounded-2xl md:p-8 lg:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {state.succeeded ? (
                <div className="flex flex-col items-center justify-center py-12 text-center md:py-16">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 md:mb-6 md:h-14 md:w-14">
                    <svg className="h-5 w-5 text-green-400 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-serif text-xl text-white md:text-2xl">Message sent.</p>
                  <p className="mt-2 text-[13px] font-light text-white/50 md:text-[14px]">
                    I&apos;ll get back to you within 24–48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-5 md:space-y-6">
                    <div>
                      <label htmlFor="contact-name" className="mb-2 block text-[11px] font-light tracking-[0.12em] uppercase text-white/60 md:mb-3 md:text-[13px] md:tracking-[0.15em]">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        aria-required="true"
                        className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5 text-[15px] font-light text-white transition-all duration-300 placeholder:text-white/30 hover:border-white/20 focus:border-white/40 focus:bg-white/[0.04] focus-visible:outline-none md:px-4 md:py-3 md:text-[16px]"
                        placeholder="John Doe"
                        id="contact-name"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="mb-2 block text-[11px] font-light tracking-[0.12em] uppercase text-white/60 md:mb-3 md:text-[13px] md:tracking-[0.15em]">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        aria-required="true"
                        className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5 text-[15px] font-light text-white transition-all duration-300 placeholder:text-white/30 hover:border-white/20 focus:border-white/40 focus:bg-white/[0.04] focus-visible:outline-none md:px-4 md:py-3 md:text-[16px]"
                        placeholder="john.doe@example.com"
                        id="contact-email"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-[12px] text-red-400" />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="mb-2 block text-[11px] font-light tracking-[0.12em] uppercase text-white/60 md:mb-3 md:text-[13px] md:tracking-[0.15em]">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        required
                        aria-required="true"
                        className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5 text-[15px] font-light text-white transition-all duration-300 placeholder:text-white/30 hover:border-white/20 focus:border-white/40 focus:bg-white/[0.04] focus-visible:outline-none md:px-4 md:py-3 md:text-[16px]"
                        placeholder="I'm interested in working with you on a project..."
                        id="contact-message"
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-[12px] text-red-400" />
                    </div>

                    <button
                      type="submit"
                      disabled={state.submitting}
                      data-cursor="send"
                      className="group mt-2 flex w-full items-center justify-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.02] px-5 py-3 text-[11px] font-medium tracking-[0.18em] uppercase text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 disabled:opacity-40 disabled:pointer-events-none md:gap-3 md:px-6 md:py-4 md:text-[13px] md:tracking-[0.2em]"
                    >
                      {state.submitting ? "Sending…" : "Start Conversation"}
                      {!state.submitting && (
                        <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 md:h-4 md:w-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
                          <path d="M2 8h12M10 4l4 4-4 4" />
                        </svg>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-10 border-t border-white/[0.06] pt-6 md:mt-12 md:pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
            <a
              href="mailto:isaac.nashaat@icloud.com"
              className="text-[13px] font-light text-white/40 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 md:text-[14px]"
            >
              isaac.nashaat@icloud.com
            </a>

            <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-8">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 py-1.5 text-[10px] font-light tracking-[0.15em] uppercase text-white/40 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 md:gap-2 md:py-2 md:text-[12px] md:tracking-[0.2em]"
                >
                  {social.label}
                  <svg
                    className="h-3 w-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:h-4 md:w-4"
                    fill="none"
                    viewBox="0 0 12 12"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path d="M2 10L10 2M10 2H4M10 2v6" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
