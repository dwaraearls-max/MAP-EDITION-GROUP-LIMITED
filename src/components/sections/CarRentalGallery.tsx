import Image from "next/image";
import { Bus, Car, Shield } from "lucide-react";
import { carRentalFleet } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

type FleetPhoto = (typeof carRentalFleet.photos)[number];

const fleetGroups = [
  {
    id: "executive",
    icon: Shield,
    title: "Executive & Chauffeur",
    description: "Luxury sedans with professional drivers for corporate and VIP travel.",
  },
  {
    id: "suv",
    icon: Car,
    title: "SUV & 4×4 Fleet",
    description: "Hyundai, Mitsubishi and Toyota Land Cruiser options for field and executive use.",
  },
  {
    id: "group",
    icon: Bus,
    title: "Group Transport",
    description: "Toyota Hiace vans for staff shuttles, events and institutional mobility.",
  },
] as const;

function FleetTile({
  photo,
  label,
  priority,
  className,
  imageClassName,
  objectPosition = "center",
}: {
  photo: FleetPhoto;
  label: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  objectPosition?: string;
}) {
  return (
    <figure
      className={cn(
        "group relative min-h-[11rem] overflow-hidden rounded-2xl border-2 border-white/10 bg-navy-light shadow-lg shadow-black/20",
        className,
      )}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 33vw"
        className={cn(
          "object-cover transition-transform duration-700 group-hover:scale-[1.03]",
          imageClassName,
        )}
        style={{ objectPosition }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/15 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 px-4 pb-3 pt-8">
        <span className="inline-flex rounded-full bg-cyan/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy">
          {label}
        </span>
      </figcaption>
    </figure>
  );
}

export function CarRentalGallery() {
  const [executive, suvs, cruiser, cruiserViews, hiaceSide, hiaceFront] = carRentalFleet.photos;

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-navy py-14 sm:py-20">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,180,216,0.12),transparent_55%)]" />

      <Container className="relative">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
            Our Fleet
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Vehicles for Every Assignment
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            From chauffeur-driven executive sedans to SUVs and Hiace group transport — a
            professionally maintained fleet across Ghana.
          </p>
        </div>

        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          {fleetGroups.map(({ id, icon: Icon, title, description }) => (
            <div
              key={id}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <Icon className="mb-3 h-6 w-6 text-cyan" aria-hidden />
              <h3 className="font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{description}</p>
            </div>
          ))}
        </div>

        {/* Desktop: collage-style mosaic */}
        <div
          className="hidden gap-3 lg:grid"
          style={{
            gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
            gridTemplateRows: "repeat(6, minmax(5.5rem, 1fr))",
            minHeight: "38rem",
          }}
        >
          <FleetTile
            photo={executive}
            label="Executive fleet"
            priority
            className="col-span-7 row-span-2"
            objectPosition="center 30%"
          />
          <FleetTile
            photo={suvs}
            label="SUV fleet"
            priority
            className="col-span-5 row-span-2"
            objectPosition="center 45%"
          />
          <FleetTile
            photo={cruiser}
            label="Land Cruiser"
            className="col-span-4 row-span-2"
            objectPosition="center 40%"
          />
          <FleetTile
            photo={cruiserViews}
            label="Land Cruiser — exterior & interior"
            className="col-span-8 row-span-3"
            imageClassName="object-contain bg-black/30 p-1"
          />
          <FleetTile
            photo={hiaceSide}
            label="Hiace — group transport"
            className="col-span-6 row-span-1"
          />
          <FleetTile
            photo={hiaceFront}
            label="Hiace commuter van"
            className="col-span-6 row-span-1"
            objectPosition="center 35%"
          />
        </div>

        {/* Mobile & tablet: grouped stacks */}
        <div className="space-y-8 lg:hidden">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
              Executive & Chauffeur
            </p>
            <FleetTile
              photo={executive}
              label="Executive fleet"
              priority
              className="min-h-[14rem] sm:min-h-[18rem]"
              objectPosition="center 30%"
            />
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
              SUV & 4×4
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <FleetTile photo={suvs} label="SUV fleet" className="min-h-[12rem] sm:min-h-[14rem]" />
              <FleetTile
                photo={cruiser}
                label="Land Cruiser"
                className="min-h-[12rem] sm:min-h-[14rem]"
              />
            </div>
            <div className="mt-3">
              <FleetTile
                photo={cruiserViews}
                label="Land Cruiser — exterior & interior"
                className="min-h-[14rem]"
                imageClassName="object-contain bg-black/30 p-2"
              />
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
              Group Transport
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <FleetTile photo={hiaceSide} label="Hiace — side view" className="min-h-[12rem]" />
              <FleetTile
                photo={hiaceFront}
                label="Hiace — front view"
                className="min-h-[12rem]"
                objectPosition="center 35%"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
