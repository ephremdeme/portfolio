"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-sm font-semibold tracking-[0.4em] text-emerald-300">
          EPHREM
        </Link>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={cn("transition hover:text-white")}>{item.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="mailto:demelashephrem@gmail.com"
            className="hidden rounded-full border border-emerald-500/80 px-4 py-2 text-xs font-medium uppercase tracking-widest text-emerald-300 transition hover:bg-emerald-500/10 lg:inline"
          >
            Hire Me
          </Link>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="inline-flex items-center justify-center rounded-full border border-slate-700/70 p-2 text-slate-100 transition hover:border-emerald-400 hover:text-white md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="mx-auto max-w-6xl border-t border-slate-800/60 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm text-slate-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg border border-transparent px-3 py-2 transition hover:border-emerald-500/60 hover:bg-slate-900/60"
                onClick={handleCloseMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="mailto:demelashephrem@gmail.com"
              className="rounded-lg border border-emerald-500/60 px-3 py-2 text-center text-xs font-semibold uppercase tracking-wider text-emerald-300 transition hover:bg-emerald-500/10"
              onClick={handleCloseMenu}
            >
              Hire Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
