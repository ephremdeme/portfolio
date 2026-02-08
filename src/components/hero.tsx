import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      {/* Terminal Greeting */}
      <div className="mb-10 rounded-lg border border-[var(--code-border)] bg-[var(--code-bg)] p-6">
        <div className="space-y-4 font-mono text-sm">
          <p>
            <span className="text-[var(--accent)]">$</span>{" "}
            <span className="text-[var(--text-muted)]">whoami</span>
          </p>
          <p className="text-[var(--text-primary)]">
            ephrem demelash — backend engineer
          </p>

          <p className="pt-2">
            <span className="text-[var(--accent)]">$</span>{" "}
            <span className="text-[var(--text-muted)]">cat summary.txt</span>
          </p>
          <p className="text-[var(--text-secondary)]">
            I build distributed systems, APIs, and Web3 infrastructure.
            <br />
            6+ years shipping production with Node.js, Go, and Rust.
          </p>

          <p className="pt-2">
            <span className="text-[var(--accent)]">$</span>{" "}
            <span className="text-[var(--text-muted)]">ls skills/</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {["node.js", "typescript", "go", "rust", "graphql", "kafka", "postgresql", "redis", "aws"].map((skill) => (
              <span
                key={skill}
                className="rounded bg-[var(--accent-muted)] px-2 py-1 text-xs text-[var(--accent)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4">
        <Link
          href="https://calendly.com/demelashephrem/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-3 font-mono text-sm font-medium text-[#0a0a0f] transition-opacity hover:opacity-90"
        >
          <Calendar className="h-4 w-4" />
          Book a Call
        </Link>
        <Link
          href="/resume.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-5 py-3 font-mono text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          Resume
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
