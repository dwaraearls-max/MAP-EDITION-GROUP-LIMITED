import { Resend } from "resend";
import { siteConfig } from "@/lib/data";

let resendClient: Resend | null = null;

const FALLBACK_FROM = `${siteConfig.shortName} <noreply@mapeditiongroup.com>`;

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;

  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }

  return resendClient;
}

function getFromCandidates() {
  const configured = process.env.RESEND_FROM_EMAIL?.trim();
  const candidates = [
    configured,
    FALLBACK_FROM,
    `${siteConfig.shortName} <onboarding@resend.dev>`,
  ].filter(Boolean) as string[];
  return [...new Set(candidates)];
}

function getToEmail() {
  return process.env.RESEND_TO_EMAIL?.trim() || siteConfig.email;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatRow(label: string, value?: string | null) {
  if (!value?.trim()) return "";

  return `
    <tr>
      <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#0a1628;width:180px;">${escapeHtml(label)}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#334155;">${escapeHtml(value.trim())}</td>
    </tr>
  `;
}

function buildEmailHtml(title: string, rows: string, message?: string) {
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#334155;max-width:640px;">
      <h2 style="margin:0 0 16px;color:#0a1628;">${escapeHtml(title)}</h2>
      <table style="width:100%;border-collapse:collapse;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
        <tbody>${rows}</tbody>
      </table>
      ${
        message
          ? `<div style="margin-top:20px;padding:16px;background:#f8fafc;border:1px solid #e5e7eb;border-radius:12px;">
              <p style="margin:0 0 8px;font-weight:600;color:#0a1628;">Message</p>
              <p style="margin:0;white-space:pre-wrap;">${escapeHtml(message.trim())}</p>
            </div>`
          : ""
      }
      <p style="margin:24px 0 0;font-size:12px;color:#64748b;">
        Sent from the ${escapeHtml(siteConfig.name)} website.
      </p>
    </div>
  `;
}

function buildPlainText(title: string, fields: Record<string, string | undefined>, message?: string) {
  const lines = [title, ""];

  for (const [label, value] of Object.entries(fields)) {
    if (value?.trim()) {
      lines.push(`${label}: ${value.trim()}`);
    }
  }

  if (message?.trim()) {
    lines.push("", "Message:", message.trim());
  }

  lines.push("", `Sent from the ${siteConfig.name} website.`);
  return lines.join("\n");
}

type SendEmailInput = {
  subject: string;
  html: string;
  text: string;
  replyTo: string;
};

async function sendEmail(input: SendEmailInput) {
  const resend = getResend();

  if (!resend) {
    console.error("[Resend] RESEND_API_KEY is not configured");
    return {
      ok: false as const,
      error: "Email service is not configured",
    };
  }

  const errors: string[] = [];

  for (const from of getFromCandidates()) {
    const { data, error } = await resend.emails.send({
      from,
      to: [getToEmail()],
      replyTo: input.replyTo,
      subject: input.subject,
      html: input.html,
      text: input.text,
    });

    if (!error && data?.id) {
      console.info("[Resend] Email sent", { id: data.id, from, to: getToEmail() });
      return { ok: true as const, id: data.id, from };
    }

    const message = error?.message ?? "Unknown Resend error";
    errors.push(`${from}: ${message}`);
    console.error("[Resend] Send failed", { from, error: message });
  }

  return {
    ok: false as const,
    error: errors.join(" | "),
  };
}

type ContactPayload = {
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

type QuotePayload = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  description: string;
  company?: string;
  quantity?: string;
  preferredDate?: string;
  location?: string;
  contactMethod?: string;
  vehicle?: string;
};

export async function sendContactEmail(payload: ContactPayload) {
  const fields = {
    "Full Name": payload.fullName,
    Email: payload.email,
    Phone: payload.phone,
    Subject: payload.subject,
  };

  const rows = [
    formatRow("Full Name", payload.fullName),
    formatRow("Email", payload.email),
    formatRow("Phone", payload.phone),
    formatRow("Subject", payload.subject),
  ].join("");

  return sendEmail({
    subject: `[Contact] ${payload.subject}`,
    html: buildEmailHtml("New Contact Message", rows, payload.message),
    text: buildPlainText("New Contact Message", fields, payload.message),
    replyTo: payload.email,
  });
}

export async function sendQuoteEmail(payload: QuotePayload) {
  const fields = {
    "Full Name": payload.fullName,
    Company: payload.company,
    Email: payload.email,
    Phone: payload.phone,
    Service: payload.service,
    Vehicle: payload.vehicle,
    Quantity: payload.quantity,
    "Preferred Date": payload.preferredDate,
    Location: payload.location,
    "Preferred Contact": payload.contactMethod,
  };

  const rows = [
    formatRow("Full Name", payload.fullName),
    formatRow("Company", payload.company),
    formatRow("Email", payload.email),
    formatRow("Phone", payload.phone),
    formatRow("Service", payload.service),
    formatRow("Vehicle", payload.vehicle),
    formatRow("Quantity", payload.quantity),
    formatRow("Preferred Date", payload.preferredDate),
    formatRow("Location", payload.location),
    formatRow("Preferred Contact", payload.contactMethod),
  ].join("");

  return sendEmail({
    subject: `[Quote] ${payload.service}${payload.vehicle ? ` — ${payload.vehicle}` : ""} — ${payload.fullName}`,
    html: buildEmailHtml("New Quote Request", rows, payload.description),
    text: buildPlainText("New Quote Request", fields, payload.description),
    replyTo: payload.email,
  });
}

export function isEmailConfigured() {
  return Boolean(process.env.RESEND_API_KEY);
}
