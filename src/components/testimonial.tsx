import { testimonials } from "@/data/testimonials";

export function TestimonialHighlight() {
  const primary = testimonials[0];
  if (!primary) return null;
  return (
    <blockquote className="rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 to-slate-900/40 p-8 text-lg text-emerald-50">
      “{primary.quote}”
      <footer className="mt-6 text-sm uppercase tracking-widest text-emerald-200">
        {primary.author} · {primary.role}
      </footer>
    </blockquote>
  );
}
