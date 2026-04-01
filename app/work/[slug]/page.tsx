import { getProjectBySlug, projects } from "@/lib/projects";
import CaseStudyPage from "@/components/CaseStudyPage";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const url = `https://isaac-nashaat.vercel.app/work/${slug}`;
  return {
    title: `${project.title} | Isaac Nashaat`,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${project.title} | Isaac Nashaat`,
      description: project.description,
      url,
      siteName: "Isaac Nashaat",
      images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Isaac Nashaat`,
      description: project.description,
      images: ["/og-image.webp"],
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return <CaseStudyPage project={project} />;
}
