import { Header } from "@/components/Header"
import { Hero } from "@/components/landing/Hero"
import { About } from "@/components/landing/About"
import { Services } from "@/components/landing/Services"
import { Feature } from "@/components/landing/Feature"
import { Founder } from "@/components/landing/Founder"
import { CTA } from "@/components/landing/CTA"
import { Footer } from "@/components/landing/Footer"

export default function Page() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen overflow-x-hidden bg-primary outline-none">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-secondary focus:px-4 focus:py-2 focus:text-primary focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to content
      </a>
      <Header />
      <Hero />
      <About />
      <Services />
      <Founder />
      <Feature />
      <Footer />
    </main>
  )
}
