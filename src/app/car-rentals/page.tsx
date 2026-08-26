"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container, PageHero } from "@/components/ui/Container";

const placeholderVehicles = [
  {
    id: "1",
    name: "Vehicle Placeholder 01",
    category: "Compact",
    transmission: "Automatic",
    seats: 5,
    rentalType: "Short-term & Long-term",
    status: "Available",
  },
  {
    id: "2",
    name: "Vehicle Placeholder 02",
    category: "SUV",
    transmission: "Automatic",
    seats: 7,
    rentalType: "Short-term & Long-term",
    status: "Available",
  },
  {
    id: "3",
    name: "Vehicle Placeholder 03",
    category: "Luxury",
    transmission: "Automatic",
    seats: 5,
    rentalType: "Short-term",
    status: "Available",
  },
];

export default function CarRentalsPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleBooking(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Car Rentals"
        title="Reliable Mobility for Business and Leisure"
        description="Well-maintained vehicles for short- and long-term rental requirements. Vehicle details managed through admin CMS."
      />
      <section className="section-pad">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {placeholderVehicles.map((vehicle) => (
              <div key={vehicle.id} className="glass card-hover rounded-2xl overflow-hidden">
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-bg-muted to-bg-secondary">
                  <span className="text-4xl opacity-30">🚗</span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <h2 className="font-bold text-navy">{vehicle.name}</h2>
                    <span className="rounded-full bg-cyan/20 px-2 py-0.5 text-xs text-cyan">
                      {vehicle.status}
                    </span>
                  </div>
                  <dl className="mt-4 space-y-1 text-sm text-subtext">
                    <div className="flex justify-between">
                      <dt>Category</dt>
                      <dd className="text-text">{vehicle.category}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Transmission</dt>
                      <dd className="text-text">{vehicle.transmission}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Seats</dt>
                      <dd className="text-text">{vehicle.seats}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Rental Type</dt>
                      <dd className="text-text">{vehicle.rentalType}</dd>
                    </div>
                  </dl>
                  <Button
                    className="mt-4 w-full"
                    variant="secondary"
                    onClick={() => setSelected(vehicle.name)}
                  >
                    Request Booking
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-subtext">
            Vehicle models and pricing are added by administrators. No fabricated data displayed.
          </p>
        </Container>
      </section>

      {selected && !submitted && (
        <section className="section-pad border-t border-border bg-bg-secondary">
          <Container>
            <h2 className="mb-6 text-2xl font-bold">Booking Enquiry — {selected}</h2>
            <form onSubmit={handleBooking} className="glass mx-auto max-w-2xl space-y-4 rounded-2xl p-6">
              <input type="hidden" name="vehicle" value={selected} />
              <FormField label="Full Name" name="fullName" required />
              <FormField label="Company" name="company" />
              <FormField label="Phone" name="phone" type="tel" required />
              <FormField label="Email" name="email" type="email" required />
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Start Date" name="startDate" type="date" required />
                <FormField label="End Date" name="endDate" type="date" required />
              </div>
              <FormField label="Pickup Location" name="pickupLocation" />
              <div>
                <label className="mb-1 block text-sm text-subtext">Additional Requirements</label>
                <textarea name="requirements" rows={3} className="w-full rounded-xl border border-border bg-white px-4 py-3 shadow-sm" />
              </div>
              <div className="flex gap-3">
                <Button type="submit">Submit Booking Request</Button>
                <Button type="button" variant="ghost" onClick={() => setSelected(null)}>
                  Cancel
                </Button>
              </div>
            </form>
          </Container>
        </section>
      )}

      {submitted && (
        <section className="section-pad">
          <Container className="text-center">
            <div className="glass mx-auto max-w-md rounded-2xl p-8">
              <h3 className="text-xl font-bold text-navy">Booking Request Received</h3>
              <p className="mt-3 text-subtext">
                A MAP Edition Group representative will contact you to confirm availability.
              </p>
              <Button className="mt-6" onClick={() => { setSubmitted(false); setSelected(null); }}>
                Close
              </Button>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}

function FormField({
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
      <label className="mb-1 block text-sm text-subtext">
        {label}
        {required && " *"}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 shadow-sm text-text"
      />
    </div>
  );
}
