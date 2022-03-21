import { MailerOptions } from '../types'

const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

export interface ErrorProps {
  to?: Record<string, string> | string
  cc?: Record<string, string> | string
  bcc?: Record<string, string> | string
  subject?: string
  body?: string
  provider?: string
}
export function toArray(email: string) {
  return email ? email.split(',').map((val) => val.trim()) : []
}

function isEmailValid(email: string): boolean {
  const emailRegexp = new RegExp(EMAIL_REGEX)
  return emailRegexp.test(email)
}

function validateEmails(
  field: keyof ErrorProps,
  emails = '',
  errors: ErrorProps,
  isOptional: boolean = true
) {
  if (!isOptional || !!emails) {
    if (typeof emails === 'string' && !!emails) {
      toArray(emails).forEach((email: string) => {
        if (!isEmailValid(email)) {
          errors = { ...errors, ...{ [field]: 'Invalid Email' } }
        }
      })
    } else {
      errors = { ...errors, ...{ [field]: 'Required' } }
    }
  }
  return errors
}

export const validate = (values: MailerOptions) => {
  let errors = {} as ErrorProps
  errors = validateEmails('to', values.to, errors, false)
  errors = validateEmails('cc', values.cc, errors, true)
  errors = validateEmails('bcc', values.bcc, errors, true)

  if (!values.provider || values.provider === 'Please select the provider') {
    errors.provider = 'Required'
  }

  return errors
}
