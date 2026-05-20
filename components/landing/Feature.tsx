import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Feature() {
  return (
    <section className="relative isolate min-h-[70vh] w-full overflow-hidden text-primary-foreground">
      <div className="absolute inset-0">
        <Image
          src="/car-driving-capetown.png"
          alt="Luxury vehicle and Cape Town coastline at dusk"
          fill
          sizes="100vw"
          className="object-cover object-[center_77%]"
        />
        <div
          className="absolute inset-0 bg-linear-to-r from-black/80 via-black/45 via-45% to-black/20"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-black/35 via-transparent to-black/45"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[70vh] w-full max-w-7xl items-center px-6 lg:px-12">
        <div className="flex w-full max-w-2xl min-w-0 flex-col gap-6 md:gap-8 lg:max-w-3xl lg:gap-10">
          <h2 className="font-heading text-2xl leading-[1.1] tracking-[-0.02em] text-white md:text-4xl lg:text-[2.5rem]">
            Thoughtfully Managed
            <br />
            Experiences Across{" "}
            <span className="text-secondary">Cape&nbsp;Town.</span>
          </h2>
          <p className="max-w-none text-pretty text-xs font-light leading-relaxed text-white/85 sm:text-sm md:text-base">
            From private residences to guest arrivals and chauffeur-driven journeys,
            <br />
            we provide hospitality-led support grounded in attentiveness and trust.
          </p>
          <Button
            variant="default"
            size="cta"
            nativeButton={false}
            render={<Link href="#contact" />}
            className="w-full max-w-xs bg-secondary text-secondary-foreground hover:bg-secondary/90 sm:w-auto"
          >
            Contact John
            <ArrowRight size={14} className="text-secondary-foreground/70" aria-hidden />
          </Button>
        </div>
      </div>
    </section>
  );
}
