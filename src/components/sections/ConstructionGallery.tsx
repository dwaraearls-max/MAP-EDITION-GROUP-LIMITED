import Image from "next/image";
import { constructionServices } from "@/lib/data";
import { Container } from "@/components/ui/Container";

export function ConstructionGallery() {
  return (
    <section className="pt-10 sm:pt-14">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2">
          {constructionServices.photos.map((photo, index) => (
            <div
              key={photo.src}
              className="relative h-72 overflow-hidden rounded-3xl bg-bg-muted sm:h-80 lg:h-96"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                priority={index < 2}
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
