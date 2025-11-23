import Link from "next/link";
import { allBlogs } from "content-collections";
import { format } from "date-fns";

export function BlogPreview({ limit = 2 }: { limit?: number }) {
  const posts = allBlogs
    .sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1))
    .slice(0, limit);

  if (!posts.length) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">Latest Writings</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Blog</h2>
        </div>
        <Link href="/blog" className="text-sm text-emerald-300 hover:text-white">
          Read all →
        </Link>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-3xl border border-slate-800/70 bg-slate-900/40 p-6 transition hover:border-emerald-400/60"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">
              {post.tags?.join(" • ")}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{post.title}</h3>
            <p className="mt-2 text-slate-300">{post.summary}</p>
            <div className="mt-4 text-sm text-slate-400">
              {format(new Date(post.publishedAt), "MMM dd, yyyy")} · {post.readingTime}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
