"use client";

import { useAnimatedCounter, parseMetric } from "@/hooks/useAnimatedCounter";

interface AnimatedMetricProps {
  value: string;
  className?: string;
  duration?: number;
  delay?: number;
}

export default function AnimatedMetric({
  value,
  className,
  duration = 1.5,
  delay,
}: AnimatedMetricProps) {
  const { prefix, number, suffix } = parseMetric(value);
  const { value: animatedNumber, ref } = useAnimatedCounter(
    number,
    duration,
    delay == null,
    delay,
  );

  const isPositive = prefix === "+";
  const isNegative = prefix === "−" || prefix === "-";

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
      {suffix && (
        <span
          className={
            suffix.toLowerCase() === "x"
              ? "text-[var(--color-accent)]"
              : suffix === "+"
                ? "text-[var(--color-success)]"
                : suffix === "−" || suffix === "-"
                  ? "text-[var(--color-error)]"
                  : ""
          }
        >
          {suffix}
        </span>
      )}
    </span>
  );
}
