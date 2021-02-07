import {
  MOCK_ERROR_MESSAGE,
  MOCK_REGEX,
  MOCK_STRING,
} from '../mocks/mockValues'
import { validateRegex } from '../validateRegex'

describe('src/validateRegex', () => {
  test('Should return error message when regex is not met', () => {
    expect(
      validateRegex({
        errorMessage: MOCK_ERROR_MESSAGE,
        name: MOCK_STRING,
        regex: MOCK_REGEX,
        value: '',
      })
    ).toBe(MOCK_ERROR_MESSAGE)
  })

  test("Should return name if: regex doesn't match and no error message", () => {
    expect(
      validateRegex({
        name: MOCK_STRING,
        regex: MOCK_REGEX,
        value: '',
      })
    ).toBe(MOCK_STRING)
  })

  test('Should return null if regex match', () => {
    expect(
      validateRegex({
        value: '1',
        name: MOCK_STRING,
        regex: MOCK_REGEX,
      })
    ).toBeNull()
  })
})
