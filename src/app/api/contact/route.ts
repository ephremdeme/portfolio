import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  company: z.string().optional(),
  project: z.string(),
  budget: z.string().optional(),
  message: z.string(),
});

export async function POST(req: Request) {
  const json = await req.json();
  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.warn("RESEND_API_KEY not configured; dropping message", parsed.data);
    return NextResponse.json({ ok: true, queued: false });
  }

  const resend = new Resend(resendApiKey);
  try {
    await resend.emails.send({
      from: "Ephrem Portfolio <contact@ephrem.dev>",
      to: "contact@ephrem.dev",
      subject: `Portfolio inquiry from ${parsed.data.name}`,
      replyTo: parsed.data.email,
      text: `Company: ${parsed.data.company ?? "N/A"}\nBudget: ${parsed.data.budget ?? "N/A"}\nProject: ${parsed.data.project}\n\n${parsed.data.message}`,
    });
  } catch (error) {
    console.error("Failed to send email via Resend:", error);
    return NextResponse.json(
      { error: "Failed to deliver message. Please try again later." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
