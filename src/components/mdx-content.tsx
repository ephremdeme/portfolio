import { MDXContent } from "@content-collections/mdx/react";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type CodeProps = ComponentPropsWithoutRef<"code"> & {
  "data-language"?: string;
};

const components = {
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      {...props}
      className={cn(
        "mt-8 overflow-x-auto rounded-2xl border border-slate-800/60 bg-slate-950/60 px-5 py-4 my-2 text-sm leading-relaxed text-slate-100 shadow-[0_12px_32px_rgba(2,6,23,0.35)] ring-1 ring-white/5",
        "before:hidden after:hidden",
        props.className
      )}
    />
  ),
  code: (props: CodeProps) => {
    const isBlock = Boolean(
      props.className?.includes("language-") || props["data-language"]
    );

    return (
      <code
        {...props}
        className={cn(
          isBlock
            ? "rounded-none bg-transparent px-0 py-0 text-inherit"
            : "rounded-md bg-slate-900/60 px-1.5 py-0.5 font-mono text-[0.85em] text-emerald-200",
          props.className
        )}
      />
    );
  },
};

export function MdxContent({ code }: { code: string }) {
  return (
    <div
      className={cn(
        "prose prose-invert prose-headings:text-white prose-a:text-emerald-300 max-w-none",
        "prose-pre:bg-transparent prose-code:text-emerald-200",
        "prose-p:leading-relaxed"
      )}
    >
      <MDXContent code={code} components={components} />
    </div>
  );
}
