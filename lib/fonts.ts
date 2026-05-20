import { Cormorant, Manrope, Parisienne } from "next/font/google";

export const fontHeading = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant-heading",
});

export const fontSans = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const fontParisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-parisienne-family",
});
