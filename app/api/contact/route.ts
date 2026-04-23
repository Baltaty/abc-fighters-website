import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { nom, email, sujet, message } = await req.json();

  if (!nom || !email || !message) {
    return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
  }

  // Pour l'instant, log côté serveur. À remplacer par nodemailer/resend/sendgrid selon besoin.
  console.log("Contact form submission:", { nom, email, sujet, message });

  return NextResponse.json({ ok: true });
}
