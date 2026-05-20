## Learned User Preferences

- When auditing or adding motion to the Thunderbird luxury landing page, use the emil-design-eng and web-design-guidelines skills.
- Apply scroll-driven reveal animations that feel luxurious, run once per element, respect prefers-reduced-motion, and stay comfortable on mobile, tablet, and laptop.
- Load hero script/display fonts via next/font and apply the font with `.className` on the element; do not rely on Tailwind `font-*` utilities chained through CSS variables for next/font faces.
- Use title case (not all caps) for script/cursive headline words so letterforms connect properly.
- For intentional multi-line headings or body copy, use explicit `<br />` breakpoints and avoid `text-balance` when the user wants the same line splits on every screen size.
- When fixing one section, avoid changing unrelated columns or sections unless the user asks.
- Define colors as theme tokens in `app/globals.css` instead of hardcoding hex or arbitrary values in components.

## Learned Workspace Facts

- Thunderbird is a luxury hospitality landing site (Cape Town); page sections live under `components/landing/` with `components/Header.tsx` for the header.
- Typography: Cormorant for display headings (`font-heading`), Manrope as default sans for subheadings and body; hero script accent uses Parisienne via `lib/fonts.ts`.
- Eyebrow labels (e.g. Founder, Services) use the `text-ochre` theme token defined in `app/globals.css`.
- Scroll reveal lives in `components/motion/scroll-reveal.tsx`; avoid `clip-up` on parents of `next/image` `fill` images—use `fade-in` or static images instead.
- Section horizontal padding aligns with Header/Hero: `px-6 md:px-12` (and matching inset patterns on image columns).
- Desktop header uses a centered nav column between logo and CTA on large screens.
