import { CheckCircle } from "lucide-react";
import Image from "next/image";

import { ScrollReveal } from "@/components/motion/scroll-reveal";

const experienceFeatures = [
  "Captain Seating",
  "Flexible Cabin Layout",
  "Dedicated Chauffeur",
] as const;

export function TransportExperience() {
  return (
    <section id="experience" className="w-full bg-primary text-primary-foreground">
      <div className="grid min-h-0 grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 pt-12 pb-6 md:px-12 md:pt-16 md:pb-8 lg:py-24">
          <ScrollReveal variant="slide-left" className="max-w-2xl lg:max-w-none">
            <span className="mb-6 block text-[0.8rem] font-semibold tracking-[0.2em] text-secondary uppercase">
              The Experience
            </span>
            <h2 className="font-heading mb-6 text-4xl leading-[1.1] tracking-[-0.02em] md:text-5xl">
              Designed Around
              <br />
              <span className="text-secondary">Comfort</span> and{" "}
              <span className="text-secondary">Conversation.</span>
            </h2>
            <p className="mb-6 max-w-lg text-pretty text-sm font-light leading-relaxed text-primary-foreground/80 md:mb-8 md:text-base lg:hidden">
              Every journey is coordinated with the calm, attentive service we are known for.
            </p>
            <p className="mb-6 hidden max-w-lg text-pretty text-sm font-light leading-relaxed text-primary-foreground/80 md:mb-8 md:text-base lg:mb-12 lg:block">
              Featuring spacious captain seating, a flexible interior layout, and a dedicated
              chauffeur, every journey is coordinated with the calm, attentive service we are known
              for.
            </p>

            <ul className="flex flex-col gap-3 md:gap-3.5 lg:flex-row lg:flex-nowrap lg:items-center lg:justify-between lg:gap-x-8">
              {experienceFeatures.map((title) => (
                <li key={title} className="flex items-center gap-2 lg:shrink-0">
                  <CheckCircle
                    strokeWidth={1.75}
                    className="size-4.5 shrink-0 text-secondary"
                    aria-hidden
                  />
                  <span className="text-sm font-semibold tracking-wide text-primary-foreground lg:whitespace-nowrap">
                    {title}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        <div className="flex w-full items-center overflow-hidden px-6 pb-10 pt-0 md:px-12 md:pb-12 lg:h-auto lg:min-h-[85vh] lg:px-12 lg:py-12 lg:pt-12">
          <div className="relative aspect-4/3 w-full overflow-hidden md:aspect-3/2 lg:aspect-auto lg:h-full lg:min-h-[480px]">
            <ScrollReveal variant="fade-in" className="absolute inset-0">
              <Image
                src="/john-mccosh-carnival/Kiaswivel.jpeg"
                alt="Captain seats and flexible interior layout in the Kia Carnival"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
