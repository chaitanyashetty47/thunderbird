import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function TransportPreFooterCTA() {
  return (
    <section
      id="contact"
      className="flex w-full items-center justify-center bg-background text-foreground"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-6 py-16 text-center sm:gap-8 sm:py-20 lg:px-12 lg:py-24">
        <h2 className="font-heading max-w-2xl text-3xl leading-[1.1] tracking-[-0.02em] md:text-4xl lg:text-5xl">
          Planning your next journey in Cape Town?
        </h2>
        <p className="max-w-xl text-pretty text-sm font-light leading-relaxed text-foreground/80 md:text-base">
          Thunderbird provides hospitality-led luxury travel — personally coordinated airport
          transfers, private tours, and chauffeur-driven transport across the Cape.
        </p>
        <div className="flex w-full max-w-md flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            variant="default"
            size="cta"
            nativeButton={false}
            render={<Link href="#contact" />}
            className="w-full gap-3 bg-secondary text-primary hover:bg-secondary/90 sm:w-auto"
          >
            Contact John
            <ArrowRight size={14} className="text-primary/70" aria-hidden />
          </Button>
          <Button
            variant="outline"
            size="cta"
            nativeButton={false}
            render={<Link href="#contact" />}
            className="w-full border-primary/30 bg-transparent text-primary hover:bg-primary/5 sm:w-auto"
          >
            Request Information
          </Button>
        </div>
      </div>
    </section>
  );
}
