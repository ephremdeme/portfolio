import Link from "next/link";

const socials = [
  { href: "mailto:contact@ephrem.dev", label: "Email" },
  { href: "https://github.com/ephremdeme", label: "GitHub" },
  { href: "https://www.linkedin.com/in/ephrem-demelash", label: "LinkedIn" },
  { href: "tel:+251912317701", label: "+251-912-317701" },
];

const quickLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_repeat(2,minmax(0,1fr))]">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div>
                <p className="text-4xl font-bold text-white">Ephrem Demelash</p>
                <p className="text-sm text-slate-400">Backend · Web3 · Systems Design</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 pr-9">
              Building performant liquidity automation, affiliate intelligence, and data-rich SaaS for ambitious teams across Addis Ababa and beyond.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Navigate</p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-emerald-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Connect</p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              {socials.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-emerald-300">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800/60 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Ephrem Demelash. Crafted with Next.js 16, Tailwind, and a love for resilient systems.</p>
          <p className="font-mono text-[0.75rem] text-emerald-300/80">Always shipping / Addis ↔ Remote</p>
        </div>
      </div>
    </footer>
  );
}
