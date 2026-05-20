import { Calendar, Car, MapPin, Plane, Users } from "lucide-react";
import Image from "next/image";

const hireServices = [
  { icon: Plane, label: "Airport Transfers" },
  { icon: Users, label: "Guest Transport" },
  { icon: MapPin, label: "Private Tours" },
  { icon: Car, label: "Executive Travel" },
  { icon: Calendar, label: "Full & Half-Day Hire" },
] as const;

export function TransportPrivateHire() {
  return (
    <section className="w-full overflow-hidden bg-primary text-primary-foreground">
      <div className="grid min-h-0 grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[50vh] w-full lg:h-auto lg:min-h-[70vh]">
          <Image
            src="/john-mccosh-carnival/Kia10.jpeg"
            alt="Luggage loaded into the Kia Carnival boot"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-20 md:px-12 lg:py-24">
          <div className="max-w-xl">
            <span className="mb-6 block text-[0.8rem] font-semibold tracking-[0.2em] text-ochre uppercase">
              Private Hire
            </span>
            <h2 className="font-heading mb-6 text-4xl leading-[1.1] tracking-[-0.02em] md:text-5xl">
              Flexible, Chauffeur-Driven
              <br />
              Travel Across Cape Town.
            </h2>
            <div className="mb-8 h-px w-12 bg-secondary/30" aria-hidden />
            <p className="mb-10 max-w-lg text-pretty text-sm font-light leading-relaxed text-primary-foreground/80 md:text-base">
              Available for airport transfers, guest transport, private tours, executive travel,
              and full or half-day hire — each journey is coordinated personally by Thunderbird.
            </p>

            <ul className="flex flex-wrap gap-x-8 gap-y-5">
              {hireServices.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <Icon size={16} strokeWidth={1.25} className="shrink-0 text-secondary" aria-hidden />
                  <span className="text-[0.7rem] font-medium tracking-[0.12em] text-primary-foreground/90 uppercase md:text-xs">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
