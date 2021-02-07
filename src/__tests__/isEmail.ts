import { isEmail } from '../isEmail'
import {
  MOCK_EMAIL,
  MOCK_NULL,
  MOCK_STRING,
  MOCK_UNDEFINED,
} from '../__mocks__/mockValues'

describe('src/isEmail', () => {
  test('Should return true when value is an email', () => {
    expect(isEmail(MOCK_EMAIL)).toBe(true)
  })

  test('Should return false when value is not a number', () => {
    expect(isEmail(MOCK_NULL)).toBe(false)
    expect(isEmail(MOCK_UNDEFINED)).toBe(false)
    expect(isEmail(MOCK_STRING)).toBe(false)
    expect(isEmail('email@.com')).toBe(false)
    expect(isEmail('@mail.com')).toBe(false)
    expect(isEmail('@.com')).toBe(false)
    expect(isEmail('email@mail')).toBe(false)
  })
})
