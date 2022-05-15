class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  static checkServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    throw new Error('Что-то пошло не так. Обратитесь к разработчику');
  }

  createUser(user) {
    return fetch(`${this.baseUrl}`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(user),
    }).then((res) => Api.checkServerResponse(res));
  }

  deleteUser(userId) {
    return fetch(`${this.baseUrl}/${userId}`, {
      method: 'DELETE',
      headers: this.headers,
    }).then((res) => Api.checkServerResponse(res));
  }
}

const api = new Api({
  baseUrl: 'https://627e5e6e271f386ceff6c423.mockapi.io/users',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
