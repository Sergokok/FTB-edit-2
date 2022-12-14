class MoviesApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}: ${res.statusText}`);
  }
  getMoviesAll() {
    return fetch(`${this.baseUrl}`, {
      method: 'GET',
      headers: this.headers,
    })
      .then(this._checkResponse);
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
})
