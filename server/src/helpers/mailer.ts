import nodemailer from 'nodemailer'
import { MailerOptions } from '../services/mailer.service'


const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SMTP_HOST,
  port: process.env.EMAIL_SMTP_PORT,
  auth: {
    user: process.env.EMAIL_SMTP_USERNAME,
    pass: process.env.EMAIL_SMTP_PASSWORD,
  },
})

const send = ({ to, cc, bcc, subject, body }: MailerOptions) => {
  const from = process.env.EMAIL_SMTP_USERNAME
  // send mail with defined transport object
  // visit https://nodemailer.com/ for more options
  return transporter.sendMail({
    from,
    to,
    bcc,
    cc,
    subject,
    html: body,
  })
}

export default { send }
