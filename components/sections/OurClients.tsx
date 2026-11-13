
import { Card, CardContent } from "@neup/components/ui/card";
import { Briefcase, Landmark, Mountain, Tag, TrendingUp, ArrowRight, ExternalLink } from "lucide-react";
import { LinkButton } from '@neup/components/ui/link-button';
import Image from 'next/image';
import type { ReactNode } from 'react';

type ClientProfile = {
  name: string;
  services?: string;
  website?: string;
  icon: string | ReactNode;
  slug?: string;
};

export const clientProfiles: ClientProfile[] = [
  {
    name: "Happy Mountain Nepal",
    services: "Neup.Marketing, Neup.Site",
    icon: "https://neupgroup.com/content/p3happymountainnepal/logo.png",
    slug: "happy-mountain-nepal-seo-migration",
  },
  {
    name: "Lalpurja Nepal",
    services: "Neup.Marketing",
    icon: <Landmark className="h-10 w-10 text-primary" />,
  },
  {
    name: "Yes Tourism Nepal",
    services: "Neup.Site",
    icon: "https://neupgroup.com/content/p3yestourismnepal/logo.full.svg",
    slug: "yes-tourism-nepal-dynamic-news-site",
  },
  {
    name: "Bhattarai Deals",
    services: "Neup.Marketing & Neup.Site",
    icon: <Tag className="h-10 w-10 text-primary" />,
    slug: "bhattarai-deals-iphone-market-research",
  },
  {
    name: "A2 Consultancy, India",
    services: "Neup.Marketing",
    icon: <Briefcase className="h-10 w-10 text-primary" />,
  },
  {
    name: "Finance 360",
    services: "Neup.Marketing",
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
  },
  {
    name: "Namsari",
    website: "https://namsari.com",
    icon: <Mountain className="h-10 w-10 text-primary" />,
  },
  {
    name: "Nepal NOIR",
    website: "https://boudhastupapolyclinic.com",
    icon: <Landmark className="h-10 w-10 text-primary" />,
  },
];

export function OurClients() {
  return (
    <section id="clients" className="section-padding">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Clients</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            We are proud to partner with ambitious brands and help them grow.
          </p>
        </div>
        <div className="client-marquee relative overflow-hidden" aria-label="Client portfolio">
          <div className="client-marquee-track flex w-max">
            {[false, true].map((isDuplicate) => (
              <div key={isDuplicate ? "duplicate" : "clients"} className="flex shrink-0 gap-4 pr-4" aria-hidden={isDuplicate} inert={isDuplicate}>
                {clientProfiles.map((client) => (
                  <Card key={client.name} className="flex min-h-40 w-[min(78vw,18rem)] shrink-0 flex-col transition-shadow hover:shadow-lg sm:w-72">
                    <CardContent className="flex flex-1 flex-col p-5">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10 p-3">
                          {typeof client.icon === 'string' ? (
                            <Image src={client.icon} alt={`${client.name} logo`} width={40} height={40} className="object-contain" />
                          ) : (
                            client.icon
                          )}
                        </div>
                        <div>
                          <p className="text-lg font-bold">{client.name}</p>
                          {client.services && <p className="mt-1 text-xs text-muted-foreground">{client.services}</p>}
                        </div>
                      </div>
                      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-3">
                        {client.website && (
                          <a href={client.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                            Website <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                        {client.slug && (
                          <LinkButton variant="link" className="h-auto p-0 text-sm" href={`/case/${client.slug}`}>
                            Case study <ArrowRight className="ml-1 h-4 w-4" />
                          </LinkButton>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

undefined
