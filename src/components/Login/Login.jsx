import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
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
      <img className="Login__img" src={logo} />
      <p className="login__welcome">Рады видеть</p>
      <form onSubmit={handleSubmit} className="login__form">
        <p className="login__name">Имя</p>
        <input
          required
          id="email"
          name="email"
          type="text"
          value={formValue.email}
          onChange={handleChange}
        />
        <p className="login__name">Пароль</p>
        <input
          required
          id="password"
          name="password"
          type="password"
          value={formValue.password}
          onChange={handleChange}
        />
        <div className="login__button-container">
          <button type="submit" className="login__link">
            Войти
          </button>
        </div>
        <div className="Login__signup">
          <p>Ещё не зарегистрированы?</p>
          <Link to="/signup" className="Login__register-link">
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
