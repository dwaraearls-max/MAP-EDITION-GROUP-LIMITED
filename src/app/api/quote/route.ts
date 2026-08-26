import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.fullName || !body.email || !body.phone || !body.service || !body.description) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    // Integration point: connect to email service (Resend, SendGrid) or CRM
    console.info("[Quote Request]", body);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
