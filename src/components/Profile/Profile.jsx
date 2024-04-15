import React, { useState, useEffect } from "react";
import { useContext } from "react";
import "./Profile.css";
import { NavLink, Link } from "react-router-dom";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import account from "../../images/account.png";
import logo from "../../images/logo.svg";
import { apiMain } from "../../utils/MainApi";

export default function Profile({ onSignOut }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  const [editButtonEnable, setEditButtonEnable] = useState(true);
  const [inputState, setInputState] = useState(true);

  const [isToggled, setIsToggled] = useState(false);

  const [formValue, setFormValue] = useState({
    name: currentUser.name,
    email: currentUser.email,
  });

  const toggleClass = () => {
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser.name, currentUser.email]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  function handleEditClick(e) {
    setEditButtonEnable(false);
    setInputState(false);
  }

  const handleUpdateUser = async (data) => {
    apiMain
      .editUserInfo(data)
      .then(() => {
        setEditButtonEnable(true);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateUser({ name, email });
  }

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
        <h1 className="profile__welcome">Привет, {currentUser.name}!</h1>
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__container">
            <p className="profile__name">Имя</p>
            <input
              required
              name="name"
              id="name"
              type="text"
              placeholder="Имя"
              value={name}
              minLength="2"
              maxLength="30"
              onChange={handleChange}
              disabled={inputState}
            />
          </div>
          <div className="profile__container">
            <p className="profile__name">E-mail</p>
            <input
              required
              name="email"
              id="email"
              type="email"
              minLength="2"
              maxLength="30"
              placeholder="E-mail"
              value={email}
              onChange={handleChange}
              disabled={inputState}
            />
          </div>
          {editButtonEnable ? (
            <div className="profile__submit">
              <button
                type="button"
                className="profile__edit"
                onClick={handleEditClick}
              >
                Редактировать
              </button>
              <Link
                to="/"
                type="button"
                className="profile__out"
                onClick={onSignOut}
              >
                Выйти из аккаунта
              </Link>
            </div>
          ) : (
            <button type="button" className="profile__edit">
              Сохранить
            </button>
          )}
        </form>
      </main>
    </>
  );
}
