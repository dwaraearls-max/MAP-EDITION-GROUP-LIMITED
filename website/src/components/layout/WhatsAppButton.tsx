"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";

const whatsappMessage = encodeURIComponent(
  `Hello MAP Edition Group,

I would like to enquire about your services.

Name:
Company:
Service needed:
Phone:
Message:`,
);

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105"
      aria-label="Talk to us on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Talk to Us on WhatsApp</span>
    </a>
  );
}
