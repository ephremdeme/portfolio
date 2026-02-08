"use client";

import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Header */}
      <h1 className="font-mono text-2xl font-medium text-[var(--text-primary)]">
        <span className="text-[var(--accent)]">#</span> projects
      </h1>
      <p className="mt-2 text-sm text-[var(--text-secondary)]">
        Selected work from crypto, SaaS, and side projects.
      </p>

      {/* Projects Grid */}
      <div className="mt-10 space-y-6">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] p-6 transition-colors hover:border-[var(--border-hover)]"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-mono text-base font-medium text-[var(--text-primary)]">
                {project.name}
              </h3>
              {project.featured && (
                <span className="shrink-0 font-mono text-xs text-[var(--accent)]">
                  featured
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              {project.description}
            </p>

            {/* Impact */}
            <ul className="mt-4 space-y-1">
              {project.impact.map((item, i) => (
                <li key={i} className="font-mono text-xs text-[var(--text-muted)]">
                  <span className="text-[var(--accent)]">→</span> {item}
                </li>
              ))}
            </ul>

            {/* Tech */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-[var(--accent-muted)] px-1.5 py-0.5 font-mono text-xs text-[var(--accent)]"
                >
                  {tech.toLowerCase()}
                </span>
              ))}
            </div>

            {/* Links */}
            {project.links.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="font-mono text-xs text-[var(--accent)] transition-opacity hover:opacity-80"
                  >
                    {link.label} →
                  </Link>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
