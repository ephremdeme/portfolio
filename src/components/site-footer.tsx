import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socials = [
  { href: "https://github.com/ephremdeme", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/ephrem-demelash", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com/ephremdeme", icon: Twitter, label: "X" },
  { href: "mailto:demelashephrem@gmail.com", icon: Mail, label: "Email" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-4xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Copyright */}
          <p className="font-mono text-sm text-[var(--text-muted)]">
            © {year} ephrem demelash
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socials.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
              >
                <item.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
