import "./SavedMovies.css";
import logo from "../../images/logo.svg";
import account from "../../images/account.png";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import FilterCheckbox from "../Movies/blocks/FilterCheckbox/FilterCheckbox";
export default function SavedMovies() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleClass = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <header className="header-movies">
        <Link to="/">
          <img className="header-movies__logo" src={logo} alt={logo} />
        </Link>
        <div
          className={
            isToggled ? "header-movies__burger active" : "header-movies__burger"
          }
          onClick={toggleClass}
        >
          <span></span>
        </div>
        <div
          className={
            isToggled
              ? "header-movies__overlay active"
              : "header-movies__overlay"
          }
          onClick={toggleClass}
        >
          <nav
            className={
              isToggled ? "header-movies__nav active" : "header-movies__nav"
            }
          >
            <ul className="header-movies__list">
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
                  <div className="header-movies__account">
                    <p className="header-movies__account-name">Аккаунт</p>
                    <img
                      className="header-movies__account-image"
                      src={account}
                      alt="Лого"
                    />
                  </div>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main-movies">
        <form className="SearchForm">
          <input
            className="SearchForm__input"
            type="text"
            placeholder="Фильм"
          />
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
    </>
  );
}
