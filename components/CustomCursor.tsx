"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";

type CursorState = "default" | "view" | "open" | "send" | "hover";

const CURSOR_LABELS: Record<string, string> = {
  view: "View",
  open: "Open",
  send: "Send",
};

export default function CustomCursor() {
  const [state, setState] = useState<CursorState>("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice] = useState(
    () =>
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0),
  );
  const velocityRef = useRef(0);
  const prevRef = useRef({ x: 0, y: 0, time: 0 });

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const stiffness = state === "default" ? 500 : 280;
  const damping = state === "default" ? 40 : 28;

  const springX = useSpring(cursorX, { stiffness, damping });
  const springY = useSpring(cursorY, { stiffness, damping });

  const handleMove = useCallback(
    (e: MouseEvent) => {
      const now = performance.now();
      const dx = e.clientX - prevRef.current.x;
      const dy = e.clientY - prevRef.current.y;
      const dt = Math.max(now - prevRef.current.time, 1);
      velocityRef.current = Math.sqrt(dx * dx + dy * dy) / dt;
      prevRef.current = { x: e.clientX, y: e.clientY, time: now };

      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    },
    [cursorX, cursorY, isVisible]
  );

  useEffect(() => {
    if (isTouchDevice) return;

    const handleEnter = () => setIsVisible(true);
    const handleLeave = () => setIsVisible(false);

    const processed = new WeakSet<Element>();

    const addHoverListeners = () => {
      document.querySelectorAll("[data-cursor]").forEach((el) => {
        if (processed.has(el)) return;
        processed.add(el);
        el.addEventListener("mouseenter", () => {
          setState(el.getAttribute("data-cursor") as CursorState);
        });
        el.addEventListener("mouseleave", () => setState("default"));
      });

      document
        .querySelectorAll(
          "a:not([data-cursor]), button:not([data-cursor]), input, textarea"
        )
        .forEach((el) => {
          if (processed.has(el)) return;
          processed.add(el);
          el.addEventListener("mouseenter", () => setState("hover"));
          el.addEventListener("mouseleave", () => setState("default"));
        });
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseenter", handleEnter);
    document.addEventListener("mouseleave", handleLeave);

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseenter", handleEnter);
      document.removeEventListener("mouseleave", handleLeave);
      observer.disconnect();
    };
  }, [isTouchDevice, handleMove]);

  if (isTouchDevice) return null;

  const hasLabel = state in CURSOR_LABELS;
  const isExpanded = hasLabel || state === "hover";

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden md:flex items-center justify-center"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="flex items-center justify-center rounded-full"
          animate={{
            width: hasLabel ? 80 : isExpanded ? 40 : 8,
            height: hasLabel ? 80 : isExpanded ? 40 : 8,
            opacity: isVisible ? 1 : 0,
            backgroundColor: hasLabel
              ? "rgba(255,255,255,0.9)"
              : isExpanded
                ? "rgba(255,255,255,0.12)"
                : "rgba(255,255,255,0.8)",
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {hasLabel && (
            <motion.span
              className="text-[12px] font-medium tracking-[0.15em] uppercase text-black select-none"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 0.05 }}
            >
              {CURSOR_LABELS[state]}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
