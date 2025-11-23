import Link from "next/link";

const socials = [
  { href: "mailto:demelashephrem@gmail.com", label: "Email" },
  { href: "https://github.com/ephremdeme", label: "GitHub" },
  { href: "https://www.linkedin.com/in/ephrem-demelash", label: "LinkedIn" },
  { href: "tel:+251912317701", label: "+251-912-317701" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p className="max-w-lg">
          Open to remote mid-senior backend & Web3 roles · Based in Addis Ababa · Let’s build DeFi infrastructure together.
        </p>
        <div className="flex flex-wrap gap-4">
          {socials.map((item) => (
            <Link key={item.href} href={item.href} className="text-emerald-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
