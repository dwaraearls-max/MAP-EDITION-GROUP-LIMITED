import Image from "next/image";
import { agribusiness } from "@/lib/data";
import { Container } from "@/components/ui/Container";

export function AgribusinessGallery() {
  return (
    <section className="pt-10 sm:pt-14">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2">
          {agribusiness.photos.map((photo, index) => {
            const wide = "wide" in photo && photo.wide;
            return (
              <div
                key={photo.src}
                className={
                  wide
                    ? "relative h-72 overflow-hidden rounded-3xl bg-bg-muted sm:col-span-2 sm:h-96 lg:h-[28rem]"
                    : "relative h-72 overflow-hidden rounded-3xl bg-bg-muted sm:h-80 lg:h-96"
                }
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  priority={index < 2}
                  sizes={wide ? "100vw" : "(max-width: 640px) 100vw, 50vw"}
                  className={wide ? "object-cover object-center" : "object-cover object-top"}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
