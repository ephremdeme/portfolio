import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allBlogs } from "content-collections";
import { format } from "date-fns";
import { HeadingObserver } from "@/components/heading-observer";
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
    <div className="bg-slate-950 text-slate-100">
      <HeadingObserver />
      <article className="mx-auto max-w-3xl px-4 py-20">
        <p className="text-sm uppercase tracking-[0.35em] text-emerald-300/80">
          {format(new Date(post.publishedAt), "MMM dd, yyyy")} · {post.readingTime}
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white">{post.title}</h1>
        <p className="mt-4 text-lg text-slate-300">{post.summary}</p>
        <div className="mt-10">
          <MdxContent code={post.mdx} />
        </div>
      </article>
    </div>
  );
}
