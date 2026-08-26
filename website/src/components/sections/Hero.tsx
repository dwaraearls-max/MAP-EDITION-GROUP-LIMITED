"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Car,
  Cpu,
  HardHat,
  Home,
  Package,
  PenLine,
  Pause,
  Play,
  Truck,
  Volume2,
  VolumeX,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { services, siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const iconMap = {
  car: Car,
  laptop: Cpu,
  pen: PenLine,
  home: Home,
  "hard-hat": HardHat,
  package: Package,
};

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        video.muted = true;
        await video.play();
        setPlaying(true);
        setReady(true);
      } catch {
        setPlaying(false);
        setReady(true);
      }
    };

    if (video.readyState >= 2) {
      void tryPlay();
    } else {
      video.addEventListener("loadeddata", () => void tryPlay(), { once: true });
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section className="relative min-h-[92vh] overflow-hidden page-pad-top">
      <div className="hero-cinema__frame">
        <video
          ref={videoRef}
          className="hero-cinema__video absolute inset-0 h-full w-full"
          src={siteConfig.heroVideo}
          poster={siteConfig.heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="MAP Edition Group corporate hero video"
        />
        <div className="hero-cinema__overlay pointer-events-none absolute inset-0" aria-hidden />
        <motion.div
          className="pointer-events-none absolute inset-0 bg-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: ready ? 0 : 1 }}
          transition={{ duration: 0.8 }}
          aria-hidden
        />
      </div>

      <div className="pointer-events-auto absolute bottom-6 right-4 z-20 flex items-center gap-2 sm:bottom-8 sm:right-8">
        <button
          type="button"
          onClick={togglePlay}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/90 text-navy shadow-sm backdrop-blur-sm transition hover:bg-white"
          aria-label={playing ? "Pause video" : "Play video"}
        >
          {playing ? <Pause size={15} /> : <Play size={15} className="ml-0.5" />}
        </button>
        <button
          type="button"
          onClick={toggleMute}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/90 text-navy shadow-sm backdrop-blur-sm transition hover:bg-white"
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </button>
      </div>

      <Container className="relative z-10 flex min-h-[calc(92vh-5rem)] flex-col justify-center py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan">
            One trusted partner. Multiple business solutions.
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            <span className="gradient-text">SERVICE WITH PASSION.</span>
            <br />
            <span className="text-navy">SOLUTIONS WITHOUT LIMITS.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-subtext sm:text-xl">
            MAP Edition Group Limited delivers quality products, professional services and
            reliable solutions across technology, transportation, equipment, supplies and
            business support.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/services" size="lg">
              Explore Our Services
            </Button>
            <Button href="/quote" variant="secondary" size="lg">
              Request a Corporate Quote
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
        >
          {[
            { icon: Building2, label: "Corporate" },
            { icon: Car, label: "Transport" },
            { icon: Cpu, label: "Technology" },
            { icon: HardHat, label: "Equipment" },
            { icon: Package, label: "Supplies" },
            { icon: Truck, label: "Logistics" },
          ].map((item) => (
            <div
              key={item.label}
              className="glass card-hover flex flex-col items-center gap-2 rounded-2xl bg-white/90 p-4 text-center backdrop-blur-sm"
            >
              <item.icon className="h-6 w-6 text-cyan" />
              <span className="text-xs font-medium text-subtext">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export function TrustBar() {
  return (
    <section className="border-y border-border bg-bg-secondary py-8">
      <Container>
        <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-subtext">
          Trusted by businesses, institutions & corporate organizations
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {[
            "Société Générale Ghana",
            "Zenith Bank Ghana",
            "CAMFED Ghana",
            "CARE Ghana",
            "Public Procurement Authority",
            "Nextdoor Technology Systems",
          ].map((name) => (
            <span
              key={name}
              className="text-sm font-medium text-subtext/80 transition-colors hover:text-cyan"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ServicesGrid({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section className="section-pad bg-white">
      <Container>
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
            Our Business Solutions
          </p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Six Sectors. One Trusted Partner.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Package;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={service.href}
                  className="glass card-hover group flex h-full flex-col overflow-hidden rounded-2xl"
                >
                  <div className="relative h-44 w-full overflow-hidden sm:h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-cyan shadow-sm">
                      {service.number}
                    </span>
                    <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-cyan shadow-sm">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-bold text-navy">{service.title}</h3>
                    <p className="mt-2 text-sm text-cyan">{service.tagline}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-subtext">
                      {service.description}
                    </p>
                    <span className="mt-4 text-sm font-medium text-cyan">
                      Explore {service.title.split(" ")[0]} →
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
