import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section id="contact" className="flex w-full items-center justify-center bg-primary text-primary-foreground">
      <ScrollReveal className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-6 px-6 py-14 text-center sm:gap-7 sm:py-16 md:py-18 lg:gap-8 lg:px-12 lg:py-20">
        <h2 className="font-heading max-w-2xl text-2xl leading-[1.2] tracking-[-0.02em] text-balance md:text-3xl lg:text-5xl">
          Looking for a trusted presence in <span className="text-secondary">Cape Town?</span>
        </h2>

        <p className="max-w-xl text-pretty text-sm font-light leading-relaxed text-primary-foreground/80 md:text-base">
          Whatever you need in Cape Town, it starts with a conversation.


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
      </ScrollReveal>
    </section>
  );
}
