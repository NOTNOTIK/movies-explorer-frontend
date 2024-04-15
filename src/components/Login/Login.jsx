import React from "react";
import { useState } from "react";

import { NavLink, Link } from "react-router-dom";

import logo from "../../images/logo.svg";
import "./Login.css";
export default function Login({ onLogin, errorText }) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onLogin(formValue.email, formValue.password);
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
            value={formValue.email}
            onChange={handleChange}
          />
          <span class="error" id="email-error"></span>
          <p className="login__name">Пароль</p>
          <input
            required
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            value={formValue.password}
            onChange={handleChange}
          />
          <span class="error" id="password-error"></span>
          <div className="login__button-container">
            <button type="submit" className="login__link">
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
