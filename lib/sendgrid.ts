import type { IntakeFormData } from './types'

// TODO: configure @sendgrid/mail with real templates

export async function sendWelcomeEmail(data: IntakeFormData): Promise<void> {
  // TODO: Implement SendGrid welcome email
  // const sgMail = require('@sendgrid/mail')
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
  // await sgMail.send({
  //   to: data.email,
  //   from: 'hello@vehavia.com',
  //   templateId: process.env.SENDGRID_WELCOME_TEMPLATE_ID!,
  //   dynamicTemplateData: {
  //     first_name: data.fullName.split(' ')[0],
  //     vehicle: data.primaryVehicle,
  //   }
  // })

  console.log('[SendGrid] sendWelcomeEmail stub called for:', data.email)
}

export async function sendLeadMagnetEmail(email: string, name: string): Promise<void> {
  // TODO: Implement SendGrid lead magnet delivery
  // Send "7 Dealer Tricks" guide PDF and enroll in nurture sequence
  console.log('[SendGrid] sendLeadMagnetEmail stub called for:', email, name)
}

export async function sendInternalAlert(subject: string, body: string): Promise<void> {
  // TODO: Send internal notification email to hello@vehavia.com
  console.log('[SendGrid] sendInternalAlert stub:', subject)
}
