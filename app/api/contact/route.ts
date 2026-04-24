import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { nom, email, sujet, message } = await req.json();

  if (!nom || !email || !message) {
    return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Contact ABC <onboarding@resend.dev>",
    to: "hervefabrice.tra@gmail.com",
    replyTo: email,
    subject: sujet ? `[ABC Contact] ${sujet} — ${nom}` : `[ABC Contact] Message de ${nom}`,
    html: `
      <p><strong>Nom :</strong> ${nom}</p>
      <p><strong>Email :</strong> ${email}</p>
      ${sujet ? `<p><strong>Sujet :</strong> ${sujet}</p>` : ""}
      <p><strong>Message :</strong></p>
      <p style="white-space: pre-wrap">${message}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
