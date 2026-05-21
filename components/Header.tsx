"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { ContactLink } from "@/components/contact-link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const enquireButtonClass =
  "border-transparent bg-secondary font-semibold text-primary hover:bg-secondary/90 hover:text-primary";

const navLinks = [
  { href: "#property-oversight", label: "PROPERTY OVERSIGHT" },
  { href: "#hospitality-services", label: "HOSPITALITY SERVICES" },
  { href: "/transport", label: "LUXURY TRANSPORT" },
  { href: "#about", label: "ABOUT" },
] as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "absolute top-0 z-50 w-full py-8 text-white",
        isOpen &&
          "max-lg:fixed max-lg:inset-0 max-lg:flex max-lg:flex-col max-lg:bg-primary max-lg:py-0 max-lg:text-primary-foreground",
      )}
    >
      <div
        className={cn(
          "mx-auto grid w-full max-w-7xl grid-cols-[1fr_auto] items-center px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-12",
          isOpen && "max-lg:py-8",
        )}
      >
        <div className="flex flex-col">
          <Link
            href="/"
            className="font-heading text-xl tracking-[0.2em] transition-colors hover:text-white/80"
            onClick={() => setIsOpen(false)}
          >
            THUNDERBIRD
          </Link>
        </div>

        {/* Desktop Nav — centred in header */}
        <nav className="hidden items-center justify-center gap-10 text-[0.7rem] font-medium tracking-widest lg:col-start-2 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              scroll={item.href.startsWith("/")}
              className="transition-colors hover:text-white/70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden justify-end lg:flex">
          <Button
            variant="default"
            size="cta"
            nativeButton={false}
            render={<ContactLink />}
            className={enquireButtonClass}
          >
            ENQUIRE
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="justify-self-end lg:hidden"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav — full viewport, no top gap */}
      {isOpen && (
        <nav className="flex flex-1 flex-col items-center justify-center gap-8 px-6 pb-16 lg:hidden">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              scroll={item.href.startsWith("/")}
              className="text-sm tracking-widest transition-colors hover:text-primary-foreground/70"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button
            variant="default"
            size="cta"
            nativeButton={false}
            render={<ContactLink onClick={() => setIsOpen(false)} />}
            className={enquireButtonClass}
          >
            ENQUIRE
          </Button>
        </nav>
      )}
    </header>
  );
}
