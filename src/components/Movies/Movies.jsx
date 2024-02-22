import "./Movies.css";
import logo from "../../images/logo.svg";
import account from "../../images/account.png";
import film1 from "../../images/film1.png";
import React from "react";
import { NavLink } from "react-router-dom";
export default function Movies() {
  return (
    <div className="App">
      <header className="header">
        <img className="header__logo" src={logo} />
        <nav className="header__nav">
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `header__link ${isActive ? "header__link_active" : ""}`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/savedMovies"
            className={({ isActive }) =>
              `header__link ${isActive ? "header__link_active" : ""}`
            }
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <div className="header__account">
          <p className="header__account-name">Аккаунт</p>
          <img className="header__account-image" src={account} />
        </div>
      </header>
      <form className="SearchForm">
        <input
          className="SearchForm__input"
          type="text"
          placeholder="Фильм"
        ></input>
        <button className="SearchForm__button">Найти</button>
      </form>
      <label className="checkbox-ios">
        <input type="checkbox" />
        <span className="checkbox-ios-switch"></span>
        <p className="checkbox-ios-switch__text">Короткометражки</p>
      </label>
      <section className="MoviesCardList">
        <div className="MoviesCard">
          <img className="MoviesCard__image" src={film1} />
          <div className="MoviesCard__info">
            <h3 className="MoviesCard__title">33 слова о дизайне</h3>
            <button className="MoviesCard__like"></button>
          </div>
          <p className="MoviesCard__time">1ч42м</p>
        </div>
        <div className="MoviesCard">
          <img className="MoviesCard__image" src={film1} />
          <div className="MoviesCard__info">
            <h3 className="MoviesCard__title">33 слова о дизайне</h3>
            <button className="MoviesCard__like"></button>
          </div>
          <p className="MoviesCard__time">1ч42м</p>
        </div>
        <div className="MoviesCard">
          <img className="MoviesCard__image" src={film1} />
          <div className="MoviesCard__info">
            <h3 className="MoviesCard__title">33 слова о дизайне</h3>
            <button className="MoviesCard__like"></button>
          </div>
          <p className="MoviesCard__time">1ч42м</p>
        </div>
        <div className="MoviesCard">
          <img className="MoviesCard__image" src={film1} />
          <div className="MoviesCard__info">
            <h3 className="MoviesCard__title">33 слова о дизайне</h3>
            <button className="MoviesCard__like"></button>
          </div>
          <p className="MoviesCard__time">1ч42м</p>
        </div>
        <div className="MoviesCard">
          <img className="MoviesCard__image" src={film1} />
          <div className="MoviesCard__info">
            <h3 className="MoviesCard__title">33 слова о дизайне</h3>
            <button className="MoviesCard__like"></button>
          </div>
          <p className="MoviesCard__time">1ч42м</p>
        </div>
        <div className="MoviesCard">
          <img className="MoviesCard__image" src={film1} />
          <div className="MoviesCard__info">
            <h3 className="MoviesCard__title">33 слова о дизайне</h3>
            <button className="MoviesCard__like"></button>
          </div>
          <p className="MoviesCard__time">1ч42м</p>
        </div>
        <div className="MoviesCard">
          <img className="MoviesCard__image" src={film1} />
          <div className="MoviesCard__info">
            <h3 className="MoviesCard__title">33 слова о дизайне</h3>
            <button className="MoviesCard__like"></button>
          </div>
          <p className="MoviesCard__time">1ч42м</p>
        </div>
        <div className="MoviesCard">
          <img className="MoviesCard__image" src={film1} />
          <div className="MoviesCard__info">
            <h3 className="MoviesCard__title">33 слова о дизайне</h3>
            <button className="MoviesCard__like"></button>
          </div>
          <p className="MoviesCard__time">1ч42м</p>
        </div>
        <div className="MoviesCard">
          <img className="MoviesCard__image" src={film1} />
          <div className="MoviesCard__info">
            <h3 className="MoviesCard__title">33 слова о дизайне</h3>
            <button className="MoviesCard__like"></button>
          </div>
          <p className="MoviesCard__time">1ч42м</p>
        </div>
        <div className="MoviesCard">
          <img className="MoviesCard__image" src={film1} />
          <div className="MoviesCard__info">
            <h3 className="MoviesCard__title">33 слова о дизайне</h3>
            <button className="MoviesCard__like"></button>
          </div>
          <p className="MoviesCard__time">1ч42м</p>
        </div>
        <div className="MoviesCard">
          <img className="MoviesCard__image" src={film1} />
          <div className="MoviesCard__info">
            <h3 className="MoviesCard__title">33 слова о дизайне</h3>
            <button className="MoviesCard__like"></button>
          </div>
          <p className="MoviesCard__time">1ч42м</p>
        </div>
        <div className="MoviesCard">
          <img className="MoviesCard__image" src={film1} />
          <div className="MoviesCard__info">
            <h3 className="MoviesCard__title">33 слова о дизайне</h3>
            <button className="MoviesCard__like"></button>
          </div>
          <p className="MoviesCard__time">1ч42м</p>
        </div>
        <div className="MoviesCard">
          <img className="MoviesCard__image" src={film1} />
          <div className="MoviesCard__info">
            <h3 className="MoviesCard__title">33 слова о дизайне</h3>
            <button className="MoviesCard__like"></button>
          </div>
          <p className="MoviesCard__time">1ч42м</p>
        </div>
        <div className="MoviesCard">
          <img className="MoviesCard__image" src={film1} />
          <div className="MoviesCard__info">
            <h3 className="MoviesCard__title">33 слова о дизайне</h3>
            <button className="MoviesCard__like"></button>
          </div>
          <p className="MoviesCard__time">1ч42м</p>
        </div>
        <div className="MoviesCard">
          <img className="MoviesCard__image" src={film1} />
          <div className="MoviesCard__info">
            <h3 className="MoviesCard__title">33 слова о дизайне</h3>
            <button className="MoviesCard__like"></button>
          </div>
          <p className="MoviesCard__time">1ч42м</p>
        </div>
        <div className="MoviesCard">
          <img className="MoviesCard__image" src={film1} />
          <div className="MoviesCard__info">
            <h3 className="MoviesCard__title">33 слова о дизайне</h3>
            <button className="MoviesCard__like"></button>
          </div>
          <p className="MoviesCard__time">1ч42м</p>
        </div>
      </section>
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
