import { Header } from "@/components/Header";
import { FooterSecondary } from "@/components/landing/FooterSecondary";
import { TransportBanner } from "@/components/transport/TransportBanner";
import { TransportExperience } from "@/components/transport/TransportExperience";
import { TransportHero } from "@/components/transport/TransportHero";
import { TransportPreFooterCTA } from "@/components/transport/TransportPreFooterCTA";
import { TransportPrivateHire } from "@/components/transport/TransportPrivateHire";
import { VehicleGallery } from "@/components/transport/VehicleGallery";

export default function TransportPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-screen overflow-x-hidden bg-primary outline-none"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-secondary focus:px-4 focus:py-2 focus:text-primary focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to content
      </a>
      <Header />
      <TransportHero />
      <TransportExperience />
      <VehicleGallery />
      <TransportBanner />
      {/* <TransportPrivateHire /> */}
      {/* <TransportPreFooterCTA /> */}
      <FooterSecondary />
    </main>
  );
}
