import Image from "next/image";

import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function About() {
  return (
    <section id="about" className="w-full overflow-hidden bg-primary text-primary-foreground">
      <div className="grid min-h-0 grid-cols-1 lg:h-[70vh] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-20 md:px-12">
          <ScrollReveal className="max-w-md" variant="slide-left">
            <span className="mb-6 block text-[0.8rem] font-semibold tracking-[0.2em] text-secondary">
              ABOUT THUNDERBIRD
            </span>
            <h2 className="font-heading mb-8 text-4xl leading-[1.1] tracking-[-0.02em] text-balance md:text-5xl">
              Personal by Nature,
              <br />
              Refined in Every Detail.
            </h2>
            <p className="text-pretty text-sm font-light leading-relaxed text-primary-foreground/80 md:text-base">
              Thunderbird offers a more personal approach to property oversight
              and guest experience - grounded in trust, attentiveness, and
              hospitality-led care.
            </p>
          </ScrollReveal>
        </div>
        <div className="flex h-[50vh] min-h-0 w-full items-center justify-center overflow-hidden px-6 pb-2 pt-2 lg:h-full lg:pb-0 lg:pt-0 lg:pl-4">
          {/* Image stays in a stable box; reveal animates an inner layer (clip-up breaks fill images) */}
          <div className="relative h-[80%] w-full min-h-0 overflow-hidden">
            <ScrollReveal variant="fade-in" className="absolute inset-0">
              <Image
                src="/house-photo.png"
                alt="Luxury home at sunset with pool"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
