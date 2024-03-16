import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../images/logo.svg";
const Register = () => {
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

    //handleLogin(formValue.email, formValue.password);
  };

  return (
    <div className="register">
      <img className="register__img" src={logo} />
      <p className="register__welcome">Добро пожаловать!</p>
      <form onSubmit={handleSubmit} className="register__form">
        <p className="register__name">Имя</p>
        <input
          required
          id="name"
          name="name"
          type="text"
          value={formValue.name}
          onChange={handleChange}
        />
        <p className="register__name">E-mail</p>
        <input
          required
          id="email"
          name="email"
          type="email"
          value={formValue.email}
          onChange={handleChange}
        />
        <p className="register__name">Пароль</p>
        <input
          required
          id="password"
          name="password"
          type="password"
          value={formValue.password}
          onChange={handleChange}
        />
        <div className="register__button-container">
          <button type="submit" className="register__link">
            Войти
          </button>
        </div>
        <div className="register__signin">
          <p>Уже зарегистрированы?</p>
          <Link to="/signin" className="register__register-link">
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
