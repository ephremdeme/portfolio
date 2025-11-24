import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

export function ContactCta() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-10 rounded-3xl border border-slate-800/80 bg-slate-950/40 p-10 lg:grid-cols-2">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">Contact</p>
          <h2 className="text-3xl font-semibold text-white">Ready to ship high-throughput systems?</h2>
          <p className="text-slate-300">
            Drop a note about the problem you are solving —backend modernization, crypto apps or telegram bots. I reply within 24 hours.
          </p>
          <div className="space-y-1 text-sm text-slate-400">
            <p>Email: <Link href="mailto:demelashephrem@gmail.com" className="text-emerald-300">demelashephrem@gmail.com</Link></p>
            <p>Phone: <Link href="tel:+251912317701" className="text-emerald-300">+251-912-317701</Link></p>
            <p>GitHub: <Link href="https://github.com/ephremdeme" className="text-emerald-300">github.com/ephremdeme</Link></p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
