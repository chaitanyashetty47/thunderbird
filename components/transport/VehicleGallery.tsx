"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Clock, Clapperboard, Map, Plane } from "lucide-react";

import { ScrollReveal, ScrollRevealGroup } from "@/components/motion/scroll-reveal";
import { vehicleGalleryImages } from "@/lib/vehicle-gallery-images";
import { cn } from "@/lib/utils";

const THUMB_SCROLL_STEP = 120;

const vehicleServices = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Personally coordinated arrivals and departures with attentive meet-and-greet service.",
  },
  {
    icon: Map,
    title: "Private Cape Town Tours",
    description:
      "Curated coastal drives, wine estate visits, and private sightseeing across the Cape.",
  },
  {
    icon: Clapperboard,
    title: "Film & Production Logistics",
    description:
      "Reliable chauffeur-driven transport for production teams, talent, and location schedules.",
  },
  {
    icon: Clock,
    title: "Full & Half-Day Hire",
    description:
      "Flexible private hire with driver for guests, executives, and extended Cape Town itineraries.",
  },
] as const;

export function VehicleGallery() {
  const total = vehicleGalleryImages.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const thumbScrollRef = useRef<HTMLDivElement>(null);
  const active = vehicleGalleryImages[activeIndex];

  const selectImage = useCallback((index: number) => {
    setActiveIndex(index);
    thumbRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, []);

  const goToMain = useCallback(
    (delta: number) => {
      const next = (activeIndex + delta + total) % total;
      selectImage(next);
    },
    [activeIndex, selectImage, total],
  );

  const scrollThumbs = useCallback((direction: -1 | 1) => {
    const el = thumbScrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * THUMB_SCROLL_STEP, behavior: "smooth" });
  }, []);

  const galleryNavClass =
    "flex size-9 shrink-0 items-center justify-center border border-primary/20 bg-background/95 text-primary shadow-sm transition-colors hover:bg-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none md:size-10";

  return (
    <section id="vehicle" className="w-full bg-background text-foreground">
      <div className="mx-auto w-full max-w-7xl px-6 pt-16 lg:px-12 lg:pt-20">
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16">
          <ScrollReveal
            variant="fade-up"
            className="flex flex-col justify-start lg:row-span-2 lg:self-center"
          >
            <div className="max-w-md">
              <span className="mb-6 block text-[0.8rem] font-semibold tracking-[0.2em] text-ochre uppercase">
                The Vehicle
              </span>
              <h2 className="font-heading mb-6 text-4xl leading-[1.1] tracking-[-0.02em] md:text-5xl">
                A Seven-Seat Luxury
                <br />
                Travel Experience.
              </h2>
              <p className="text-pretty text-sm font-light leading-relaxed text-foreground/80 md:text-base">
                Thunderbird&apos;s silver Kia Carnival combines spacious comfort, understated
                luxury, and hospitality-led service — ideal for airport transfers, private tours,
                guest transport, and executive travel across Cape Town.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-in" className="w-full lg:col-start-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
              <Image
                key={active.src}
                src={active.src}
                alt={active.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority={activeIndex === 0}
              />
              <button
                type="button"
                onClick={() => goToMain(-1)}
                className="absolute top-1/2 left-2 z-10 flex size-10 -translate-y-1/2 items-center justify-center bg-primary/50 text-primary-foreground backdrop-blur-[2px] transition-colors hover:bg-primary/65 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none md:left-3 md:size-11"
                aria-label="Previous photo"
              >
                <ChevronLeft size={22} strokeWidth={1.5} aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => goToMain(1)}
                className="absolute top-1/2 right-2 z-10 flex size-10 -translate-y-1/2 items-center justify-center bg-primary/50 text-primary-foreground backdrop-blur-[2px] transition-colors hover:bg-primary/65 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none md:right-3 md:size-11"
                aria-label="Next photo"
              >
                <ChevronRight size={22} strokeWidth={1.5} aria-hidden />
              </button>
            </div>

            <div className="mt-3 flex items-center gap-1.5 md:gap-2">
              <button
                type="button"
                onClick={() => scrollThumbs(-1)}
                className={galleryNavClass}
                aria-label="Scroll thumbnails left"
              >
                <ChevronLeft size={18} aria-hidden />
              </button>

              <div
                ref={thumbScrollRef}
                className="thumb-scroller flex min-w-0 flex-1 snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain scroll-smooth py-1"
                role="tablist"
                aria-label="Vehicle photo gallery"
              >
                {vehicleGalleryImages.map((image, index) => (
                  <button
                    key={image.src}
                    ref={(el) => {
                      thumbRefs.current[index] = el;
                    }}
                    type="button"
                    role="tab"
                    aria-selected={index === activeIndex}
                    aria-label={`View photo ${index + 1} of ${total}`}
                    onClick={() => selectImage(index)}
                    className={cn(
                      "relative size-[4.25rem] shrink-0 snap-start overflow-hidden border-2 transition-colors max-sm:size-[3.75rem] md:size-[5.25rem]",
                      index === activeIndex
                        ? "border-primary"
                        : "border-primary/15 hover:border-primary/40",
                    )}
                  >
                    <Image
                      src={image.src}
                      alt=""
                      fill
                      sizes="84px"
                      className="object-cover"
                      aria-hidden
                      draggable={false}
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollThumbs(1)}
                className={galleryNavClass}
                aria-label="Scroll thumbnails right"
              >
                <ChevronRight size={18} aria-hidden />
              </button>
            </div>
          </ScrollReveal>

          <ScrollRevealGroup className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4 lg:gap-8 lg:pb-16">
            {vehicleServices.map(({ icon: Icon, title, description }) => (
              <div key={title} className="reveal-stagger flex flex-col">
                <Icon size={40} strokeWidth={1.75} className="mb-4 text-ochre" aria-hidden />
                <h3 className="mb-3 text-sm font-semibold tracking-wide text-foreground">{title}</h3>
                <p className="text-pretty text-xs font-light leading-relaxed text-foreground/75 md:text-sm">
                  {description}
                </p>
              </div>
            ))}
          </ScrollRevealGroup>
        </div>
      </div>
    </section>
  );
}
