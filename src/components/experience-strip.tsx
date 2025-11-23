import { experiences } from "@/data/experience";

export function ExperienceStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="rounded-3xl border border-slate-800/70 bg-slate-900/40 p-6">
        <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">Recent Roles</p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {experiences.slice(0, 3).map((exp) => (
            <div key={exp.company} className="rounded-2xl border border-slate-800/60 bg-slate-950/30 p-4">
              <p className="text-sm uppercase tracking-widest text-slate-400">{exp.timeframe}</p>
              <h4 className="mt-2 text-lg font-semibold text-white">{exp.role}</h4>
              <p className="text-sm text-slate-400">{exp.company}</p>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-slate-400">
                {exp.achievements.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
