import { ArrowRight, Boxes, Building2, Compass, Layers3, Sparkles } from "lucide-react";

const ecosystemLayers = [
  {
    icon: <Compass className="h-5 w-5" />,
    title: "Venture studio",
    description: "Explore problems, shape products, and build teams around durable opportunities.",
  },
  {
    icon: <Layers3 className="h-5 w-5" />,
    title: "Shared capabilities",
    description: "Product, design, engineering, operations, and growth support ventures as they develop.",
  },
  {
    icon: <Boxes className="h-5 w-5" />,
    title: "Independent products",
    description: "Each venture serves its own users and market, with a distinct product experience.",
  },
];

export function EcosystemOverview() {
  return (
    <section id="ecosystem" className="section-padding">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4" /> How we build
            </div>
            <h2 className="font-headline text-3xl font-bold md:text-4xl">One studio. A portfolio of independent ventures.</h2>
            <p className="max-w-xl text-muted-foreground md:text-lg">
              Neup Group brings people and capabilities together to build products for different needs. The studio provides a shared way to turn opportunities into focused ventures.
            </p>
            <a href="/about/ventures" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
              Explore the portfolio <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-3">
            {ecosystemLayers.map((layer, index) => (
              <div key={layer.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">{layer.icon}</div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-muted-foreground/70">0{index + 1}</span>
                    <h3 className="font-headline text-lg font-semibold">{layer.title}</h3>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{layer.description}</p>
                </div>
                {index < ecosystemLayers.length - 1 && <Building2 className="ml-auto hidden h-4 w-4 shrink-0 self-center rotate-90 text-muted-foreground/50 sm:block" />}
              </div>
            ))}
            <p className="px-1 text-xs leading-relaxed text-muted-foreground">
              This describes our venture studio model; the tools and integrations available vary by product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
