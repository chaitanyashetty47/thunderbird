"use client";

import {
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

const variantClass = {
  "fade-up": "reveal-fade-up",
  "fade-in": "reveal-fade-in",
  "clip-up": "reveal-clip-up",
  "slide-left": "reveal-slide-left",
  "slide-right": "reveal-slide-right",
} as const;

export type ScrollRevealVariant = keyof typeof variantClass;

type ScrollRevealProps<T extends ElementType = "div"> = {
  children: ReactNode;
  className?: string;
  variant?: ScrollRevealVariant;
  /** Stagger step 0–4 → 0ms–240ms */
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: T;
  margin?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function ScrollReveal<T extends ElementType = "div">({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  as,
  margin = "-10% 0px -10% 0px",
  ...props
}: ScrollRevealProps<T>) {
  const Component = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.classList.add("is-visible");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { rootMargin: margin, threshold: 0.05 },
    );

    observer.observe(el);

    // IO can miss already-in-viewport nodes after hydration (common with fill images)
    requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      if (rect.height > 0 && rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        show();
        observer.disconnect();
      }
    });

    return () => observer.disconnect();
  }, [margin]);

  return (
    <Component
      ref={ref}
      className={cn(
        "reveal",
        variantClass[variant],
        delay > 0 && `reveal-delay-${delay}`,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

type ScrollRevealGroupProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
  margin?: string;
};

/** Parent becomes visible once; children with `reveal-stagger` cascade in. */
export function ScrollRevealGroup({
  children,
  className,
  margin = "-10% 0px -10% 0px",
  ...props
}: ScrollRevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }

    const show = () => el.classList.add("is-visible");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { rootMargin: margin, threshold: 0.05 },
    );

    observer.observe(el);

    requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      if (rect.height > 0 && rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        show();
        observer.disconnect();
      }
    });

    return () => observer.disconnect();
  }, [margin]);

  return (
    <div ref={ref} className={cn("reveal-group", className)} {...props}>
      {children}
    </div>
  );
}
