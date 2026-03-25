"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function useLocalTime() {
  const [time, setTime] = useState("");
  const [tz, setTz] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
      const offset = -now.getTimezoneOffset() / 60;
      setTz(`GMT${offset >= 0 ? "+" : ""}${offset}`);
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return { time, tz };
}

export default function Footer() {
  const { time, tz } = useLocalTime();

  return (
    <motion.footer
      className="relative bg-black py-12 md:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="content-grid flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-8 text-center md:flex-row md:gap-4 md:pt-10 md:text-left">
        <p className="text-[10px] font-light tracking-[0.12em] uppercase text-white/40 md:text-[12px] md:tracking-[0.15em]">
          &copy; {new Date().getFullYear()} Isaac
        </p>
        <p className="text-[10px] font-light tracking-[0.08em] text-white/40 md:text-[12px] md:tracking-[0.1em]">
          {time && (
            <span>
              Local time {time} {tz} &middot;{" "}
            </span>
          )}
          Designed & built with precision
        </p>
      </div>
    </motion.footer>
  );
}
