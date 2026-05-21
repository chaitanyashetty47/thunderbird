import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ContactLink } from "@/components/contact-link";
import { Button } from "@/components/ui/button";
import { fontParisienne } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative h-[100svh] w-full flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/capetown-hero2.png"
          alt="Cape Town coastline and Table Mountain at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_22%] scale-[1.1] translate-x-[-4%]"
        />
        {/* Previous remote hero (Unsplash):
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=2500&auto=format&fit=crop")',
          backgroundPosition: "center 60%",
        }}
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl text-white">
          <h1 className="hero-enter hero-enter-1 mb-6 text-4xl leading-[1.1] tracking-[-0.03em] drop-shadow-sm md:text-5xl lg:text-6xl">
            EXPERIENCE<br />
            CAPE TOWN<br />

            <span
              className={cn(
                fontParisienne.className,
                "hero-script block text-[3.375rem] normal-case leading-none tracking-normal text-primary md:text-[4.125rem] lg:text-[5.25rem]",
              )}
            >
              Exquisitely
            </span>
          </h1>

          <p className="hero-enter hero-enter-2 mb-10 max-w-lg text-pretty text-sm font-light leading-relaxed text-white/90 drop-shadow-sm md:text-base">
            We bring decades of five-star hospitality experience to property oversight,
            guest coordination, and private transport serving a{" "}
            <br className="hidden lg:block" aria-hidden />
            select clientele across Cape Town
          </p>

          <div className="hero-enter hero-enter-3 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <Button
              variant="secondary"
              size="cta"
              nativeButton={false}
              render={<Link href="#services" />}
              className="gap-3 text-secondary hover:text-secondary/90"
            >
              LEARN WHAT WE OFFER
              <ArrowRight size={14} className="text-secondary/60" />
            </Button>
            
            <ContactLink className="relative flex items-center py-2 text-[0.7rem] tracking-[0.2em] text-secondary transition-colors hover:text-secondary/80 md:text-xs group">
              <span className="border-b border-secondary/40 pb-1 transition-colors group-hover:border-secondary">
                REACH OUT TO JOHN
              </span>
            </ContactLink>
          </div>
        </div>
      </div>

      {/* Scroll indicator (Desktop only) */}
      <div className="absolute right-6 bottom-0 z-10 hidden h-64 flex-col items-center justify-end gap-6 pb-12 lg:flex lg:right-12">
        <span className="shrink-0 whitespace-nowrap text-[0.6rem] tracking-[0.3em] text-white/60 [writing-mode:vertical-rl]">
          SCROLL TO DISCOVER
        </span>
        <div className="relative h-16 w-px bg-white/20">
          <div className="scroll-indicator-dot absolute -bottom-1 left-[-3px] h-[7px] w-[7px] rounded-full border border-white/50 bg-transparent" />
        </div>
      </div>
    </section>
  );
}
