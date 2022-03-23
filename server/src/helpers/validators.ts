const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

export function isEmailValid(email: string): boolean {
  const emailRegexp = new RegExp(EMAIL_REGEX)
  return emailRegexp.test(email)
}

export function toSafeArray(arr: unknown[]) {
  if (!Array.isArray(arr)) {
    return []
  }
  return arr
}
