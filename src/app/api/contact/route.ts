import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.fullName || !body.email || !body.subject || !body.message) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    const result = await sendContactEmail({
      fullName: String(body.fullName),
      email: String(body.email),
      phone: body.phone ? String(body.phone) : undefined,
      subject: String(body.subject),
      message: String(body.message),
    });

    if (!result.ok) {
      console.error("[Contact API]", result.error);
      return NextResponse.json(
        { error: "Unable to send message. Please try again or contact us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
