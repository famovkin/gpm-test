/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable class-methods-use-this */
class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject('Что-то пошло не так. Обратитесь к разработчику');
  }

  createUser(user) {
    return fetch(`${this._baseUrl}`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(user),
    }).then((res) => this._checkServerResponse(res));
  }
}

const api = new Api({
  baseUrl: 'https://627e5e6e271f386ceff6c423.mockapi.io/users',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
