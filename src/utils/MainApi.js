const baseUrl = 'https://api.movies-explorer.nknrw.nomoredomains.icu';
const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
}

// const baseUrl = 'http://localhost:4000';

// следать чтобы выводило ошибки
const _checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}: ${res.statusText}`);
}

// регистрация пользователя на сервере
export const signup = ({ name, email, password }) => {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: headers,
    body: JSON.stringify({ name, email, password })
  })
    .then((res) => _checkResponse(res));
}

// авторизация пользователя на сервере
export const signin = ({ email, password }) => {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: headers,
    body: JSON.stringify({ email, password })
  })
    .then((res) => _checkResponse(res));
}

// получение информации о пользователе с сервера по токену
export const getUserInfo = (jwt) => {
  return fetch(`${baseUrl}/users/me`, {
    credentials: 'include',
    headers: {
      ...headers,
      'Authorization': `Bearer ${jwt}`,
    },
  })
    .then((res) => _checkResponse(res));
}

// изменение информации пользователя на сервере по токену
export const setUserInfo = (data, jwt) => {
  return fetch(`${baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      ...headers,
      'Authorization': `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    })
  })
    .then((res) => _checkResponse(res));
}

export const getMovies = (jwt) => {
  return fetch(`${baseUrl}/movies`, {
    credentials: 'include',
    headers: {
      ...headers,
      'Authorization': `Bearer ${jwt}`,
    },
  })
    .then((res) => _checkResponse(res));
}

export const addMovie = (movie, jwt) => {
  return fetch(`${baseUrl}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      ...headers,
      'Authorization': `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      movieId: movie.id,
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      trailerLink: movie.trailerLink,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
    })
  })
    .then((res) => _checkResponse(res));
}

export const deleteMovie = (movieId, jwt) => {
  return fetch(`${baseUrl}/movies/${movieId}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      ...headers,
      'Authorization': `Bearer ${jwt}`,
    },
  })
      .then((res) => _checkResponse(res));
}
