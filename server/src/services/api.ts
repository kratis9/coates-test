import { MailerFactory, MailerOptions } from './mailer.service'
import { SendGridMailerService } from './send-grid.service'
import { MailChimpMailerService } from './mail-chimps.service'
import { MailTrapMailerService } from './mail-trap.service'

export enum Providers {
  SEND_GRID,
  MAIL_CHIMPS,
  MAIL_TRAP,
}

const ProvidersMailer = {
  [Providers.SEND_GRID]: SendGridMailerService,
  [Providers.MAIL_CHIMPS]: MailChimpMailerService,
  [Providers.MAIL_TRAP]: MailTrapMailerService,
}

export async function sendEmail(provider: Providers, options: MailerOptions) {
  const mailerFactory = new MailerFactory()

  const mailer = mailerFactory.create(ProvidersMailer[provider])
  mailer.send(options)
}
