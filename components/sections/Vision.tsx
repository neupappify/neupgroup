import { Card, CardHeader, CardTitle, CardContent } from "@neup/components/ui/card";
import { Target, Layers, Hourglass, Users, Globe } from 'lucide-react';

const principles = [
  {
    icon: <Hourglass className="h-5 w-5 text-primary md:h-6 md:w-6" />,
    title: "Long-Term Value",
    description: "We build for the next decade, not just the next quarter. We believe in patience and compounding returns."
  },
  {
    icon: <Target className="h-5 w-5 text-primary md:h-6 md:w-6" />,
    title: "Product-First Focus",
    description: "Our obsession is crafting exceptional products that people love to use and that solve real problems."
  },
  {
    icon: <Layers className="h-5 w-5 text-primary md:h-6 md:w-6" />,
    title: "Systems Thinking",
    description: "We connect the dots, building ecosystems and platforms, not just isolated features or single-use apps."
  },
  {
    icon: <Users className="h-5 w-5 text-primary md:h-6 md:w-6" />,
    title: "Talent as Capital",
    description: "We invest in young, ambitious talent, providing them a platform to build, learn, and grow at an accelerated pace."
  },
  {
    icon: <Globe className="h-5 w-5 text-primary md:h-6 md:w-6" />,
    title: "Nepal-First, Global-Ready",
    description: "We start by solving problems for Nepal, with a vision to build products ready for the global stage."
  },
];


export function Vision() {
  return (
    <section id="vision" className="py-10 md:py-20 lg:py-32">
      <div className="container">
        <div className="mb-8 space-y-3 text-center md:mb-12 md:space-y-4">
          <h2 className="font-headline text-2xl font-bold sm:text-3xl md:text-4xl">Our Vision & Philosophy</h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
            These are the guiding principles that inform every decision we make.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-6">
          {principles.map((item, index) => (
            <Card key={item.title} className={`flex flex-col bg-card text-center ${index === 4 ? 'lg:col-start-2' : ''}`}>
              <CardHeader className="items-center p-4 md:p-6">
                 <div className="mb-2 rounded-full bg-primary/10 p-3 md:mb-4 md:p-4">
                  {item.icon}
                </div>
                <CardTitle className="font-headline text-lg md:text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 pt-0 md:px-6 md:pb-6">
                <p className="text-sm text-muted-foreground md:text-base">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
