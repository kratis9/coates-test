export interface MailerOptions {
  to: string[]
  cc?: string[]
  bcc?: string[]
  subject: string
  body: string
}
export interface MailerService {
  send(mailerOptions: MailerOptions)
}

export class MailerFactory {
  create<T>(type: new () => T): T {
    return new type()
  }
}
