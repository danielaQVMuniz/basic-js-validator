import { isString } from '../isString'
import { validate } from '../validate'
import {
  MOCK_ERROR_MESSAGE,
  MOCK_NUMBER,
  MOCK_STRING,
} from '../__mocks__/mockValues'

describe('src/validate', () => {
  test('Should return error message when empty value is required', () => {
    expect(
      validate({
        value: '',
        name: MOCK_STRING,
        condition: isString,
        errorMessage: MOCK_ERROR_MESSAGE,
        required: true,
      })
    ).toBe(MOCK_ERROR_MESSAGE)
  })

  test("Should return name if: doesn't match, is required, no error message", () => {
    expect(
      validate({
        value: '',
        name: MOCK_STRING,
        condition: isString,
        required: true,
      })
    ).toBe(MOCK_STRING)
  })

  test("Should return name if: doesn't match, no error message", () => {
    expect(
      validate({
        value: MOCK_NUMBER,
        name: MOCK_STRING,
        condition: isString,
        required: false,
      })
    ).toBe(MOCK_STRING)
  })

  test('Should return null if condition is met', () => {
    expect(
      validate({
        value: MOCK_STRING,
        name: MOCK_STRING,
        condition: isString,
        errorMessage: MOCK_ERROR_MESSAGE,
        required: true,
      })
    ).toBeNull()
  })
})
