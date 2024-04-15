import React from "react";
import "./Main.css";
import Promo from "./blocks/Promo/Promo";
import Techs from "./blocks/Techs/Techs";
import AboutMe from "./blocks/AboutMe/AboutMe";
import Portfolio from "./blocks/Portfolio/Portfolio";
import NavTab from "./blocks/NavTab/NavTab";

import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
export default function Main() {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Лого" />
        </Link>
        <nav className="header__nav-main">
          <Link to="/signup">
            <a className="header__link">Регистрация</a>
          </Link>
          <Link to="/signin">
            <button className="header__button" type="button">
              Войти
            </button>
          </Link>
        </nav>
      </header>
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
