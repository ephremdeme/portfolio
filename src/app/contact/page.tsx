"use client";

import Link from "next/link";
import { Mail, Calendar, Github, Linkedin, Twitter } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Header */}
      <h1 className="font-mono text-2xl font-medium text-[var(--text-primary)]">
        <span className="text-[var(--accent)]">#</span> contact
      </h1>
      <p className="mt-2 text-sm text-[var(--text-secondary)]">
        Open to backend roles, contract work, and Web3 projects.
      </p>

      {/* Contact Options */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {/* Book a Call */}
        <Link
          href="https://calendly.com/demelashephrem/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] p-4 transition-colors hover:border-[var(--accent)]"
        >
          <Calendar className="h-5 w-5 text-[var(--accent)]" />
          <div>
            <p className="font-mono text-sm font-medium text-[var(--text-primary)]">
              Book a Call
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              30-minute intro call
            </p>
          </div>
        </Link>

        {/* Email */}
        <Link
          href="mailto:demelashephrem@gmail.com"
          className="flex items-center gap-4 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] p-4 transition-colors hover:border-[var(--accent)]"
        >
          <Mail className="h-5 w-5 text-[var(--accent)]" />
          <div>
            <p className="font-mono text-sm font-medium text-[var(--text-primary)]">
              Email
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              demelashephrem@gmail.com
            </p>
          </div>
        </Link>
      </div>

      {/* Social Links */}
      <div className="mt-10">
        <p className="font-mono text-sm text-[var(--text-muted)]">
          <span className="text-[var(--accent)]">$</span> ls socials/
        </p>
        <div className="mt-4 flex gap-6">
          <Link
            href="https://github.com/ephremdeme"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
          >
            <Github className="h-4 w-4" />
            github
          </Link>
          <Link
            href="https://linkedin.com/in/ephrem-demelash"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
          >
            <Linkedin className="h-4 w-4" />
            linkedin
          </Link>
          <Link
            href="https://twitter.com/ephremdeme"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
          >
            <Twitter className="h-4 w-4" />
            x/twitter
          </Link>
        </div>
      </div>

      {/* Availability */}
      <div className="mt-10 rounded-lg border border-[var(--accent)] bg-[var(--accent-muted)] p-4">
        <p className="font-mono text-sm text-[var(--accent)]">
          ✓ Currently available for new opportunities
        </p>
      </div>
    </div>
  );
}
