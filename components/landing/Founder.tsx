import Image from "next/image";

import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function Founder() {
  return (
    <section className="w-full bg-background text-foreground">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center py-12 lg:py-16">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
            <ScrollReveal className="max-w-xl" variant="fade-up">
              <span className="mb-6 block text-[0.8rem] font-semibold tracking-[0.2em] text-ochre uppercase">
                Founder & Director
              </span>
              <h2 className="font-heading mb-10 text-3xl leading-[1.1] md:text-4xl">
                A Boutique Practice, Built on
                <br />
                Two Decades of Five-Star Experience.
              </h2>

              <div className="space-y-6 text-sm font-medium leading-relaxed text-foreground/80 md:text-base">
                <p>
                  John spent twenty years working within some of the world&apos;s leading
                  luxury hospitality environments, including Four Seasons properties
                  across multiple countries.
                </p>
                <p>
                  That career taught him that the finest experiences are never accidental,
                  they are the result of quiet, consistent attention to detail.
                </p>
                <p>
                  Thunderbird is the extension of that philosophy. Intentionally small,
                  personally led, and built entirely on trust - it exists to serve
                  the clients who value that difference.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="flex min-h-[60vh] w-full items-center p-6 lg:min-h-[600px] lg:p-12">
          <div className="relative h-[50vh] w-full lg:h-[min(480px,calc(100%-6rem))] lg:min-h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80"
              alt="Founder portrait placeholder"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
