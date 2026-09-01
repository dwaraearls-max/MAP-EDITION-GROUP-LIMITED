import { NextResponse } from "next/server";
import { sendQuoteEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.fullName || !body.email || !body.phone || !body.service || !body.description) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    const result = await sendQuoteEmail({
      fullName: String(body.fullName),
      email: String(body.email),
      phone: String(body.phone),
      service: String(body.service),
      description: String(body.description),
      company: body.company ? String(body.company) : undefined,
      quantity: body.quantity ? String(body.quantity) : undefined,
      preferredDate: body.preferredDate ? String(body.preferredDate) : undefined,
      location: body.location ? String(body.location) : undefined,
      contactMethod: body.contactMethod ? String(body.contactMethod) : undefined,
    });

    if (!result.ok) {
      return NextResponse.json({ error: "Unable to send quote request" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
