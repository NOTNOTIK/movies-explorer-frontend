import React from "react";
import "./FilterCheckbox.css";

export default function FilterCheckbox({ onChangeFilter, shorts }) {
  return (
    <>
      <div className="checkbox">
        <form className="checkbox__form">
          <label className="checkbox__label">
            <input
              className="checkbox__input"
              type="checkbox"
              onChange={onChangeFilter}
              checked={shorts}
            />
            <span className="checkbox__slider"></span>
          </label>
        </form>
        <p className="checkbox__name">Короткометражки</p>
      </div>
    </>
  );
}
