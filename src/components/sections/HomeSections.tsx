"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, Heart, Shield, Zap } from "lucide-react";
import Link from "next/link";
import {
  capabilities,
  clients,
  deploymentPhases,
  partners,
  whyChooseUs,
} from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Container, SectionHeading } from "@/components/ui/Container";

export function AboutPreview() {
  return (
    <section className="section-pad border-t border-border">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About MAP Edition Group"
              title="Built on Service. Driven by Excellence."
              description="MAP Edition Group Limited is a dynamic and diversified company providing services across multiple sectors, with a focus on exceptional service, high-quality products and reliable solutions. We are also an authorized Lenovo distributor providing laptops, desktops, servers and accessories with official warranty and support."
            />
            <Button href="/about">
              Discover MAP Edition Group <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="glass relative overflow-hidden rounded-3xl p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-blue/20 to-cyan/10" />
            <div className="relative grid grid-cols-2 gap-4">
              {[
                { label: "Business Sectors", value: "7+" },
                { label: "Enterprise Clients", value: "8+" },
                { label: "Deployment Days", value: "14" },
                { label: "Districts Served", value: "38" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-bg-muted p-4 text-center">
                  <p className="text-2xl font-bold text-cyan">{stat.value}</p>
                  <p className="mt-1 text-xs text-subtext">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function TechnologyPreview() {
  return (
    <section className="section-pad bg-bg-secondary">
      <Container>
        <SectionHeading
          eyebrow="Technology & Enterprise"
          title="Authorized Lenovo Distributor"
          description="Genuine Technology. Professional Deployment. Reliable Support."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {["Business Laptops", "Desktops & Servers", "Accessories"].map((item) => (
            <div key={item} className="glass card-hover rounded-2xl p-6 text-center">
              <p className="font-semibold text-navy">{item}</p>
              <p className="mt-2 text-sm text-subtext">Request quote for pricing</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/technology/lenovo">Explore Lenovo Solutions</Button>
          <Button href="/technology/deployment" variant="secondary">
            View Deployment Process
          </Button>
        </div>
      </Container>
    </section>
  );
}

export function AgriculturePreview() {
  return (
    <section className="section-pad bg-bg-secondary">
      <Container>
        <SectionHeading
          eyebrow="Ghana"
          title="Agriculture & Agribusiness"
          description="From land to market — developing sustainable, commercially viable agricultural enterprises across Ghana."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Crop Farming", description: "Maize, rice, cassava, vegetables and other food and cash crops." },
            { title: "Livestock & Aquaculture", description: "Poultry, cattle, goats, sheep, pigs and commercially viable fish farming." },
            { title: "Agro-Processing", description: "Value addition through processing, storage, packaging and distribution." },
          ].map((item) => (
            <div key={item.title} className="glass card-hover rounded-2xl p-6 text-center">
              <p className="font-semibold text-navy">{item.title}</p>
              <p className="mt-2 text-sm text-subtext">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/agriculture">Explore Agribusiness</Button>
          <Button href="/quote" variant="secondary">
            Request a Quote
          </Button>
        </div>
      </Container>
    </section>
  );
}

export function DeploymentTimeline() {
  return (
    <section className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Implementation & Deployment"
          title="14-Day Enterprise Deployment"
          description="From planning and stocking through configuration, deployment, testing, training and support."
        />
        <div className="relative">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent md:block" />
          <div className="grid gap-6 md:grid-cols-5">
            {deploymentPhases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass card-hover rounded-2xl p-5 text-center"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-cyan/20 text-sm font-bold text-cyan">
                  {phase.phase}
                </div>
                <h3 className="font-semibold text-navy">{phase.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-subtext">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function WhyChooseUs() {
  const icons = [Shield, Heart, Zap, Award];

  return (
    <section className="section-pad bg-bg-muted">
      <Container>
        <SectionHeading title="Why Businesses Choose MAP Edition Group" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.title} className="glass card-hover rounded-2xl p-6">
                <Icon className="mb-4 h-8 w-8 text-cyan" />
                <h3 className="font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-subtext">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function Capabilities() {
  return (
    <section id="capabilities" className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Corporate Capabilities"
          title="Organizational Strength"
          description="Core capabilities that drive our multi-sector delivery excellence."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="glass card-hover group rounded-2xl p-6"
            >
              <h3 className="font-semibold text-navy group-hover:text-cyan">{cap.title}</h3>
              <p className="mt-2 text-sm text-subtext">{cap.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function MissionVision() {
  return (
    <section id="mission" className="section-pad border-t border-border">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass rounded-3xl p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan">Mission</p>
            <p className="mt-4 text-xl leading-relaxed text-navy lg:text-2xl">
              To be the preferred provider of premium services and products across various
              sectors, delivering unmatched quality and exceptional customer service while
              building long-term client relationships through innovative solutions.
            </p>
          </div>
          <div className="glass rounded-3xl p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan">Vision</p>
            <p className="mt-4 text-xl leading-relaxed text-navy lg:text-2xl">
              To lead in the industries we serve, continuously expanding our offerings and
              enhancing customer satisfaction while remaining committed to innovation, quality
              and sustainability.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PartnersClients() {
  return (
    <section className="section-pad bg-bg-secondary">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Partners" title="Technology & Supply Partners" />
            <div className="flex flex-wrap gap-3">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="glass rounded-full px-5 py-2.5 text-sm font-medium text-subtext transition-colors hover:text-cyan"
                >
                  {partner}
                </span>
              ))}
            </div>
            <Link href="/partners" className="mt-4 inline-block text-sm text-cyan hover:underline">
              View all partners →
            </Link>
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Clients" title="Trusted Across Industries" />
            <div className="flex flex-wrap gap-3">
              {clients.slice(0, 6).map((client) => (
                <span
                  key={client}
                  className="rounded-xl border border-border bg-white px-4 py-2 text-sm text-subtext shadow-sm"
                >
                  {client}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-subtext">
              Corporate references available upon request.
            </p>
            <Link href="/clients" className="mt-2 inline-block text-sm text-cyan hover:underline">
              View all clients →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function QuoteCTA() {
  return (
    <section className="section-pad">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue to-cyan-dim p-8 text-center lg:p-16">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Work With MAP Edition Group?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Request a corporate quote and our team will review your requirements and
              contact you promptly.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/quote" variant="secondary" className="border-white/30 bg-white text-navy hover:bg-white/90">
                Request a Quote
              </Button>
              <Button href="/contact" variant="secondary" className="border-white/40 bg-transparent text-white hover:border-white hover:bg-white/15 hover:text-white">
                Talk to Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ContactPreview() {
  return (
    <section className="section-pad border-t border-border">
      <Container>
        <SectionHeading
          title="Let's Build Something Reliable Together."
          description="Visit us in Accra or reach out via phone, email or WhatsApp."
        />
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/contact" size="lg">
            Get Directions
          </Button>
          <Button href={`tel:+2330501886853`} variant="secondary" size="lg" external>
            Call Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
