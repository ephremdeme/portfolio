import Link from "next/link";
import { allBlogs } from "content-collections";
import { format } from "date-fns";
import { SectionHeading } from "@/components/section-heading";

export default function BlogPage() {
  const posts = allBlogs.sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1));
  return (
    <div className="bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-4xl px-4 py-20">
        <SectionHeading
          eyebrow="Blog"
          title="Build logs + playbooks"
          description="Web3 automation, serverless microservices, and backend performance notes."
        />
        <div className="mt-10 space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-3xl border border-slate-800/70 bg-slate-900/40 p-6 transition hover:border-emerald-400/60"
            >
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <span>{format(new Date(post.publishedAt), "MMM dd, yyyy")}</span>
                <span>·</span>
                <span>{post.readingTime}</span>
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-white">{post.title}</h3>
              <p className="mt-2 text-slate-300">{post.summary}</p>
              {post.tags && (
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-emerald-200">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-emerald-500/40 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
