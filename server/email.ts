import nodemailer from "nodemailer";

export function createTransporter() {
  const GMAIL_USER = process.env.GMAIL_USER;
  const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    throw new Error("Gmail credentials not configured");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  });
}

export interface ContactEmailData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactEmailData): Promise<boolean> {
  try {
    const GMAIL_USER = process.env.GMAIL_USER;
    const transporter = createTransporter();

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <div style="background: linear-gradient(135deg, #1a3a52, #d97706); padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">ANVM Power Infra Pvt. Ltd.</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 5px 0 0 0;">New Contact Form Submission</p>
        </div>
        
        <div style="padding: 24px; background: #f9f9f9;">
          <h2 style="color: #1a3a52; margin-top: 0;">Contact Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555; width: 140px;">Full Name</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Email Address</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;"><a href="mailto:${data.email}" style="color: #d97706;">${data.email}</a></td>
            </tr>
            ${data.phone ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Phone Number</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${data.phone}</td>
            </tr>` : ""}
            ${data.company ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Company</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${data.company}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Subject</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${data.subject}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #1a3a52; margin-bottom: 10px;">Message</h3>
            <div style="background: white; padding: 16px; border-radius: 6px; border-left: 4px solid #d97706; color: #333; line-height: 1.6;">
              ${data.message.replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>
        
        <div style="padding: 16px; text-align: center; background: #1a3a52; border-radius: 0 0 8px 8px;">
          <p style="color: rgba(255,255,255,0.7); margin: 0; font-size: 13px;">
            This email was sent from the contact form at <strong style="color: white;">anvmpowerinfra.com</strong>
          </p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"ANVM Power Infra Website" <${GMAIL_USER}>`,
      to: GMAIL_USER,
      replyTo: data.email,
      subject: `[ANVM Website] New Inquiry: ${data.subject} - from ${data.name}`,
      html: htmlBody,
      text: `
New Contact Form Submission - ANVM Power Infra Pvt. Ltd.

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ""}
${data.company ? `Company: ${data.company}` : ""}
Subject: ${data.subject}

Message:
${data.message}

---
Sent from anvmpowerinfra.com contact form
      `.trim(),
    });

    return true;
  } catch (error) {
    console.error("[Email] Failed to send contact email:", error);
    return false;
  }
}
