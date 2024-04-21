import React, { useState, useEffect } from "react";
import { useContext } from "react";
import "./Profile.css";
import { NavLink, Link } from "react-router-dom";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import account from "../../images/account.png";
import logo from "../../images/logo.svg";
import { apiMain } from "../../utils/MainApi";
import complete from "../../images/Complete.svg";
import error from "../../images/Error.svg";
export default function Profile({ onSignOut, setCurrentUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [errorNameText, setErrorNameText] = useState("");
  const [errorEmailText, setErrorEmailText] = useState("");
  const [editButtonEnable, setEditButtonEnable] = useState(true);
  const [inputState, setInputState] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [infoTooltipImage, setInfoTooltipImage] = useState("");
  const [infoTooltipText, setInfoTooltipText] = useState("");
  const [values, setValues] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});
  useEffect(() => {
    setButtonDisabled(currentUser.name === name && currentUser.email === email);
  }, [name, email, currentUser.name, currentUser.email]);

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser.name, currentUser.email]);

  function handleEditClick(e) {
    setEditButtonEnable(false);
    setInputState(false);
  }

  function handleChange(e) {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    const isValidity = input.closest("form").checkValidity();
    if (name === "email") {
      const regex = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);
      const isValidRegex = regex.test(value);
      if (!isValidRegex) {
        setIsValid(false);
        setErrors({ ...errors, email: "Введите корректный email" });
      } else {
        errors.email = "";
        setErrors(errors);
        setIsValid(true && isValidity);
      }
    } else {
      setIsValid(isValidity);
    }
  }

  // Редактирование данных профиля
  const handleUpdateUser = async (data) => {
    // Блокируем инпуты и кнопку сохрнаить на время запроса
    setButtonDisabled(true);
    setInputState(true);
    try {
      const profileData = await apiMain.editUserInfo(data);
      if (
        profileData &&
        (profileData.name !== currentUser.name ||
          profileData.email !== currentUser.email)
      ) {
        await setCurrentUser({
          name: profileData.name,
          email: profileData.email,
        });
        setEditButtonEnable(true);
        setInfoTooltipText("Данные успешно обновлены");
        setIsInfoTooltipOpen(true);
        setInfoTooltipImage(complete);

        setButtonDisabled(false);
        setInputState(false);
        return true;
      }
    } catch (err) {
      setInfoTooltipText("Ошибка");
      setIsInfoTooltipOpen(true);
      setInfoTooltipImage(error);
      return false;
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateUser({ name, email });
  }

  function handleEmailChange(e) {
    handleChange(e);
    setEmail(e.target.value);
    if (e.target.value === currentUser.email) {
      setErrorEmailText("E-mail совпадает с текущим");
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
      setErrorEmailText("");
    }
  }

  function handleNameChange(e) {
    handleChange(e);
    setName(e.target.value);
    if (e.target.value === currentUser.name) {
      setErrorNameText("Имя пользователя не отличается от текущего");
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
      setErrorNameText("");
    }
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
              onChange={handleNameChange}
              disabled={inputState}
            />
          </div>
          <span className="profile__input-error">{errorNameText}</span>
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
              onChange={handleEmailChange}
              disabled={inputState}
            />
          </div>

          <span className="profile__input-error">{errorEmailText}</span>
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
            <button
              type="submit"
              className="profile__edit_active"
              disabled={buttonDisabled}
            >
              Сохранить
            </button>
          )}
        </form>
      </main>
    </>
  );
}
