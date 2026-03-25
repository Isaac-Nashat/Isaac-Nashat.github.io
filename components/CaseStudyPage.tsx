"use client";

import Link from "next/link";
import type { Project } from "@/lib/projects";
import CaseStudyContent from "./CaseStudyContent";

export default function CaseStudyPage({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-off-black">
      <nav className="flex items-center justify-end px-8 py-6 md:px-10 lg:px-20">
        <Link
          href="/"
          className="group flex items-center gap-3 text-[13px] font-light tracking-[0.15em] uppercase text-white/40 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 md:gap-4 md:text-[14px]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="transition-transform group-hover:-translate-x-1"
          >
            <path d="M10 1L3 7l7 6" />
          </svg>
          Back
        </Link>
      </nav>

      <article className="mx-auto max-w-3xl px-8 pb-20 pt-6 md:px-10 md:pb-28 md:pt-10 lg:pt-16">
        <CaseStudyContent project={project} />

        <Link
          href="/#work"
          className="group mt-6 flex w-full items-center justify-between text-[13px] font-light tracking-[0.15em] uppercase text-white/40 transition-colors hover:text-white md:text-[14px]"
        >
          <span className="block h-px flex-1 bg-white/10 transition-all duration-500 group-hover:bg-white/20" />
          <span className="px-4 md:px-6">All Work</span>
          <span className="block h-px flex-1 bg-white/10 transition-all duration-500 group-hover:bg-white/20" />
        </Link>
      </article>
    </div>
  );
}
