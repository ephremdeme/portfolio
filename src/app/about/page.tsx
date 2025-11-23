import { SectionHeading } from "@/components/section-heading";
import { SkillsGrid } from "@/components/skills-grid";
import { TestimonialHighlight } from "@/components/testimonial";

export default function AboutPage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-5xl px-4 py-20">
        <SectionHeading
          eyebrow="About"
          title="Full Stack problem-solver pivoting to Web3"
          description="Competitive programming discipline meets product pragmatism. I build resilient backends and polished UX for data-heavy tools."
        />
        <div className="mt-8 space-y-6 text-lg text-slate-300">
          <p>
            I’m Ephrem Demelash, a full stack engineer with 6+ years across backend, frontend, and DevOps roles. From automating Uniswap V3 liquidity pools to
            speeding up affiliate intelligence by 10x, I thrive on measurable impact. ACM-ICPC and years of competitive programming sharpened my problem-solving
            instincts.
          </p>
          <p>
            Education: BSc Computer Science, Adama Science and Technology University (2015–2019). I’m obsessed with learning new protocols, experimenting with
            serverless patterns, and pairing up with design to ship beautiful admin tooling.
          </p>
        </div>
        <div className="mt-12 space-y-10">
          <SkillsGrid />
          <TestimonialHighlight />
        </div>
      </section>
    </div>
  );
}
