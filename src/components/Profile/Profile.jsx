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
    <>
      <header className="header-profile">
        <Link to="/">
          <img className="header-profile__logo" src={logo} alt="Лого" />
        </Link>
        <div
          className={
            isToggled
              ? "header-profile__burger active"
              : "header-profile__burger"
          }
          onClick={toggleClass}
        >
          <span></span>
        </div>
        <nav
          className={
            isToggled ? "header-profile__nav active" : "header-profile__nav"
          }
        >
          <ul className="header-profile__list">
            <li>
              <NavLink
                to="/"
                id="first"
                className={({ isActive }) =>
                  `header-profile__link ${
                    isActive ? "header-profile_active" : ""
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
                  `header-profile__link ${
                    isActive ? "header-profile_active" : ""
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
                  `header-profile__link ${
                    isActive ? "header-profile_active" : ""
                  }`
                }
              >
                Сохранённые фильмы
              </NavLink>
            </li>

            <li>
              <NavLink to="/profile">
                <div className="header-profile__account">
                  <p className="header-profile__account-name">Аккаунт</p>
                  <img
                    className="header-profile__account-image"
                    src={account}
                    alt="#"
                  />
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="profile">
        <p className="profile__welcome">Привет, Егор!</p>
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
      </main>
    </>
  );
}
