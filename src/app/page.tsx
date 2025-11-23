import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { ProjectHighlights } from "@/components/project-highlights";
import { ExperienceStrip } from "@/components/experience-strip";
import { BlogPreview } from "@/components/blog-preview";
import { ContactCta } from "@/components/contact-cta";

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <Hero />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading
          eyebrow="Web3 Case Studies"
          title="Impact you can measure"
          description="High-performance systems for exchanges, affiliate intelligence, and trusted marketplaces."
        />
        <div className="mt-10 space-y-8">
          <ProjectHighlights limit={2} />
        </div>
      </section>
      <ExperienceStrip />
      <BlogPreview limit={2} />
      <ContactCta />
    </div>
  );
}
