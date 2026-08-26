"use client";

import { useState } from "react";
import { quoteServiceOptions } from "@/lib/data";
import { Button } from "@/components/ui/Button";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function QuoteForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold text-navy">Thank You</h3>
        <p className="mt-3 text-subtext">
          A MAP Edition Group representative will review your request and contact you.
        </p>
        <Button className="mt-6" onClick={() => setStatus("idle")}>
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass space-y-5 rounded-2xl p-6 lg:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="fullName" required />
        <Field label="Company" name="company" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm text-subtext">
            What do you need? *
          </label>
          <select
            id="service"
            name="service"
            required
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-text shadow-sm"
          >
            <option value="">Select a service</option>
            {quoteServiceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <Field label="Quantity" name="quantity" />
        <Field label="Preferred Date" name="preferredDate" type="date" />
        <Field label="Location" name="location" />
        <Field label="Preferred Contact Method" name="contactMethod" />
      </div>
      <div>
        <label htmlFor="description" className="mb-1.5 block text-sm text-subtext">
          Project Description *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-text shadow-sm"
        />
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        {status === "submitting" ? "Submitting..." : "Submit Request"}
      </Button>
    </form>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold text-navy">Message Sent</h3>
        <p className="mt-3 text-subtext">We will get back to you as soon as possible.</p>
        <Button className="mt-6" onClick={() => setStatus("idle")}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass space-y-5 rounded-2xl p-6 lg:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="fullName" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <Field label="Subject" name="subject" required />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-subtext">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-text shadow-sm"
        />
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
      <Button type="submit" size="lg">
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm text-subtext">
        {label}
        {required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-text shadow-sm"
      />
    </div>
  );
}
