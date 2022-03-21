import { MailerService } from './mailer.service'

import nodemailer, { Transporter } from 'nodemailer'
import { MailerOptions } from '../services/mailer.service'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

export class MailTrapMailerService implements MailerService {
  transporter: Transporter<SMTPTransport.SentMessageInfo>

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_EMAIL_SMTP_HOST,
      port: Number(process.env.EMAIL_SMTP_PORT) || 0,
      auth: {
        user: process.env.EMAIL_SMTP_USERNAME,
        pass: process.env.EMAIL_SMTP_PASSWORD,
      },
    })
  }
  send({ to, cc, bcc, subject, body }: MailerOptions) {
    const from = process.env.EMAIL_SMTP_USERNAME
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
