import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const footerLinks = {
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/about#mission", label: "Mission & Vision" },
    { href: "/about#capabilities", label: "Capabilities" },
  ],
  Services: [
    { href: "/services/car-rentals", label: "Car Rentals" },
    { href: "/services/technology", label: "Technology" },
    { href: "/services/stationery", label: "Stationery" },
    { href: "/services/appliances", label: "Appliances" },
    { href: "/services/construction-equipment", label: "Construction Equipment" },
    { href: "/services/general-supplies", label: "General Supplies" },
  ],
  Enterprise: [
    { href: "/technology/lenovo", label: "Lenovo Solutions" },
    { href: "/technology/deployment", label: "Deployment Services" },
    { href: "/technology", label: "Corporate Procurement" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <Container className="section-pad pb-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo imageClassName="h-12 sm:h-14" variant="footer" showWordmark />
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-subtext">
              {siteConfig.description}
            </p>
            <div className="mt-6">
              <Button href="/quote" size="sm">
                Request a Quote
              </Button>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-subtext transition-colors hover:text-cyan"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-subtext">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                <span>{siteConfig.address}</span>
              </li>
              {siteConfig.phones.map((phone) => (
                <li key={phone} className="flex gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-cyan" />
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-navy">
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex gap-2">
                <Mail className="h-4 w-4 shrink-0 text-cyan" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-navy">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 bg-[#060d18] py-6">
        <Container>
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#c9a46c] sm:text-xs">
            Est. 2026 · Accra, Ghana
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-slate-200">MAP Edition Group Limited.</span>{" "}
            Powered by{" "}
            <a
              href="https://earlsdwaradigital.store"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-200 transition-colors hover:text-[#c9a46c]"
            >
              Earlsdwara Digital.
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
