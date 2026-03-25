import { getProjectBySlug } from "@/lib/projects";
import CaseStudyModal from "@/components/CaseStudyModal";
import { notFound } from "next/navigation";

export default async function InterceptedCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return <CaseStudyModal project={project} />;
}
