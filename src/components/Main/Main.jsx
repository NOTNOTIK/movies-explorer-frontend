import React from "react";
import "./Main.css";
import Promo from "./blocks/Promo/Promo";
import Techs from "./blocks/Techs/Techs";
import AboutMe from "./blocks/AboutMe/AboutMe";
import Portfolio from "./blocks/Portfolio/Portfolio";
import NavTab from "./blocks/NavTab/NavTab";

export default function Main() {
  return (
    <>
      <main className="main">
        <Promo />
        <NavTab />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <footer className="footer">
        <h2 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className="footer__container">
          <p className="footer__year">&copy;2024</p>
          <nav className="footer__nav">
            <a
              className="footer__link"
              href="https://practicum.yandex.ru"
              target="_blank"
            >
              Яндекс.Практикум
            </a>
            <a
              className="footer__link"
              href="https://github.com/Yandex-Practicum"
              target="_blank"
            >
              GitHub
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
/*      <header className="header-movies">
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
      </header> */
