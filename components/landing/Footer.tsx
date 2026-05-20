import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { ScrollReveal } from "@/components/motion/scroll-reveal";

const footerLinks = [
  { href: "#property-oversight", label: "Property Oversight" },
  { href: "#hospitality-services", label: "Hospitality Services" },
  { href: "/transport", label: "Luxury Transport" },
  { href: "#about", label: "About" },
] as const;

/** Landing page footer — navy background, sand foreground. */
export function Footer() {
  return (
    <footer className="w-full bg-primary text-secondary">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="border-t border-secondary/15 py-14 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">
            <ScrollReveal variant="fade-up">
              <div className="flex flex-col">
                <div className="mb-2 flex flex-col">
                  <Link
                    href="/"
                    className="font-heading text-xl font-bold tracking-[0.2em] transition-colors hover:text-secondary/90 md:text-2xl"
                  >
                    THUNDERBIRD
                  </Link>
                </div>
                <p className="mb-8 max-w-xs text-sm font-light leading-relaxed text-secondary/75">
                  Personal by nature. Refined in every detail.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={1}>
              <div>
                <h3 className="mb-6 text-base font-medium text-secondary">Pages</h3>
                <nav className="flex flex-col gap-4">
                  {footerLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      scroll={item.href.startsWith("/")}
                      className="text-sm font-medium text-secondary/60 transition-colors hover:text-secondary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={2}>
              <div>
                <h3 className="mb-6 text-base font-medium text-secondary">Contact</h3>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a
                      href="tel:+27821234567"
                      className="inline-flex items-center gap-3 text-sm font-light text-secondary/80 transition-colors hover:text-secondary"
                    >
                      <Phone size={16} strokeWidth={1.5} className="shrink-0 text-secondary/60" aria-hidden />
                      +27 82 123 4567
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@thunderbirdcapetown.com"
                      className="inline-flex items-center gap-3 text-sm font-light text-secondary/80 transition-colors hover:text-secondary"
                    >
                      <Mail size={16} strokeWidth={1.5} className="shrink-0 text-secondary/60" aria-hidden />
                      info@thunderbirdcapetown.com
                    </a>
                  </li>
                </ul>

                <h3 className="mb-4 mt-10 text-base font-medium text-secondary">Address</h3>
                <p className="text-sm font-light leading-relaxed text-secondary/80">
                  Cape Town, South Africa
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="h-px w-full bg-secondary/15" aria-hidden />
      </div>
    </footer>
  );
}
