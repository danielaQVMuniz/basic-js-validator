import { isEmail, emailRegex } from '../isEmail'
import { isUrl, urlRegex } from '../isUrl'
import { ISchema } from '../validateSchema'
import {
  MOCK_EMAIL,
  MOCK_NUMBER,
  MOCK_STRING,
  MOCK_TRUE_BOOLEAN,
  MOCK_URL,
} from './mockValues'

export const MOCK_VALID_SIMPLE_JSON = {
  email: MOCK_EMAIL,
  isValid: MOCK_TRUE_BOOLEAN,
  name: MOCK_STRING,
  number: MOCK_NUMBER,
  url: MOCK_URL,
}

export const MOCK_INVALID_SIMPLE_JSON = {
  email: MOCK_STRING,
  isValid: MOCK_EMAIL,
  name: MOCK_NUMBER,
  number: MOCK_URL,
  url: MOCK_STRING,
}

export const MOCK_SIMPLE_VALIDATION_SCHEMA: ISchema = {
  email: {
    type: 'email',
    errorMessage: 'Email does not match',
    isRequired: true,
  },
  isValid: {
    type: 'boolean',
    errorMessage: 'IsValid does not match',
    isRequired: true,
  },
  name: {
    type: 'string',
    errorMessage: 'Name does not match',
    isRequired: true,
  },
  number: {
    type: 'number',
    errorMessage: 'Number does not match',
    isRequired: true,
  },
  url: {
    type: 'url',
    errorMessage: 'Url does not match',
    isRequired: true,
  },
}

export const MOCK_CUSTOM_VALIDATION_SCHEMA: ISchema = {
  email: {
    customCallback: (email: string) => {
      if (isEmail(email)) return true
      return false
    },
    errorMessage: 'Email does not match',
  },
  url: {
    customCallback: (url: string) => {
      if (isUrl(url)) return true
      return false
    },
    errorMessage: 'Url does not match',
  },
}

export const MOCK_REGEX_VALIDATION_SCHEMA: ISchema = {
  email: {
    errorMessage: 'Email does not match',
    regex: emailRegex,
  },
  url: {
    errorMessage: 'Url does not match',
    regex: urlRegex,
  },
}
