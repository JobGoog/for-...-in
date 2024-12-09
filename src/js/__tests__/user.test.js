import { loadUser, saveUser } from '../user';
import { httpGet } from '../http';

jest.mock('../http'); // Мокируем http модуль

describe('User module', () => {
  test('loadUser should call httpGet with correct URL', () => {
    httpGet.mockImplementation(() => JSON.stringify({ id: 1, name: 'John' }));

    const user = loadUser(1);
    expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
    expect(user).toEqual({ id: 1, name: 'John' });
  });

  test('saveUser should throw an error', () => {
    expect(() => saveUser({ name: 'John' })).toThrow('Unimplemented');
  });
});
