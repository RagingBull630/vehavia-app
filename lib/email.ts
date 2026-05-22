import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER!,
    pass: process.env.GMAIL_APP_PASSWORD!,
  },
})

export async function sendWelcomeEmail(data: {
  email: string
  fullName: string
  primaryVehicle?: string
  stripePaymentLink?: string
  calendlyLink?: string
}): Promise<void> {
  const firstName = data.fullName.split(' ')[0]
  const stripeSection = data.stripePaymentLink
    ? `<p style="margin:24px 0;"><a href="${data.stripePaymentLink}" style="background:#1B3A2D;color:#fff;padding:14px 28px;text-decoration:none;border-radius:4px;font-weight:600;">Pay $200 Deposit →</a></p>`
    : ''
  const calendlySection = data.calendlyLink
    ? `<p style="margin:16px 0;"><a href="${data.calendlyLink}" style="color:#1B3A2D;font-weight:600;">Schedule your onboarding call →</a></p>`
    : ''

  await transporter.sendMail({
    from: `"Vehavia" <${process.env.GMAIL_USER}>`,
    to: data.email,
    subject: 'Welcome to Vehavia — Your Search Begins',
    html: `
      <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
        <div style="background:#1B3A2D;padding:32px;text-align:center;">
          <h1 style="color:#B8924A;margin:0;font-size:28px;letter-spacing:2px;">VEHAVIA</h1>
        </div>
        <div style="padding:40px 32px;">
          <h2 style="color:#1B3A2D;">Welcome, ${firstName}.</h2>
          <p>Your intake is complete and your file is in our hands. We will be in touch within 24 hours to begin the search for ${data.primaryVehicle || 'your vehicle'}.</p>
          <p>To secure your spot, please sign the service agreement and submit your $200 deposit below.</p>
          ${stripeSection}
          ${calendlySection}
          <hr style="border:none;border-top:1px solid #e5e5e5;margin:32px 0;" />
          <p style="font-size:13px;color:#666;">If you have questions before your onboarding call, reply directly to this email.</p>
          <p style="font-size:13px;color:#666;">— The Vehavia Team</p>
        </div>
      </div>
    `,
  })
}

export async function sendLeadMagnetEmail(email: string, name: string): Promise<void> {
  const firstName = name.split(' ')[0]
  await transporter.sendMail({
    from: `"Vehavia" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: 'Your Free Vehicle Buying Guide',
    html: `
      <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
        <div style="background:#1B3A2D;padding:32px;text-align:center;">
          <h1 style="color:#B8924A;margin:0;font-size:28px;letter-spacing:2px;">VEHAVIA</h1>
        </div>
        <div style="padding:40px 32px;">
          <h2 style="color:#1B3A2D;">Hi ${firstName},</h2>
          <p>Thank you for your interest. Your guide is on the way.</p>
          <p style="font-size:13px;color:#666;">— The Vehavia Team</p>
        </div>
      </div>
    `,
  })
}
