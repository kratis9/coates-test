import { Schema } from 'express-validator'
import { toSafeArray, isEmailValid } from '../helpers/validators'

export default {
  provider: {
    isEmpty: false,
    errorMessage: 'errors.provider.not_found',
  },
  to: {
    isArray: true,
    custom: {
      options: (toArray) => {
        return toSafeArray(toArray).every((email) => isEmailValid(email))
      },
    },
    errorMessage: 'errors.to.invalid',
  },
  cc: {
    isArray: true,
    custom: {
      options: (toArray) => {
        return toSafeArray(toArray).every((email) => isEmailValid(email))
      },
    },
    errorMessage: 'errors.cc.invalid',
  },
  bcc: {
    isArray: true,
    optional: { options: { nullable: true } },
    custom: {
      options: (toArray) => {
        return toSafeArray(toArray).every((email) => isEmailValid(email))
      },
      errorMessage: 'errors.bcc.invalid',
    },
  },
  subject: {
    isEmpty: false,
    errorMessage: 'errors.subject.not_found',
  },
  body: {
    isEmpty: false,
    errorMessage: 'errors.body.not_found',
  },
} as Schema
