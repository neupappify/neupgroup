import { ArrowUpRight, BriefcaseBusiness, Layers3, UsersRound } from "lucide-react";
import Link from "next/link";
import { ventures } from "@/components/sections/VenturePortfolio.config";
import { caseStudies } from "@/app/case/case-studies";
import { clientProfiles } from "@/components/sections/OurClients";

const proofPoints = [
  {
    value: `${ventures.length}`,
    label: "ventures in our portfolio",
    icon: <Layers3 className="h-5 w-5" />,
    href: "/about/ventures",
  },
  {
    value: `${caseStudies.length}`,
    label: "published case studies",
    icon: <BriefcaseBusiness className="h-5 w-5" />,
    href: "/case",
  },
  {
    value: `${clientProfiles.length}`,
    label: "client profiles featured",
    icon: <UsersRound className="h-5 w-5" />,
    href: "#clients",
  },
];

// Show only counts that visitors can verify elsewhere on the site.
export function OurProgress() {
  return (
    <section aria-label="Neup Group at a glance" className="border-y border-border/70 bg-card/50 py-8 md:py-10">
      <div className="container grid gap-4 sm:grid-cols-3">
        {proofPoints.map((point) => (
          <Link key={point.label} href={point.href} className="group flex items-center gap-4 rounded-xl px-4 py-3 transition-colors hover:bg-primary/5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">{point.icon}</span>
            <span className="min-w-0 flex-1">
              <span className="block font-headline text-2xl font-bold">{point.value}</span>
              <span className="text-sm text-muted-foreground">{point.label}</span>
            </span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>
    </section>
  );
}
