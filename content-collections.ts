import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { z } from "zod";

const prettyCodeOptions = {
  keepBackground: false,
  defaultLang: "ts",
  theme: {
    dark: "github-dark-default",
    light: "github-light-default",
  },
};

const blog = defineCollection({
  name: "blog",
  directory: "src/content/blog",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap", properties: { className: ["heading-link"] } }],
        [rehypePrettyCode, prettyCodeOptions],
      ],
    });
    const words = document.content.split(/\s+/).length;
    const readingTime = `${Math.max(1, Math.round(words / 200))} min read`;
    const slug = document._meta.path.replace(/^blog\//, "");

    return {
      ...document,
      slug,
      readingTime,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [blog],
});
