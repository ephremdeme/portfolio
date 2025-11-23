import { skills } from "@/data/skills";

export function SkillsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {skills.map((group) => (
        <div key={group.title} className="rounded-3xl border border-slate-800/70 bg-slate-900/30 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">{group.title}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-200">
            {group.items.map((item) => (
              <span key={item} className="rounded-full border border-slate-800/80 px-3 py-1">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
