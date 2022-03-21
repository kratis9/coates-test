import { Transporter } from 'nodemailer'
import { SentMessageInfo } from 'nodemailer/lib/smtp-transport'
import { MailerService } from './mailer.service'

export class MailChimpMailerService implements MailerService {
  transporter: Transporter<SentMessageInfo>
  send() {
    throw new Error('Method not implemented.')
  }
}
