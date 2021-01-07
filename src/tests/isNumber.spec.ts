import { isNumber } from '../isNumber'
import {
  MOCK_EMPTY_OBJECT,
  MOCK_FALSE_BOOLEAN,
  MOCK_FUNCTION,
  MOCK_NULL,
  MOCK_NUMBER,
  MOCK_STRING,
  MOCK_TRUE_BOOLEAN,
  MOCK_UNDEFINED,
} from './mockValues'

describe('src/isNumber', () => {
  test('Should return true when value is type number', () => {
    expect(isNumber(MOCK_NUMBER)).toBe(true)
  })

  test('Should return false when value is not a number', () => {
    expect(isNumber(MOCK_EMPTY_OBJECT)).toBe(false)
    expect(isNumber(MOCK_FALSE_BOOLEAN)).toBe(false)
    expect(isNumber(MOCK_FUNCTION)).toBe(false)
    expect(isNumber(MOCK_NULL)).toBe(false)
    expect(isNumber(MOCK_STRING)).toBe(false)
    expect(isNumber(MOCK_TRUE_BOOLEAN)).toBe(false)
    expect(isNumber(MOCK_UNDEFINED)).toBe(false)
  })
})
