export interface IValidateRegex {
  errorMessage?: string
  name: string
  regex: RegExp
  value: any
}

/**
 * Validate values and returns error message if any.
 *
 * @param errorMessage
 * @param name
 * @param regex
 * @param value
 */

export const validateRegex = ({
  errorMessage,
  name,
  regex,
  value,
}: IValidateRegex): string | null => {
  if (regex.test(value)) return null

  return errorMessage || name
}
