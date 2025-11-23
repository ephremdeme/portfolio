import { MDXContent } from "@content-collections/mdx/react";
import { cn } from "@/lib/utils";

export function MdxContent({ code }: { code: string }) {
  return (
    <div className={cn("prose prose-invert prose-headings:text-white prose-a:text-emerald-300 max-w-none")}>
      <MDXContent code={code} />
    </div>
  );
}
