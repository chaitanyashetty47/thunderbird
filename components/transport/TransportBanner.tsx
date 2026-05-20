import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Button } from "@/components/ui/button";

export function TransportBanner() {
  return (
    <section className="relative isolate min-h-[70vh] w-full overflow-hidden text-primary-foreground">
      <div className="absolute inset-0">
        <Image
          src="/car-driving-capetown.png"
          alt="Luxury vehicle on a Cape Town road at night"
          fill
          sizes="100vw"
          className="object-cover object-[center_60%]"
        />
        <div
          className="absolute inset-0 bg-linear-to-r from-black/80 via-black/55 via-40% to-black/30"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-black/35 via-transparent to-black/55"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[70vh] w-full max-w-7xl items-center justify-center px-6 py-20 text-center lg:px-12">
        <ScrollReveal
          variant="fade-up"
          className="flex w-full max-w-2xl min-w-0 flex-col items-center gap-6 md:gap-8 lg:gap-10"
        >
          <h2 className="font-heading text-3xl leading-[1.1] tracking-[-0.02em] text-white md:text-4xl lg:text-5xl">
            Experience Cape Town
            <br />
            in Complete Comfort.
          </h2>
          <p className="max-w-lg text-pretty text-sm font-light leading-relaxed text-white/85 md:text-base">
            From airport arrivals and coastal drives to executive travel and private tours —
            every journey is personally coordinated with hospitality-led care.
          </p>
          <Button
            variant="secondary"
            size="cta"
            nativeButton={false}
            render={<Link href="#contact" />}
            className="w-full max-w-xs hover:bg-primary/90 sm:w-auto"
          >
            Arrange Transport
            <ArrowRight size={14} className="text-secondary/60" aria-hidden />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
