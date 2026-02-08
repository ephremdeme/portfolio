"use client";

import Link from "next/link";
import { allBlogs } from "content-collections";
import { format } from "date-fns";

export default function BlogPage() {
  const posts = allBlogs.sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1));
  
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Header */}
      <h1 className="font-mono text-2xl font-medium text-[var(--text-primary)]">
        <span className="text-[var(--accent)]">#</span> blog
      </h1>
      <p className="mt-2 text-sm text-[var(--text-secondary)]">
        Notes on distributed systems, Web3 automation, and backend engineering.
      </p>

      {/* Posts List */}
      <div className="mt-10 space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] p-4 transition-colors hover:border-[var(--border-hover)]"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-mono text-sm font-medium text-[var(--text-primary)]">
                {post.title}
              </h2>
              <time className="shrink-0 font-mono text-xs text-[var(--text-muted)]">
                {format(new Date(post.publishedAt), "MMM yyyy")}
              </time>
            </div>
            
            {post.summary && (
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {post.summary}
              </p>
            )}

            {post.tags && post.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-[var(--accent-muted)] px-1.5 py-0.5 font-mono text-xs text-[var(--accent)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
