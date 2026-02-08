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
      <div className="group relative mt-6 mb-6">
        <pre
          {...props}
          className={cn(
            "overflow-x-auto rounded-lg border border-[var(--code-border)] bg-[var(--code-bg)] p-4 font-mono text-sm leading-relaxed",
            "scrollbar-thin scrollbar-thumb-[var(--border)] scrollbar-track-transparent",
            props.className
          )}
        />
        {codeToCopy && (
          <CodeCopyButton
            value={codeToCopy}
            className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
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
            : "rounded-md bg-[var(--code-bg)] px-1.5 py-0.5 font-mono text-[0.875em] text-[var(--accent)]",
          props.className
        )}
      />
    );
  },
};

export function MdxContent({ code }: { code: string }) {
  return (
    <div className="prose max-w-none">
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
