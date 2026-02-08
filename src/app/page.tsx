"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { projects } from "@/data/projects";
import { allBlogs } from "content-collections";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const recentPosts = allBlogs
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 2);

  return (
    <div>
      <Hero />

      {/* Featured Projects */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-mono text-lg font-medium text-[var(--text-primary)]">
            <span className="text-[var(--accent)]">#</span> projects
          </h2>
          <Link
            href="/projects"
            className="font-mono text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
          >
            view all →
          </Link>
        </div>

        <div className="space-y-6">
          {featuredProjects.map((project) => (
            <article
              key={project.slug}
              className="rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] p-6 transition-colors hover:border-[var(--border-hover)]"
            >
              <h3 className="font-mono text-base font-medium text-[var(--text-primary)]">
                {project.name}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {project.description}
              </p>
              
              {/* Impact */}
              <ul className="mt-4 space-y-1">
                {project.impact.slice(0, 2).map((item, i) => (
                  <li key={i} className="font-mono text-xs text-[var(--text-muted)]">
                    <span className="text-[var(--accent)]">→</span> {item}
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 5).map((tech) => (
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
      </section>

      {/* Recent Blog Posts */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-mono text-lg font-medium text-[var(--text-primary)]">
            <span className="text-[var(--accent)]">#</span> blog
          </h2>
          <Link
            href="/blog"
            className="font-mono text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
          >
            view all →
          </Link>
        </div>

        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] p-4 transition-colors hover:border-[var(--border-hover)]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-mono text-sm font-medium text-[var(--text-primary)]">
                  {post.title}
                </h3>
                <time className="shrink-0 font-mono text-xs text-[var(--text-muted)]">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                    month: 'short', 
                    year: 'numeric' 
                  })}
                </time>
              </div>
              {post.summary && (
                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  {post.summary}
                </p>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="font-mono text-lg font-medium text-[var(--text-primary)]">
            <span className="text-[var(--accent)]">#</span> let&apos;s work together
          </h2>
          <p className="mt-4 text-sm text-[var(--text-secondary)]">
            I&apos;m open to backend roles, contract work, and Web3 projects.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-3 font-mono text-sm font-medium text-[#0a0a0f] transition-opacity hover:opacity-90"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
