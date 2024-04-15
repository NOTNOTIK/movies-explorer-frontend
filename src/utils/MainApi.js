class MainApi {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }
  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }

    throw new Error("ошибка!");
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  async _request(url, options) {
    const res = await fetch(url, options);
    return this._checkResponse(res);
  }

  checkToken(token) {
    return this._request(`${this.url}/users/me`, {
      headers: { ...this.headers, Authorization: `Bearer ${token}` },
    });
  }

  registration({ name, email, password }) {
    return this._request(`${this.url}/signup`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    });
  }

  authorize(email, password) {
    return fetch(`${this.url}/signin`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ email, password }),
    }).then(this._checkRes);
  }

  getUserMovies() {
    return fetch(`${this.url}/movies`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-type": "application/json",
      },
    }).then(this._checkRes);
  }

  editUserInfo(data) {
    return fetch(`${this.url}/users/me`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-type": "application/json",
      },
    }).then(this._checkRes);
  }
  getUserInfo() {
    return fetch(`${this.url}/users/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-type": "application/json",
      },
    }).then(this._checkRes);
  }

  saveMovie(movie) {
    return fetch(`${this.url}/movies`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(movie),
    }).then(this._checkRes);
  }

  deleteMovie(movieId) {
    return fetch(`${this.url}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-type": "application/json",
      },
    }).then(this._checkRes);
  }
}
export const apiMain = new MainApi({
  url: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});
