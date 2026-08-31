import Image from "next/image";
import { generalSupplies } from "@/lib/data";
import { Container } from "@/components/ui/Container";

export function GeneralSuppliesGallery() {
  return (
    <section className="pt-10 sm:pt-14">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2">
          {generalSupplies.photos.map((photo, index) => {
            const wide = "wide" in photo && photo.wide;
            return (
              <div
                key={photo.src}
                className={
                  wide
                    ? "relative h-72 overflow-hidden rounded-3xl bg-bg-muted sm:col-span-2 sm:h-96 lg:h-[28rem]"
                    : "relative h-56 overflow-hidden rounded-3xl bg-bg-muted sm:h-72 lg:h-80"
                }
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  priority={index < 2}
                  sizes={wide ? "100vw" : "(max-width: 640px) 100vw, 50vw"}
                  className={wide ? "object-contain" : "object-cover object-center"}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
