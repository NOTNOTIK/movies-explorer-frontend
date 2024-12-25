import logo from "../../images/logo.svg";
import { Link, useLocation } from "react-router-dom";

import "./Header.css";
import account from "../../images/account.png";
function Header() {
  const location = useLocation();
  const loggedIn = localStorage.getItem("isLogin");
  return (
    <header
      className={`header ${
        location.pathname === "/" ? "" : "header__container_color_white"
      }`}
    >
      {loggedIn ? (
        <section
          className={`header__container ${
            location.pathname === "/" ? "" : "header__container_color_white"
          }`}
        >
          <Link to="/" className="header__img">
            <img alt="логотип" src={logo} className="header__logo" />
          </Link>
          <div className="header__links">
            <Link
              to="/movies"
              className={`header__link 
    ${location.pathname === "/" ? "header_link_white" : ""}`}
            >
              Фильмы
            </Link>
            <Link
              to="/savedMovies"
              className={`header__link 
    ${location.pathname === "/" ? "header_link_white" : ""}`}
            >
              Сохранённые фильмы
            </Link>
          </div>
          <Link
            to="/profile"
            className={`header__account ${
              location.pathname === "/" ? "header_account_white" : ""
            } `}
          >
            <p className="header__account-name">Аккаунт</p>
            <img className="header__account-image" src={account} alt="Лого" />
          </Link>
          <button type="button" className="header__burger"></button>
        </section>
      ) : (
        <section className="header__container">
          <img alt="логотип" src={logo} className="header__logo" />
          <nav className="header__nav">
            <Link to="/signup" className="header__link header__signup">
              Регистрация
            </Link>
            <Link to="/signin" className="header__link header__signin">
              Войти
            </Link>
          </nav>
        </section>
      )}
    </header>
  );
}

export default Header;
