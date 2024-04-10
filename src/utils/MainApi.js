class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _ifCheck(res) {
    if (res.ok) {
      return res.json();
    }
    throw new Error("Ошибка!" + res.status);
  }

  registration(data) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    }).then(this._ifCheck);
  }

  login(data) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    }).then(this._ifCheck);
  }

  checkToken(jwt) {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this._ifCheck);
  }
}

export const apiMain = new MainApi({
  url: "http://localhost:3000",
});
