import { Card, CardContent, CardHeader, CardTitle } from "@neup/components/ui/card";
import { Building, Scale, BookOpen } from "lucide-react";

export function CompanyOverview() {
  const details = [
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Legal Name",
      value: "Neup Group Private Limited",
    },
    {
      icon: <Scale className="h-8 w-8 text-primary" />,
      title: "Company Type",
      value: "Venture Studio",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Focus",
      value: "Digital Products & Platforms",
    },
  ];

  return (
    <section id="overview" className="section-padding">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-semibold">Our Story</p>
              <h2 className="font-headline text-3xl md:text-4xl font-bold">
                A Vision for Nepal's Digital Future
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We build and operate digital products for people and businesses, starting from problems we understand in Nepal and designing for a wider world. Each venture has its own purpose, audience, and path to market.
              </p>
              <p>
                Our venture studio brings product strategy, design, engineering, and growth together to take ideas from early exploration through development and operation. We focus on durable products that earn trust and create lasting value.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {details.map((item, index) => (
              <Card key={index} className="bg-card">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                  {item.icon}
                  <CardTitle className="font-headline text-lg font-semibold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
