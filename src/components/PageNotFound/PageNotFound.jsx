import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./PageNotFound.css";

function PageNotFound() {
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }
  return (
    <div className="not-found">
      <h3 className="not-found__title">
        <span>404</span>Страница не найдена
      </h3>
      <Link className="button button_type_to-main" to="/" onClick={handleClick}>
        Назад
      </Link>
    </div>
  );
}

export default PageNotFound;
