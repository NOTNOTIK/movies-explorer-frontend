import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
const Login = () => {
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

    //handleLogin(formValue.email, formValue.password);
  };

  return (
    <div className="login">
      <NavLink to="/">
        <img className="Login__img" src={logo} />
      </NavLink>
      <p className="login__welcome">Рады видеть</p>
      <form onSubmit={handleSubmit} className="login__form">
        <p className="login__name">E-mail</p>
        <input
          required
          id="email"
          name="email"
          type="email"
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
          value={formValue.password}
          onChange={handleChange}
        />
        <span class="error" id="password-error"></span>
        <div className="login__button-container">
          <button type="submit" className="login__link">
            Войти
          </button>
        </div>
        <div className="Login__signup">
          <p>Ещё не зарегистрированы?</p>
          <Link to="/signup" className="Login__register-link">
            Регистрация
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;