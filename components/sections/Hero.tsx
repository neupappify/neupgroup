import { LinkButton } from '@neup/components/ui/link-button';
import Link from "next/link";
import { MoveRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const heroImage = {
  src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  alt: "Team collaborating around a table with laptops",
};

export function Hero() {
  return (
    <section className="hero-section-padding relative w-full overflow-hidden">
      <div className="container relative">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col items-start space-y-6 text-left">
            <div className="space-y-4 max-w-3xl">
              <h1 className="font-headline text-4xl font-semibold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-6xl/none">
                We build meaningful digital ventures.
              </h1>
              <p className="text-base font-normal leading-relaxed tracking-normal text-muted-foreground md:text-xl md:leading-8">
                Neup Group is a technology venture studio building, operating, and scaling digital products that solve real-world problems. From shared technology capabilities to independent consumer and business platforms, we turn ideas into ventures designed for long-term value.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <LinkButton variant="solid" size="lg" href="/about/ventures">
                  Explore Ventures
                  <MoveRight className="ml-2 h-5 w-5" />
                </LinkButton>
                <LinkButton variant="outline" size="lg" href="#contact">
                  Partner With Us
                </LinkButton>
            </div>
            <Link href="/case" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              See our work <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative mx-auto w-full max-w-2xl">
            <div className="overflow-hidden rounded-[2rem]">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={1200}
                height={900}
                className="aspect-[4/3] h-full w-full rounded-[2rem] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

undefined
undefined
undefined
