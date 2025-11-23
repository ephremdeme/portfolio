import { experiences } from "@/data/experience";
import Link from "next/link";

export function ExperienceTimeline({ limit }: { limit?: number }) {
  const items = limit ? experiences.slice(0, limit) : experiences;
  return (
    <div className="space-y-8">
      {items.map((exp) => (
        <article key={`${exp.company}-${exp.timeframe}`} className="rounded-3xl border border-slate-800/70 bg-slate-900/40 p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/90">{exp.timeframe}</p>
              <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
              <p className="text-sm uppercase tracking-widest text-slate-400">{exp.company} · {exp.location}</p>
            </div>
            {exp.link && (
              <Link href={exp.link} className="text-sm text-emerald-300 hover:text-white">
                Visit →
              </Link>
            )}
          </div>
          <p className="mt-4 text-slate-300">{exp.summary}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-400">
            {exp.achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
            {exp.tech.map((tech) => (
              <span key={tech} className="rounded-full border border-slate-800/80 px-3 py-1">
                {tech}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
