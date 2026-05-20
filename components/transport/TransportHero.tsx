import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function TransportHero() {
  return (
    <section className="relative flex h-[100svh] w-full items-center pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/carnival-silver-road.png"
          alt="Chauffeur beside a silver Kia Carnival on a Cape Town mountain road at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="flex max-w-2xl flex-col gap-6 text-white md:gap-8 lg:gap-10">
          <div className="hero-enter hero-enter-1 flex flex-col gap-6 md:gap-7">
            <span className="text-[0.8rem] font-semibold tracking-[0.2em] text-secondary uppercase">
              Chauffeur-Driven Luxury Travel
            </span>
            <h1 className="font-heading text-4xl leading-[1.1] tracking-[-0.03em] drop-shadow-sm md:text-5xl lg:text-6xl">
              Luxury Travel,
              <br />
              Personally Coordinated.
            </h1>
          </div>

          <p className="hero-enter hero-enter-2 max-w-xl text-pretty text-sm font-light leading-relaxed text-white/90 drop-shadow-sm md:text-base">
            Private airport transfers, curated Cape Town journeys, and chauffeur-driven travel
            in a luxury seven-seat Kia Carnival — designed around comfort, professionalism,
            and hospitality-led care.
          </p>

          <div className="hero-enter hero-enter-3 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <Button
              variant="secondary"
              size="cta"
              nativeButton={false}
              render={<Link href="#contact" />}
              className="gap-3 text-secondary hover:text-secondary/90"
            >
              Arrange Transport
              <ArrowRight size={14} className="text-secondary/60" aria-hidden />
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
}
