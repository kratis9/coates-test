import { Transporter } from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

export interface MailerOptions {
  to: string[]
  cc?: string[]
  bcc?: string[]
  subject: string
  body: string
}
export interface MailerService {
  transporter: Transporter<SMTPTransport.SentMessageInfo>
  send(mailerOptions: MailerOptions)
}

export class MailerFactory {
  create<T>(type: new () => T): T {
    return new type()
  }
}
