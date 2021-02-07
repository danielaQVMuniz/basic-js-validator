import { isEmail } from '../isEmail'
import {
  MOCK_EMAIL,
  MOCK_NULL,
  MOCK_STRING,
  MOCK_UNDEFINED,
} from '../__mocks__/mockValues'

describe('src/isEmail', () => {
  test('Should return true when value is a valid email', () => {
    expect(isEmail(MOCK_EMAIL)).toBe(true)
  })

  test('Should return false when value is not a valid email', () => {
    const invalidEmails = ['xx@.com', '@xx.com', '@.com', 'xx@xx', 'x@x.x']

    expect(isEmail(MOCK_NULL)).toBe(false)
    expect(isEmail(MOCK_UNDEFINED)).toBe(false)
    expect(isEmail(MOCK_STRING)).toBe(false)

    invalidEmails.forEach((email) => expect(isEmail(email)).toBe(false))
  })
})
