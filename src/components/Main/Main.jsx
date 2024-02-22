import React from "react";
import logo from "../../images/logo.svg";
import promo from "../../images/promo.svg";
import photo from "../../images/student.jpg";
import arrow from "../../images/arrow.svg";
import "./Main.css";
export default function Main() {
  return (
    <div className="App">
      <header className="header">
        <img className="header__logo" src={logo} />
        <nav className="header__nav">
          <a className="header__link">Регистрация</a>
          <button className="header__button">Войти</button>
        </nav>
      </header>
      <section className="promo">
        <img className="promo__logo" src={promo} />
        <div className="promo__info">
          <h1 className="promo__title">
            Учебный проект студента факультета <br /> Веб-разработки.
          </h1>
          <p className="promo__description">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <button className="promo__button">
            <p>Узнать больше</p>
          </button>
        </div>
      </section>
      <section className="NavTab">
        <h2 className="NavTab__title">О проекте</h2>
        <div className="NavTab__info">
          <div className="NavTab__info-content">
            <h3 className="NavTab__info-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="NavTab__info-description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="NavTab__info-content">
            <h3 className="NavTab__info-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="NavTab__info-description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="NavTab__deadline">
          <div className="NavTab__deadline-block">
            <div className="NavTab__deadline-1week">1 неделя</div>
            <p className="NavTab__deadline-text">Back-end</p>
          </div>
          <div className="NavTab__deadline-block">
            <div className="NavTab__deadline-4week">4 недели</div>
            <p className="NavTab__deadline-text">Front-end</p>
          </div>
        </div>
      </section>
      <section className="Techs">
        <h2 className="Techs__title">Технологии</h2>
        <h3 className="Techs__text">7 технологий</h3>
        <p className="Techs__description">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>

        <ul className="Techs__nav">
          <li className="Techs__block">HTML</li>
          <li className="Techs__block">CSS</li>
          <li className="Techs__block">JS</li>
          <li className="Techs__block">React</li>
          <li className="Techs__block">Git</li>
          <li className="Techs__block">Express.js</li>
          <li className="Techs__block">mongoDB</li>
        </ul>
      </section>
      <section className="AboutMe">
        <h2 className="AboutMe__title">Студент</h2>
        <div className="AboutMe__content">
          <img className="AboutMe__photo" src={photo} />
          <div className="AboutMe__info">
            <h3 className="AboutMe__name">Егор</h3>
            <p className="AboutMe__age">Веб-разработчик, 19 лет</p>
            <p className="AboutMe__description">
              Я родился в лучшем городе мира - Вологде, после выпуска 9 класса
              переехал в Москву и живу здесь по сей день. Отучился год на
              повара, и на втором курсе кулинарного колледжа решил пройти курсы
              от Яндекса, а на третьем курсе решил сменить колледж и
              специальность на веб-разработчика. Сегодня я пишу диплом по
              курсам, учусь в Колледже связи №54 им. П. М. Вострухина. Хочу
              найти работу и перехать жить отдельно
            </p>
            <a className="AboutMe__Link" href="https://github.com/NOTNOTIK">
              GitHub
            </a>
          </div>
        </div>
      </section>
      <section className="Portfolio">
        <h2 className="Portfolio__title">Портфолио</h2>
        <div className="Portfolio__block">
          <h3 className="Portfolio__performance">Учебный проект Mesto</h3>
          <a href="https://github.com/NOTNOTIK/react-mesto-api-full-gha">
            <img className="Portfolio__arrow" src={arrow} />
          </a>
        </div>
        <div className="Portfolio__block">
          <h3 className="Portfolio__performance">Одностраничный сайт</h3>
          <a href="https://notnotik.github.io/POIZON/">
            <img className="Portfolio__arrow" src={arrow} />
          </a>
        </div>
        <div className="Portfolio__block">
          <h3 className="Portfolio__performance">Адаптивный сайт</h3>
          <a href="https://notnotik.github.io/VITA-seprik/">
            <img className="Portfolio__arrow" src={arrow} />
          </a>
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
