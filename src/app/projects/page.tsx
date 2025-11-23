import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-5xl px-4 py-20">
        <SectionHeading
          eyebrow="Projects"
          title="Case studies with receipts"
          description="BoxExchanger leads because it showcases the Web3 pivot, followed by data-heavy SaaS and academic work."
        />
        <div className="mt-10 space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
