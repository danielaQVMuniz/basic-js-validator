export interface IValidate<TData> {
  condition: (x: TData) => boolean
  errorMessage?: string
  name: string
  required?: boolean
  value: TData
}

/**
 * Validate values and returns error message if any.
 *
 * @param condition
 * @param errorMessage
 * @param name
 * @param required
 * @param value
 */

export const validate = ({
  condition,
  errorMessage,
  name,
  required,
  value,
}: IValidate<any>): string | null => {
  if (required && !value) return errorMessage || name

  if (condition(value)) return null

  return errorMessage || name
}
