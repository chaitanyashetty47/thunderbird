"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Reset scroll position on route changes (e.g. footer link → new page hero). */
export function ScrollToTopOnNavigate() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
