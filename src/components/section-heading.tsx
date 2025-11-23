import { cn } from "@/lib/utils";

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
  return (
    <div className={cn("space-y-3", className)}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description && <p className="text-base text-slate-300">{description}</p>}
    </div>
  );
}
