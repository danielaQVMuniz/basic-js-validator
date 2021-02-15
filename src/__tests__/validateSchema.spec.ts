import {
  MOCK_CUSTOM_VALIDATION_SCHEMA,
  MOCK_INVALID_SIMPLE_JSON,
  MOCK_REGEX_VALIDATION_SCHEMA,
  MOCK_SIMPLE_VALIDATION_SCHEMA,
  MOCK_VALID_SIMPLE_JSON,
} from '../__mocks__/mockSchema'
import { validateSchema } from '../validateSchema'

describe('src/validateSchema', () => {
  test('Should validate a simple schema', () => {
    const stringifyJson = JSON.stringify(MOCK_VALID_SIMPLE_JSON)
    const result = validateSchema({
      jsonValue: stringifyJson,
      schema: MOCK_SIMPLE_VALIDATION_SCHEMA,
    })

    expect(result).toStrictEqual({})
  })

  test('Should return error of invalid schema', () => {
    const stringifyJson = JSON.stringify(MOCK_INVALID_SIMPLE_JSON)
    const result = validateSchema({
      jsonValue: stringifyJson,
      schema: MOCK_SIMPLE_VALIDATION_SCHEMA,
    })

    expect(result).toStrictEqual({
      email: MOCK_SIMPLE_VALIDATION_SCHEMA.email.errorMessage,
      isValid: MOCK_SIMPLE_VALIDATION_SCHEMA.isValid.errorMessage,
      name: MOCK_SIMPLE_VALIDATION_SCHEMA.name.errorMessage,
      number: MOCK_SIMPLE_VALIDATION_SCHEMA.number.errorMessage,
      url: MOCK_SIMPLE_VALIDATION_SCHEMA.url.errorMessage,
    })
  })

  test('Should return errors if required values were not provided', () => {
    const stringifyJson = JSON.stringify({})
    const result = validateSchema({
      jsonValue: stringifyJson,
      schema: MOCK_SIMPLE_VALIDATION_SCHEMA,
    })

    expect(result).toStrictEqual({
      email: MOCK_SIMPLE_VALIDATION_SCHEMA.email.errorMessage,
      isValid: MOCK_SIMPLE_VALIDATION_SCHEMA.isValid.errorMessage,
      name: MOCK_SIMPLE_VALIDATION_SCHEMA.name.errorMessage,
      number: MOCK_SIMPLE_VALIDATION_SCHEMA.number.errorMessage,
      url: MOCK_SIMPLE_VALIDATION_SCHEMA.url.errorMessage,
    })
  })

  test('Should return valid result based on a callback', () => {
    const stringifyJson = JSON.stringify(MOCK_VALID_SIMPLE_JSON)
    const result = validateSchema({
      jsonValue: stringifyJson,
      schema: MOCK_CUSTOM_VALIDATION_SCHEMA,
    })

    expect(result).toStrictEqual({})
  })

  test('Should return invalid result based on a callback', () => {
    const stringifyJson = JSON.stringify(MOCK_INVALID_SIMPLE_JSON)
    const result = validateSchema({
      jsonValue: stringifyJson,
      schema: MOCK_CUSTOM_VALIDATION_SCHEMA,
    })

    expect(result).toStrictEqual({
      email: MOCK_CUSTOM_VALIDATION_SCHEMA.email.errorMessage,
      url: MOCK_CUSTOM_VALIDATION_SCHEMA.url.errorMessage,
    })
  })

  test('Should return valid result based on a regex', () => {
    const stringifyJson = JSON.stringify(MOCK_VALID_SIMPLE_JSON)
    const result = validateSchema({
      jsonValue: stringifyJson,
      schema: MOCK_REGEX_VALIDATION_SCHEMA,
    })

    expect(result).toStrictEqual({})
  })

  test('Should return invalid result based on a regex', () => {
    const stringifyJson = JSON.stringify(MOCK_INVALID_SIMPLE_JSON)
    const result = validateSchema({
      jsonValue: stringifyJson,
      schema: MOCK_REGEX_VALIDATION_SCHEMA,
    })

    expect(result).toStrictEqual({
      email: MOCK_REGEX_VALIDATION_SCHEMA.email.errorMessage,
      url: MOCK_REGEX_VALIDATION_SCHEMA.url.errorMessage,
    })
  })
})
