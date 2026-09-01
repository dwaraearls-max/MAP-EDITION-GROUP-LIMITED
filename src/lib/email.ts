import { Resend } from "resend";
import { siteConfig } from "@/lib/data";

let resendClient: Resend | null = null;

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;

  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }

  return resendClient;
}

function getFromEmail() {
  return process.env.RESEND_FROM_EMAIL ?? `${siteConfig.shortName} <onboarding@resend.dev>`;
}

function getToEmail() {
  return process.env.RESEND_TO_EMAIL ?? siteConfig.email;
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
};

export async function sendContactEmail(payload: ContactPayload) {
  const resend = getResend();
  const rows = [
    formatRow("Full Name", payload.fullName),
    formatRow("Email", payload.email),
    formatRow("Phone", payload.phone),
    formatRow("Subject", payload.subject),
  ].join("");

  const html = buildEmailHtml("New Contact Message", rows, payload.message);

  if (!resend) {
    console.info("[Contact Message - Resend not configured]", payload);
    return { ok: true as const, mocked: true };
  }

  const { error } = await resend.emails.send({
    from: getFromEmail(),
    to: [getToEmail()],
    replyTo: payload.email,
    subject: `[Contact] ${payload.subject}`,
    html,
  });

  if (error) {
    console.error("[Resend Contact Error]", error);
    return { ok: false as const, error: error.message };
  }

  return { ok: true as const, mocked: false };
}

export async function sendQuoteEmail(payload: QuotePayload) {
  const resend = getResend();
  const rows = [
    formatRow("Full Name", payload.fullName),
    formatRow("Company", payload.company),
    formatRow("Email", payload.email),
    formatRow("Phone", payload.phone),
    formatRow("Service", payload.service),
    formatRow("Quantity", payload.quantity),
    formatRow("Preferred Date", payload.preferredDate),
    formatRow("Location", payload.location),
    formatRow("Preferred Contact", payload.contactMethod),
  ].join("");

  const html = buildEmailHtml("New Quote Request", rows, payload.description);

  if (!resend) {
    console.info("[Quote Request - Resend not configured]", payload);
    return { ok: true as const, mocked: true };
  }

  const { error } = await resend.emails.send({
    from: getFromEmail(),
    to: [getToEmail()],
    replyTo: payload.email,
    subject: `[Quote] ${payload.service} — ${payload.fullName}`,
    html,
  });

  if (error) {
    console.error("[Resend Quote Error]", error);
    return { ok: false as const, error: error.message };
  }

  return { ok: true as const, mocked: false };
}

export function isEmailConfigured() {
  return Boolean(process.env.RESEND_API_KEY);
}
