import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/QuoteForm";
import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Container, PageHero } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact MAP Edition Group Limited in Accra Central, Adabraka. Phone, email, WhatsApp and directions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something Reliable Together."
        description="Reach out via phone, email, WhatsApp or visit us in Accra Central."
      />
      <section className="section-pad">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <MapPin className="mb-3 h-6 w-6 text-cyan" />
                <h2 className="font-bold text-navy">Location</h2>
                <p className="mt-2 text-subtext">{siteConfig.address}</p>
                <p className="mt-1 text-sm text-cyan">GhanaPostGPS: {siteConfig.ghanaPostGps}</p>
                <Button href={siteConfig.mapsUrl} external variant="secondary" size="sm" className="mt-4">
                  Get Directions
                </Button>
              </div>
              <div className="glass rounded-2xl p-6">
                <Phone className="mb-3 h-6 w-6 text-cyan" />
                <h2 className="font-bold text-navy">Phone</h2>
                <ul className="mt-2 space-y-1">
                  {siteConfig.phones.map((phone) => (
                    <li key={phone}>
                      <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-subtext hover:text-cyan">
                        {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass rounded-2xl p-6">
                <Mail className="mb-3 h-6 w-6 text-cyan" />
                <h2 className="font-bold text-navy">Email</h2>
                <a href={`mailto:${siteConfig.email}`} className="mt-2 block text-subtext hover:text-cyan">
                  {siteConfig.email}
                </a>
              </div>
              <div className="glass overflow-hidden rounded-2xl">
                <iframe
                  title="MAP Edition Group Location"
                  src="https://maps.google.com/maps?q=Accra+Central+Adabraka+Kojo+Thompson+Road&output=embed"
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
