import { MailerService } from './mailer.service'

import nodemailer from 'nodemailer'
import { MailerOptions } from '../services/mailer.service'

export class MailTrapMailerService implements MailerService {
  transporter
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SMTP_HOST,
      port: process.env.EMAIL_SMTP_PORT,
      auth: {
        user: process.env.EMAIL_SMTP_USERNAME,
        pass: process.env.EMAIL_SMTP_PASSWORD,
      },
    })
  }

  send({ to, cc, bcc, subject, body }: MailerOptions) {
    const from = process.env.EMAIL_SMTP_USERNAME
    console.log(process.env.EMAIL_SMTP_HOST)

    console.log({
      from,
      to,
      bcc,
      cc,
      subject,
      html: body,
    })

    return this.transporter.sendMail({
      from,
      to,
      bcc,
      cc,
      subject,
      html: body,
    })
  }
}
