import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const name = (formData.get('name') as string || '').trim();
  const email = (formData.get('email') as string || '').trim();
  const phone = (formData.get('phone') as string || '').trim();
  const subject = (formData.get('subject') as string || '').trim();
  const message = (formData.get('message') as string || '').trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Tous les champs sont requis.' }, { status: 422 });
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: 'Adresse email invalide.' }, { status: 422 });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    return NextResponse.json({ error: 'SMTP credentials are not configured' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.sendMail({
      from: 'info@thenagabalm.com',
      to: 'info@thenagabalm.com',
      replyTo: `${email}`,
      subject: 'Nouveau message du site',
      html: `<b>Nom:</b> ${name}<br><b>Email:</b> ${email}<br><b>Téléphone:</b> ${phone}<br><b>Sujet:</b> ${subject}<br><b>Message:</b><br>${message}`,
    });

    return NextResponse.json({ status: 'OK' });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Erreur d\'envoi' }, { status: 500 });
  }
}
