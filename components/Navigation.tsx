"use client";

import { motion, useReducedMotion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 100);
  });

  useEffect(() => {
    const main = document.querySelector("main");
    if (menuOpen) {
      main?.setAttribute("inert", "");
    } else {
      main?.removeAttribute("inert");
    }
    return () => main?.removeAttribute("inert");
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        className="fixed top-6 left-0 right-0 z-50 section-shell transition-colors duration-500"
        style={{
          backgroundColor: "transparent",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 0.8, delay: 2.6, ease: [0.22, 1, 0.36, 1] }
        }
      >
        <div className="content-grid flex items-center justify-center py-6">
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative text-[14px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30"
          aria-label="Toggle menu"
        >
          <motion.span
            className="block h-px w-6 bg-white origin-center"
            animate={menuOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block h-px w-6 bg-white"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-px w-6 bg-white origin-center"
            animate={menuOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
        </div>
      </motion.nav>

      {/* Mobile overlay — decision screen */}
      <motion.div
        id="mobile-menu"
        className="fixed inset-0 z-[55] flex flex-col bg-black md:hidden overflow-hidden"
        initial={{ opacity: 0 }}
        animate={
          menuOpen
            ? { opacity: 1, pointerEvents: "auto" as const }
            : { opacity: 0, pointerEvents: "none" as const }
        }
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4 }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30"
          aria-label="Close menu"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/70">
            <path d="M1 1l16 16M17 1L1 17" />
          </svg>
        </button>

        {/* Animated gradient */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={
            menuOpen && !shouldReduceMotion
              ? {
                  background: [
                    "radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.03) 0%, transparent 60%)",
                    "radial-gradient(ellipse at 80% 30%, rgba(255,255,255,0.03) 0%, transparent 60%)",
                    "radial-gradient(ellipse at 50% 80%, rgba(255,255,255,0.03) 0%, transparent 60%)",
                    "radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.03) 0%, transparent 60%)",
                  ],
                }
              : {}
          }
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* Links */}
        <div className="flex flex-1 flex-col items-center justify-center gap-8">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
              className="text-4xl font-medium tracking-[-0.02em] text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30"
              initial={{ y: 40, opacity: 0 }}
              animate={menuOpen ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{
                delay: menuOpen ? 0.15 + i * 0.08 : 0,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {link.label}
            </motion.a>
          ))}

          {/* Dominant CTA */}
          <motion.a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
            className="mt-4 border border-white/20 px-8 py-4 text-[12px] font-light tracking-[0.2em] uppercase text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30"
            initial={{ y: 40, opacity: 0 }}
            animate={menuOpen ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
            transition={{
              delay: menuOpen ? 0.45 : 0,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Start a Project
          </motion.a>
        </div>

        {/* Bottom identity bar */}
        <motion.div
          className="px-8 pb-10 pt-6 border-t border-white/[0.06]"
          initial={{ opacity: 0, y: 20 }}
          animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: menuOpen ? 0.5 : 0, duration: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[12px] font-light tracking-[0.2em] uppercase text-white/40">
                Get in touch
              </p>
              <a
                href="mailto:isaac.nashaat@icloud.com"
                tabIndex={menuOpen ? 0 : -1}
                className="mt-1 block text-[14px] font-light text-gray transition-colors hover:text-white"
              >
                isaac.nashaat@icloud.com
              </a>
            </div>
            <div className="text-right">
              <p className="text-[12px] font-light tracking-[0.2em] uppercase text-white/40">
                Availability
              </p>
              <p className="mt-1 text-[14px] font-light text-gray">Open now</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
