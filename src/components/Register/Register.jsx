import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Register.css";
export default function Register({ onRegister }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});

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
        setIsValid(true && isValidity);
      }
    } else {
      setIsValid(isValidity);
    }
  }
  function onNameChange(e) {
    handleChange(e);
    setName(e.target.value);
  }

  function onEmailChange(e) {
    handleChange(e);
    setEmail(e.target.value);
  }

  function onPasswordChange(e) {
    handleChange(e);
    setPassword(e.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onRegister(name, email, password);
  };

  return (
    <>
      <main className="register">
        <Link to="/" className="register__img">
          <img src={logo} alt="Лого" />
        </Link>
        <h1 className="register__welcome">Рады видеть!</h1>
        <form onSubmit={handleSubmit} className="register__form">
          <p className="register__name">Имя</p>
          <input
            required
            id="name"
            name="name"
            type="text"
            placeholder="Имя"
            minLength={2}
            maxLength={30}
            value={values.name}
            onChange={onNameChange}
            isValid={isValid}
          />
          <span className="register__input-error">{errors.name}</span>
          <p className="register__name">E-mail</p>
          <input
            required
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            value={values.email}
            onChange={onEmailChange}
            isValid={isValid}
          />
          <span className="register__input-error">{errors.email}</span>
          <p className="register__name">Пароль</p>
          <input
            required
            id="password"
            name="password"
            type="password"
            minLength={8}
            maxLength={50}
            placeholder="Пароль"
            value={values.password}
            onChange={onPasswordChange}
            isValid={isValid}
          />
          <span className="register__input-error">{errors.password}</span>
          <div className="register__button-container">
            <button
              type="submit"
              className="register__link"
              disabled={!isValid}
            >
              Зарегистрироваться
            </button>
          </div>
          <div className="register__signin">
            <p>Уже зарегистрированы?</p>
            <Link to="/signin" className="register__register-link">
              Войти
            </Link>
          </div>
        </form>
      </main>
    </>
  );
}
