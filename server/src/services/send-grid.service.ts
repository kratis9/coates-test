import nodemailer from 'nodemailer'

import { MailerOptions, MailerService } from './mailer.service'
import sgMail from '@sendgrid/mail'

export class SendGridMailerService implements MailerService {
  transporter

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SMTP_HOST,
      port: Number(process.env.EMAIL_SMTP_PORT) || 0,
      auth: {
        user: process.env.SENDGRID_KEY,
        pass: process.env.SENDGRID_API_KEY,
      },
    })
  }

  send(mailerOptions: MailerOptions) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: 'arvindscmail@gmail.com',
      from: process.env.SENDGRID_USER_NAME, // Change to your verified sender
      subject: mailerOptions.subject,
      text: mailerOptions.subject,
      html: mailerOptions.body,
    }

    //this.transporter
    sgMail
      .send(msg)
      .then((response) => {
        console.log(response[0].statusCode)
        console.log(response[0].headers)
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
