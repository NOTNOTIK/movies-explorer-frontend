import "./Profile.css";
import logo from "../../images/logo.svg";
import account from "../../images/account.png";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
export default function Movies() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleClass = () => {
    setIsToggled(!isToggled);
  };
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    //handleLogin(formValue.email, formValue.password);
  };

  return (
    <div className="App">
      <header className="header-movies">
        <NavLink to="/">
          <img className="header__logo" src={logo} />
        </NavLink>
        <div
          className={isToggled ? "header__burger active" : "header__burger"}
          onClick={toggleClass}
        >
          <span></span>
        </div>
        <nav className={isToggled ? "header__nav active" : "header__nav"}>
          <ul className="header__list">
            <li>
              <NavLink
                to="/"
                id="first"
                className={({ isActive }) =>
                  `header-movies__link ${
                    isActive ? "header-movies_active" : ""
                  }`
                }
              >
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  `header-movies__link ${
                    isActive ? "header-movies_active" : ""
                  }`
                }
              >
                Фильмы
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/savedMovies"
                className={({ isActive }) =>
                  `header-movies__link ${
                    isActive ? "header-movies_active" : ""
                  }`
                }
              >
                Сохранённые фильмы
              </NavLink>
            </li>

            <li>
              <NavLink to="/profile">
                <div className="header__account">
                  <p className="header__account-name">Аккаунт</p>
                  <img className="header__account-image" src={account} />
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className="profile">
        <p className="profile__welcome">Привет, Егор</p>
        <form onSubmit={handleSubmit} className="profile__form">
          <div className="profile__container">
            <p className="profile__name">Имя</p>
            <input
              required
              id="name"
              name="name"
              type="name"
              placeholder="Егор"
              value={formValue.password}
              onChange={handleChange}
            />
          </div>
          <div className="profile__container">
            <p className="profile__name">E-mail</p>
            <input
              required
              id="email"
              name="email"
              type="email"
              placeholder="egormaltsev2412@gmail.com"
              value={formValue.email}
              onChange={handleChange}
            />
          </div>
        </form>
        <button type="button" className="profile__edit">
          Редактировать
        </button>
        <Link to="/" type="button" className="profile__out">
          Выйти из аккаунта
        </Link>
      </div>
    </div>
  );
}
