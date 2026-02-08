import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allBlogs } from "content-collections";
import { format } from "date-fns";
import { MdxContent } from "@/components/mdx-content";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allBlogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = allBlogs.find((entry) => entry.slug === slug);
  if (!post) return { title: "Blog" };
  return {
    title: `${post.title} | Ephrem Demelash`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = allBlogs.find((entry) => entry.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      {/* Meta */}
      <div className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
        <span style={{ color: 'var(--accent)' }}>$</span> cat blog/{post.slug}.md
      </div>
      
      {/* Title */}
      <h1 
        className="mt-6 font-mono text-2xl font-medium leading-tight"
        style={{ color: 'var(--text-primary)' }}
      >
        {post.title}
      </h1>
      
      {/* Date & Reading Time */}
      <div className="mt-2 font-mono text-sm" style={{ color: 'var(--text-muted)' }}>
        {format(new Date(post.publishedAt), "MMMM dd, yyyy")} · {post.readingTime}
      </div>

      {/* Summary */}
      {post.summary && (
        <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {post.summary}
        </p>
      )}

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs"
              style={{
                background: 'var(--accent-muted)',
                color: 'var(--accent)',
                padding: '0.125rem 0.375rem',
                borderRadius: '0.25rem'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Divider */}
      <hr 
        className="my-8" 
        style={{ borderColor: 'var(--border)' }} 
      />

      {/* Content */}
      <div className="prose">
        <MdxContent code={post.mdx} />
      </div>
    </article>
  );
}
