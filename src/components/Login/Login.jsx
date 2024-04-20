import React from "react";
import { useState } from "react";

import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Login.css";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setValues({ ...values, [name]: value });

    const isValidity = input.closest("form").checkValidity();
    if (name === "email") {
      const regex = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);
      const isValidRegex = regex.test(value);
      if (!isValidRegex) {
        setIsValid(false);
      } else {
        setIsValid(true && isValidity);
      }
    } else {
      setIsValid(isValidity);
    }
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
    onLogin(email, password);
  };

  return (
    <>
      <main className="login">
        <Link to="/" className="login__img">
          <img src={logo} alt="Лого" />
        </Link>
        <h1 className="login__welcome">Рады видеть!</h1>
        <form onSubmit={handleSubmit} className="login__form">
          <p className="login__name">E-mail</p>
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
          <span class="error" id="email-error"></span>
          <p className="login__name">Пароль</p>
          <input
            required
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            value={values.password}
            onChange={onPasswordChange}
            isValid={isValid}
          />
          <span class="error" id="password-error"></span>
          <div className="login__button-container">
            <button type="submit" className="login__link" disabled={!isValid}>
              Войти
            </button>
          </div>
          <div className="login__signup">
            <p>Ещё не зарегистрированы?</p>
            <Link to="/signup" className="login__register-link">
              Регистрация
            </Link>
          </div>
        </form>
      </main>
    </>
  );
}
