import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export function ProjectHighlights({ limit }: { limit?: number }) {
  const items = projects.filter((p) => p.featured);
  const list = limit ? items.slice(0, limit) : items;
  return (
    <div className="space-y-8">
      {list.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
