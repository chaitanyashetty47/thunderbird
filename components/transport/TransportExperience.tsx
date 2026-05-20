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
        <div className="flex flex-col justify-center px-6 py-20 md:px-12 lg:py-24">
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
            <p className="mb-10 max-w-lg text-pretty text-sm font-light leading-relaxed text-primary-foreground/80 md:mb-12 md:text-base">
              Featuring spacious captain seating, a flexible interior layout, and a dedicated
              chauffeur, every journey is coordinated with the calm, attentive service Thunderbird
              is known for.
            </p>

            <div className="w-full overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch] scrollbar-none">
              <ul className="flex w-full flex-nowrap items-center justify-between gap-x-[clamp(0.375rem,2vw,2rem)]">
                {experienceFeatures.map((title) => (
                  <li
                    key={title}
                    className="flex shrink-0 items-center gap-[clamp(0.25rem,1vw,0.5rem)]"
                  >
                    <CheckCircle
                      strokeWidth={1.75}
                      className="size-[clamp(0.875rem,2.5vw,1.125rem)] shrink-0 text-secondary"
                      aria-hidden
                    />
                    <span className="whitespace-nowrap text-[clamp(0.625rem,2.35vw,0.875rem)] font-semibold tracking-wide text-primary-foreground">
                      {title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <div className="flex h-[50vh] min-h-0 w-full items-center overflow-hidden px-6 py-6 lg:h-auto lg:min-h-[85vh] lg:px-12 lg:py-12">
          <div className="relative h-full w-full min-h-[40vh] overflow-hidden lg:min-h-0">
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
