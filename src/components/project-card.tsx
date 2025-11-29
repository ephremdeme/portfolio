import Link from "next/link";
import { Github, Link2 } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-3xl border border-slate-800/80 bg-slate-900/30 p-6 shadow-lg shadow-emerald-600/5 transition hover:-translate-y-1 hover:border-emerald-500/60">
      <div className="md:grid md:grid-cols-[1fr_auto] md:gap-x-4">
        <header className="flex items-start justify-between gap-4 md:col-span-2">
          <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
          <span className="inline-flex items-center justify-center whitespace-nowrap flex-shrink-0 min-w-[5.5rem] rounded-full border border-emerald-500/40 px-3 py-1 text-xs uppercase text-emerald-200 md:self-start">
            Case Study
          </span>
        </header>
        <p className="mt-3 text-slate-300 md:col-start-1 md:mr-4 lg:mr-13">{project.description}</p>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-emerald-200">
        {project.impact.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
        {project.tech.map((tech) => (
          <span key={tech} className="rounded-full border border-slate-800/70 px-3 py-1">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        {project.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inline-flex items-center gap-2 text-emerald-300 transition hover:text-white"
          >
            {link.label === "GitHub" ? <Github className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
            {link.label}
          </Link>
        ))}
      </div>
    </article>
  );
}
