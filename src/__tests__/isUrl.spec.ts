import { isUrl } from '../isUrl'
import {
  MOCK_URL,
  MOCK_NULL,
  MOCK_STRING,
  MOCK_UNDEFINED,
} from '../__mocks__/mockValues'

describe('src/isUrl', () => {
  test('Should return true when value is a valid url', () => {
    const validUrl = [
      '//www.google.com',
      '//abc.test.net/css/app.css',
      'http://✪df.ws/123',
      'http://userid:password@example.com:8080',
      'http://userid:password@example.com:8080/',
      'http://userid@example.com',
      'http://userid@example.com/',
      'http://userid@example.com:8080',
      'http://userid@example.com:8080/',
      'http://userid:password@example.com',
      'http://userid:password@example.com/',
      'http://142.42.1.1/',
      'http://142.42.1.1:8080/',
      'http://➡.ws/䨹',
      'http://⌘.ws',
      'http://⌘.ws/',
      'http://foo.com/blah_(wikipedia)#cite-1',
      'http://foo.com/blah_(wikipedia)_blah#cite-1',
      'http://foo.com/unicode_(✪)_in_parens',
      'http://foo.com/(something)?after=parens',
      'http://☺.damowmow.com/',
      'http://code.google.com/events/#&product=browser',
      'http://j.mp',
      'ftp://foo.bar/baz',
      'http://foo.bar/?q=Test%20URL-encoded%20stuff',
    ]
    expect(isUrl(MOCK_URL)).toBe(true)
  })

  test('Should return false when value is not a valid url', () => {
    const invalidUrls = [
      'http://',
      'http://.',
      'http://..',
      'http://../',
      'http://?',
      'http://??',
      'http://??/',
      'http://#',
      'http://##',
      'http://##/',
      'http://foo.bar?q=Spaces should be encoded',
      '//',
      '//a',
      '///a',
      '///',
      'http:///a',
      'foo.com',
      'abc://1234',
      'h://test',
      'http:// shouldFail.com',
      ':// should fail',
      'http://foo.bar/foo(bar)baz fail',
      'ftps://foo.bar/',
      'http://-error-.invalid/',
      'http://-a.b.co',
      'http://a.b-.co',
      'http://0.0.0.0',
      'http://10.1.1.0',
      'http://10.1.1.255',
      'http://224.1.1.1',
      'http://1.1.1.1.1',
      'http://123.123.123',
      'http://3628126748',
      'http://.www.foo.bar/',
      'http://www.foo.bar./',
      'http://.www.foo.bar./',
      'http://10.1.1.1',
      'http://10.1.1.254',
    ]

    expect(isUrl(MOCK_NULL)).toBe(false)
    expect(isUrl(MOCK_UNDEFINED)).toBe(false)
    expect(isUrl(MOCK_STRING)).toBe(false)

    invalidUrls.forEach((url) => expect(isUrl(url)).toBe(false))
  })
})
