import { skills } from "@/data/skills";
import { testimonials } from "@/data/testimonials";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Header */}
      <h1 className="font-mono text-2xl font-medium text-[var(--text-primary)]">
        <span className="text-[var(--accent)]">#</span> about
      </h1>

      {/* Bio */}
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-[var(--text-secondary)]">
        <p>
          I'm Ephrem Demelash, a backend engineer with 6+ years of experience building 
          distributed systems, APIs, and Web3 infrastructure. My work spans crypto exchanges, 
          affiliate intelligence platforms, and high-scale SaaS products.
        </p>
        <p>
          I started my career in competitive programming (ACM-ICPC) which taught me to 
          think systematically about data structures and algorithms. That foundation 
          carries into everything I build—systems that are performant, maintainable, 
          and designed for scale.
        </p>
        <p>
          Currently, I'm focused on backend roles, contract work, and Web3 projects. 
          I'm particularly interested in distributed systems, serverless architectures, 
          and DeFi infrastructure.
        </p>
      </div>

      {/* Education - Single line */}
      <div className="mt-10">
        <p className="font-mono text-sm text-[var(--text-muted)]">
          <span className="text-[var(--accent)]">education:</span>{" "}
          BSc Computer Science, Adama Science & Technology University (2015–2019)
        </p>
      </div>

      {/* Skills */}
      <div className="mt-10">
        <h2 className="font-mono text-lg font-medium text-[var(--text-primary)]">
          <span className="text-[var(--accent)]">#</span> skills
        </h2>
        <div className="mt-6 space-y-4">
          {skills.map((category) => (
            <div key={category.title}>
              <p className="font-mono text-sm">
                <span className="text-[var(--accent)]">{category.title.toLowerCase()}:</span>{" "}
                <span className="text-[var(--text-secondary)]">
                  {category.items.map(item => item.toLowerCase()).join(", ")}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      {testimonials.length > 0 && (
        <div className="mt-12">
          <h2 className="font-mono text-lg font-medium text-[var(--text-primary)]">
            <span className="text-[var(--accent)]">#</span> testimonial
          </h2>
          <div className="mt-6 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] p-6">
            <blockquote className="text-sm italic text-[var(--text-secondary)]">
              "{testimonials[0].quote}"
            </blockquote>
            <p className="mt-4 font-mono text-sm text-[var(--text-muted)]">
              — {testimonials[0].author}, {testimonials[0].role}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
