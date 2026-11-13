import { Card, CardContent, CardHeader, CardTitle } from "@neup/components/ui/card";
import { Bot, Cloud, Blocks, Speaker } from "lucide-react";

const capabilities = [
  {
    value: "platforms",
    title: "Digital Ecosystems & Platforms",
    description: "We connect people, businesses, and services through digital platforms designed to grow stronger as more people use them.",
    icon: <Blocks className="h-6 w-6 text-primary" />,
  },
  {
    value: "saas",
    title: "SaaS Products",
    description: "We turn recurring business challenges into focused software products that are easy to use, dependable, and built to scale.",
    icon: <Cloud className="h-6 w-6 text-primary" />,
  },
  {
    value: "ai",
    title: "AI Applications",
    description: "We use AI where it makes a practical difference: simplifying complex work, automating routine tasks, and helping teams make better decisions.",
    icon: <Bot className="h-6 w-6 text-primary" />,
  },
  {
    value: "marketing",
    title: "Marketing Infrastructure",
    description: "We build connected marketing systems that help teams understand their audiences, reach them effectively, and turn growth into a repeatable process.",
    icon: <Speaker className="h-6 w-6 text-primary" />,
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="section-padding">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Capabilities</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            From connected platforms to focused products, we build the technology and growth systems that help good ideas scale.
          </p>
        </div>
        
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap, index) => (
            <Card key={cap.value} className="group relative overflow-hidden border-border/70 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
              <CardHeader className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                    {cap.icon}
                  </div>
                  <span className="font-mono text-xs tracking-widest text-muted-foreground/60">0{index + 1}</span>
                </div>
                <CardTitle className="min-h-14 font-headline text-xl leading-snug">{cap.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{cap.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
