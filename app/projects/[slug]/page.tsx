import { projects } from "@/data/projects";

interface ProjectParams{
  slug: string;
}

export default function ProjectPage({ params }: ProjectParams) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="max-w-4xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

      <img src={project.image} className="mb-6" />

      <p className="text-lg">{project.description}</p>
    </div>
  );
}