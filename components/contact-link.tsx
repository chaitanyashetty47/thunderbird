"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

export const CONTACT_SECTION_ID = "contact";

/** Scroll to footer contact block even when the URL hash is already #contact. */
export function scrollToContactSection() {
  document.getElementById(CONTACT_SECTION_ID)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  const url = `${window.location.pathname}#${CONTACT_SECTION_ID}`;
  window.history.replaceState(null, "", url);
}

function handleContactClick(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  scrollToContactSection();
}

type ContactLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href?: ComponentProps<typeof Link>["href"];
};

export function ContactLink({ href = "#contact", onClick, ...props }: ContactLinkProps) {
  return (
    <Link
      href={href}
      onClick={(e) => {
        handleContactClick(e);
        onClick?.(e);
      }}
      {...props}
    />
  );
}
