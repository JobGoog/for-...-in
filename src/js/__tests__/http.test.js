import { httpGet, httpPost } from '../http';

describe('HTTP module', () => {
  test('httpGet should throw an error with the provided URL', () => {
    expect(() => httpGet('http://example.com')).toThrow('http://example.com');
  });

  test('httpPost should throw an error with the provided URL', () => {
    expect(() => httpPost('http://example.com')).toThrow('http://example.com');
  });
});
