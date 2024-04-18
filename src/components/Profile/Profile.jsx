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
