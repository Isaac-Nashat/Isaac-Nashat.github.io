"use client";

import { useAnimatedCounter, parseMetric } from "@/hooks/useAnimatedCounter";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedMetricProps {
  value: string;
  className?: string;
  duration?: number;
  delay?: number;
}

function suffixColor(s: string): string {
  const lower = s.toLowerCase();
  if (lower === "x") return "text-[var(--color-accent)]";
  if (s === "+") return "text-[var(--color-success)]";
  if (s === "−" || s === "-") return "text-[var(--color-error)]";
  return "";
}

function RangeMetric({
  from,
  to,
  className,
  duration,
  delay,
}: {
  from: number;
  to: number;
  className?: string;
  duration: number;
  delay?: number;
}) {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(wrapperRef, { once: true, margin: "-40px" });

  const startOnView = delay == null;
  const { value: fromVal } = useAnimatedCounter(
    from, duration, startOnView, delay, isInView,
  );
  const { value: toVal } = useAnimatedCounter(
    to, duration, startOnView, delay ? delay + 0.2 : undefined, isInView,
  );

  return (
    <span ref={wrapperRef} className={className}>
      <span className="text-white/50">{fromVal}</span>
      <span className="mx-1 text-white/30">→</span>
      <span>{toVal}</span>
    </span>
  );
}

export default function AnimatedMetric({
  value,
  className,
  duration = 1.5,
  delay,
}: AnimatedMetricProps) {
  const rangeMatch = value.match(/^(\d+)\s*→\s*(\d+)$/);
  if (rangeMatch) {
    return (
      <RangeMetric
        from={parseInt(rangeMatch[1])}
        to={parseInt(rangeMatch[2])}
        className={className}
        duration={duration}
        delay={delay}
      />
    );
  }

  const { prefix, number, suffix } = parseMetric(value);

  const isTextOnly = number === 0 && suffix === value;
  const { value: animatedNumber, ref } = useAnimatedCounter(
    number,
    duration,
    delay == null,
    delay,
  );

  if (isTextOnly) {
    return <span ref={ref} className={className}>{value}</span>;
  }

  const isPositive = prefix.startsWith("+");
  const isNegative = prefix.startsWith("−") || prefix.startsWith("-");

  const prefixColor = isPositive
    ? "text-[var(--color-success)]"
    : isNegative
      ? "text-[var(--color-error)]"
      : "";

  return (
    <span ref={ref} className={className}>
      {prefix && (
        <span className={prefixColor}>
          {prefix}
          {"\u2009"}
        </span>
      )}
      {animatedNumber}
      {suffix && (() => {
        const trailingSign = suffix.match(/^(.+?)([+\-−])$/);
        if (trailingSign) {
          return (
            <>
              <span>{trailingSign[1]}</span>
              <span className={suffixColor(trailingSign[2])}>{trailingSign[2]}</span>
            </>
          );
        }
        return <span className={suffixColor(suffix)}>{suffix}</span>;
      })()}
    </span>
  );
}
