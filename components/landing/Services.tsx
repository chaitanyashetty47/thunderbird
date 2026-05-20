import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ScrollReveal, ScrollRevealGroup } from "@/components/motion/scroll-reveal";

const services = [
  {
    number: "01",
    title: "Property & Home Oversight",
    description:
      "Your property, looked after as if it were our own. From routine checks to urgent responses, always handled.",
    image: "/home43.png",
    alt: "Luxury home overlooking Cape Town at twilight",
    href: "#accommodation",
  },
  {
    number: "02",
    title: "Hospitality & Guest Coordination",
    description:
      "Five-star arrival experiences for your guests, without the five-star overhead. Personal, attentive, seamless.",
    image: "/guest.png",
    alt: "Guest greeted at a luxury property entrance",
    href: "#transfers",
  },
  {
    number: "03",
    title: "Luxury Transport Services",
    description:
      "Discreet, punctual, private. Airport transfers and curated Cape Town journeys in a luxury seven-seater.",
    image: "/carnival43.png",
    alt: "Luxury vehicle at a Cape Town coastal residence",
    href: "/transport",
  },
] as const;

function ServiceCard({
  number,
  title,
  description,
  image,
  alt,
  href,
}: (typeof services)[number]) {
  return (
    <article className="reveal-stagger group relative mx-auto flex aspect-[3/4] w-[80%] flex-col overflow-hidden rounded-sm">
      <Image src={image} alt={alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
      <div
        className="absolute inset-0 bg-linear-to-t from-primary via-primary/50 to-transparent"
        aria-hidden
      />
      <div className="relative z-10 flex h-full flex-col p-5 md:p-6">
        <span className="text-xs font-medium tracking-widest text-secondary">{number}</span>
        <div className="mt-auto">
          <h3 className="font-heading mb-2.5 text-xl leading-tight text-primary-foreground md:text-[1.32rem]">
            {title}
          </h3>
          <p className="mb-5 text-pretty text-sm font-light leading-relaxed text-primary-foreground/85">
            {description}
          </p>
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.2em] text-secondary uppercase transition-colors hover:text-secondary/80"
          >
            Learn More
            <ArrowRight size={12} className="text-secondary/80" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section id="services" className="w-full bg-background py-5 text-foreground lg:py-7">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <ScrollReveal className="mb-12 grid grid-cols-1 gap-8 lg:mb-16 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <div className="mb-6 flex-col items-center gap-4">
              <span className="text-[0.8rem] font-semibold tracking-[0.2em] text-ochre uppercase">
                What We Take Care Of
              </span>
              <div className="h-px w-40 shrink-0 bg-secondary/60" aria-hidden />
            </div>
            <h2 className="font-heading text-3xl leading-[1.1] tracking-[-0.02em] text-balance md:text-4xl lg:text-[2.75rem]">
              Everything Your Cape Town
              <br />
              Experience Needs.
            </h2>
          </div>
          <p className="max-w-sm text-md font-medium leading-relaxed text-foreground/75 lg:col-span-5 lg:pb-1 lg:text-start">
            Built for owners who aren&apos;t always there and guests who expect the best.
          </p>
        </ScrollReveal>

        <ScrollRevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5 lg:gap-6">
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
