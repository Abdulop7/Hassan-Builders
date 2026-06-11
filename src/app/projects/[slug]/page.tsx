import projectsData from '../../projects.json'
import { notFound } from 'next/navigation'
import ProjectClient from './ProjectClient'

function slugify(title: string, id: number | string) {
  return (
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") +
    "-" +
    id
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => slugify(p.title, p.id) === resolvedParams.slug);

  if (!project) return {};

  return {
    title: `${project.title} | Consolidated Construction Company`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.preview],
    },
  };
}

export function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: slugify(p.title, p.id),
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find(
    (p) => slugify(p.title, p.id) === resolvedParams.slug
  );

  if (!project) return notFound();

  // Determine next project for the CTA
  const currentIndex = projectsData.findIndex(p => p.id === project.id);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return <ProjectClient project={project} nextProject={nextProject} />
}
