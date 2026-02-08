"use client";

import Link from "next/link";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Header */}
      <h1 className="font-mono text-2xl font-medium text-[var(--text-primary)]">
        <span className="text-[var(--accent)]">#</span> experience
      </h1>
      <p className="mt-2 text-sm text-[var(--text-secondary)]">
        6+ years building production systems across crypto, SaaS, and startups.
      </p>

      {/* Experience List */}
      <div className="mt-10 space-y-8">
        {experiences.map((exp, index) => (
          <article
            key={index}
            className="rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] p-6"
          >
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-mono text-base font-medium text-[var(--text-primary)]">
                  {exp.link ? (
                    <Link 
                      href={exp.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[var(--accent)]"
                    >
                      {exp.company}
                    </Link>
                  ) : (
                    exp.company
                  )}
                </h3>
                <p className="font-mono text-sm text-[var(--accent)]">
                  {exp.role}
                </p>
              </div>
              <div className="text-right">
                <p className="font-mono text-xs text-[var(--text-muted)]">
                  {exp.timeframe}
                </p>
                <p className="font-mono text-xs text-[var(--text-muted)]">
                  {exp.location}
                </p>
              </div>
            </div>

            {/* Summary */}
            <p className="mt-4 text-sm text-[var(--text-secondary)]">
              {exp.summary}
            </p>

            {/* Achievements */}
            <ul className="mt-4 space-y-1">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="font-mono text-xs text-[var(--text-muted)]">
                  <span className="text-[var(--accent)]">→</span> {achievement}
                </li>
              ))}
            </ul>

            {/* Tech */}
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-[var(--accent-muted)] px-1.5 py-0.5 font-mono text-xs text-[var(--accent)]"
                >
                  {tech.toLowerCase()}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
