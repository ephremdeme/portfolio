import { cn, slugify } from "@/lib/utils";
import { Link as LinkIcon } from "lucide-react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  const anchorId = slugify(title);

  return (
    <div className={cn("space-y-3", className)}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">
          {eyebrow}
        </p>
      )}
      <h2 id={anchorId} className="scroll-mt-10 text-3xl font-semibold text-white sm:text-4xl">
        <a
          href={`#${anchorId}`}
          className="group/anchor inline-flex items-center gap-2 text-inherit no-underline"
        >
          <span>{title}</span>
          <LinkIcon
            className="h-4 w-4 text-emerald-300/80 opacity-0 transition group-hover/anchor:opacity-100 group-focus-visible/anchor:opacity-100"
            strokeWidth={1.5}
          />
        </a>
      </h2>
      {description && <p className="text-base text-slate-300">{description}</p>}
    </div>
  );
}
