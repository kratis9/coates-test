import { MailerOptions, MailerService } from './mailer.service'

export class SendGridMailerService implements MailerService {
  send(mailerOptions: MailerOptions) {
    console.log(mailerOptions)
  }
}
