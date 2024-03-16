import React from "react";
import logo from "../../images/logo.svg";

import "./Main.css";
import AboutMe from "./blocks/AboutMe/AboutMe";
import NavTab from "./blocks/NavTab/NavTab";
import Promo from "./blocks/promo/promo";
import Portfolio from "./blocks/Portfolio/Portfolio";
import Techs from "./blocks/Techs/Techs";
export default function Main() {
  return (
    <div className="App">
      <header className="header">
        <img className="header__logo" src={logo} />
        <nav className="header__nav-main">
          <a className="header__link">Регистрация</a>
          <button className="header__button">Войти</button>
        </nav>
      </header>
      <Promo />
      <NavTab />
      <Techs />
      <AboutMe />
      <Portfolio />
      <footer className="Footer">
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
    </div>
  );
}
