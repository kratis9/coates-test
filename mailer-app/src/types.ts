export interface MailerOptions {
  to: string
  cc?: string
  bcc?: string
  subject?: string
  body?: string
  provider: string
}
