import { SectionHeading } from "@/components/section-heading";
import { ExperienceTimeline } from "@/components/experience-timeline";

export default function ExperiencePage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-5xl px-4 py-20">
        <SectionHeading
          eyebrow="Experience"
          title="Impact-focused roles"
          description="From crypto exchanges to affiliate analytics, I’ve led teams through high-stakes launches."
        />
        <div className="mt-12">
          <ExperienceTimeline />
        </div>
      </section>
    </div>
  );
}
