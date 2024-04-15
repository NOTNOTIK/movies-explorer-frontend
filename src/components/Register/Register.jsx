import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Register.css";
export default function Register({ onRegister }) {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onRegister(formValue.name, formValue.email, formValue.password);
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
            value={formValue.name}
            onChange={handleChange}
          />

          <p className="register__name">E-mail</p>
          <input
            required
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            value={formValue.email}
            onChange={handleChange}
          />

          <p className="register__name">Пароль</p>
          <input
            required
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            value={formValue.password}
            onChange={handleChange}
          />

          <div className="register__button-container">
            <button type="submit" className="register__link">
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
