import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./PageNotFound.css";

function PageNotFound() {
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }
  return (
    <>
      <main className="not-found">
        <h1 className="not-found__title"> 404</h1>
        <p className="not-found__text">Страница не найдена</p>
        <Link
          className="button button_type_to-main"
          to="/"
          onClick={handleClick}
        >
          Назад
        </Link>
      </main>
    </>
  );
}

export default PageNotFound;
