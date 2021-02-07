import { isString } from '../isString'
import {
  MOCK_EMPTY_OBJECT,
  MOCK_FALSE_BOOLEAN,
  MOCK_FUNCTION,
  MOCK_NULL,
  MOCK_NUMBER,
  MOCK_STRING,
  MOCK_TRUE_BOOLEAN,
  MOCK_UNDEFINED,
} from '../mocks/mockValues'

describe('src/isString', () => {
  test('Should return true when value is type string', () => {
    expect(isString(MOCK_STRING)).toBe(true)
  })

  test('Should return false when value is not a string', () => {
    expect(isString(MOCK_EMPTY_OBJECT)).toBe(false)
    expect(isString(MOCK_FALSE_BOOLEAN)).toBe(false)
    expect(isString(MOCK_FUNCTION)).toBe(false)
    expect(isString(MOCK_NULL)).toBe(false)
    expect(isString(MOCK_NUMBER)).toBe(false)
    expect(isString(MOCK_TRUE_BOOLEAN)).toBe(false)
    expect(isString(MOCK_UNDEFINED)).toBe(false)
  })
})
