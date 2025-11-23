import Link from "next/link";
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
        </div>
      </div>
    </header>
  );
}
