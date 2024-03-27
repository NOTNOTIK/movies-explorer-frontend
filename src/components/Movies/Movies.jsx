import "./Movies.css";
import logo from "../../images/logo.svg";
import account from "../../images/account.png";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import FilterCheckbox from "./blocks/FilterCheckbox/FilterCheckbox";
export default function Movies() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleClass = () => {
    setIsToggled(!isToggled);
  };
  return (
    <section className="App">
      <header className="header-movies">
        <NavLink to="/">
          <img className="header__logo" src={logo} alt={logo} />
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
      <main className="movies-main">
        <form className="SearchForm">
          <input
            className="SearchForm__input"
            type="text"
            placeholder="Фильм"
          ></input>
          <button className="SearchForm__button" type="button">
            Найти
          </button>
        </form>
        <FilterCheckbox />
        <MoviesCardList />
      </main>
      <footer className="footer">
        <h2 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className="footer__container">
          <p className="footer__year">&copy;2024</p>
          <nav className="footer__nav">
            <a className="footer__link" href="https://practicum.yandex.ru">
              Яндекс.Практикум
            </a>
            <a
              className="footer__link"
              href="https://github.com/Yandex-Practicum"
            >
              GitHub
            </a>
          </nav>
        </div>
      </footer>
    </section>
  );
}
