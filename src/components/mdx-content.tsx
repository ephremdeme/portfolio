import { MDXContent } from "@content-collections/mdx/react";
import { isValidElement, type ComponentPropsWithoutRef, type ReactElement, type ReactNode } from "react";
import { CodeCopyButton } from "@/components/code-copy-button";
import { cn } from "@/lib/utils";

type CodeProps = ComponentPropsWithoutRef<"code"> & {
  "data-language"?: string;
};

const components = {
  pre: (props: ComponentPropsWithoutRef<"pre">) => {
    const plainText = extractPlainText(props.children);
    const codeToCopy = plainText.trim();

    return (
      <div className="group relative mt-8">
        <pre
          {...props}
          className={cn(
            "overflow-x-auto rounded-2xl border border-slate-800/60 bg-slate-950/60 px-5 py-4 my-2 text-sm leading-relaxed text-slate-100 shadow-[0_12px_32px_rgba(2,6,23,0.35)] ring-1 ring-white/5",
            "before:hidden after:hidden",
            props.className
          )}
        />
        {codeToCopy && (
          <CodeCopyButton
            value={codeToCopy}
            className="absolute right-4 top-4 opacity-0 transition group-hover:opacity-100 group-focus-within:opacity-100"
          />
        )}
      </div>
    );
  },
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

function extractPlainText(node: ReactNode): string {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractPlainText).join("");
  if (isValidElement(node)) {
    const element = node as ReactElement<{ children?: ReactNode }>;
    return extractPlainText(element.props.children ?? "");
  }
  return "";
}
