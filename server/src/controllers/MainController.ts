import { Request, Response } from 'express'
import { checkSchema, validationResult } from 'express-validator'
import mailSchema from '../schemas/mail.schema'
import { Providers, sendEmail } from '../services/api'

export const sendMail = [
  checkSchema(mailSchema),
  async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }

    try {
      await sendEmail(Providers.SEND_GRID, { ...req.body })
    } catch (error) {
      return res.status(500).json({ errors: [error.message] })
    }

    res.send('message sent')
  },
]

export default { sendMail: sendMail }
