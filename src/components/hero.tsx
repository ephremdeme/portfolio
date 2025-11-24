import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProfileOrbit } from "@/components/profile-orbit";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-2">
      <div className="space-y-8">
        <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">Web3 Pivot · Backend Focus</p>
        <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Backend/Full-Stack Dev Pivoting to Web3 | 6+ Yrs Building Scalable Systems
        </h1>
        <p className="text-lg text-slate-300">
          I architect resilient Node.js microservices, serverless pipelines, and automated liquidity engines for crypto exchanges and DeFi teams.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href="https://calendly.com/demelashephrem/30min" target="_blank" rel="noopener noreferrer">
              <Phone className="h-4 w-4 mr-2" /> Book a Call
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="/resume.pdf">
              Download Resume <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <dl className="grid grid-cols-2 gap-6 text-sm text-slate-300 sm:grid-cols-3">
          {[
            { stat: "10x", label: "Faster aggregation" },
            { stat: "$10M", label: "Valuation reached" },
            { stat: "99%", label: "Data accuracy" },
            { stat: "5x", label: "Engagement lift" },
            { stat: "60%", label: "Faster media" },
            { stat: "24/7", label: "Liquidity automation" },
          ].map((item) => (
            <div key={item.label}>
              <dt className="text-2xl font-semibold text-white">{item.stat}</dt>
              <dd>{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <ProfileOrbit />
    </section>
  );
}
