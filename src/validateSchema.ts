import { isBoolean } from './isBoolean'
import { isEmail } from './isEmail'
import { isNumber } from './isNumber'
import { isString } from './isString'
import { isUrl } from './isUrl'
import { validateRegex } from './validateRegex'

type SchemaValidationType = 'string' | 'number' | 'boolean' | 'url' | 'email'

export interface ISimpleSchema {
  type?: SchemaValidationType
  isRequired?: boolean
  errorMessage: string
}

export interface ICustomSchema {
  customCallback?: (value: any) => boolean
  errorMessage: string
}

export interface IRegexSchema {
  regex?: RegExp
  errorMessage: string
}

export interface ISchema {
  [x: string]: ISimpleSchema & ICustomSchema & IRegexSchema
}

interface IValidateSchema {
  schema: ISchema
  jsonValue: any
}

export interface IErrorObj {
  [x: string]: string
}

/**
 * Validate JSON against schema and returns object with invalid error messages.
 *
 * @param schema
 * @param jsonValue
 */

export const validateSchema = ({
  schema,
  jsonValue,
}: IValidateSchema): IErrorObj => {
  const errorObj: IErrorObj = {}
  const parsedJson = JSON.parse(jsonValue)

  Object.keys(schema).forEach((key: string) => {
    const jsonKey = parsedJson[key]
    const schemaObj = schema[key]
    let isValid = false

    // Key is required and doesn't exists
    if (!jsonKey && schemaObj.isRequired) {
      errorObj[key] = schemaObj.errorMessage

      return
    }

    // Custom validation
    if (schemaObj.customCallback) {
      isValid = schemaObj.customCallback(parsedJson[key])
    } else if (schemaObj.regex) {
      // Regex validation
      isValid = !validateRegex({
        errorMessage: schemaObj.errorMessage,
        name: key,
        regex: schemaObj.regex,
        value: parsedJson[key],
      })
    } else {
      if (schemaObj.type === 'string') {
        isValid = isString(parsedJson[key])
      } else if (schemaObj.type === 'number') {
        isValid = isNumber(parsedJson[key])
      } else if (schemaObj.type === 'url') {
        isValid = isUrl(parsedJson[key])
      } else if (schemaObj.type === 'boolean') {
        isValid = isBoolean(parsedJson[key])
      } else if (schemaObj.type === 'email') {
        isValid = isEmail(parsedJson[key])
      }
    }

    if (!isValid) {
      errorObj[key] = schemaObj.errorMessage
    }
  })

  return errorObj
}
