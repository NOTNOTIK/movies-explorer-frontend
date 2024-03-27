import { useState } from "react";
import "./FilterCheckbox.css";

export default function FilterCheckbox() {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox">
      <form className="checkbox__form">
        <label className="checkbox__label">
          <input
            className="checkbox__input"
            type="checkbox"
            checked={isChecked}
            onChange={handleChange}
          />
          <span className="checkbox__slider"></span>
        </label>
      </form>
      <p className="checkbox__name">Короткометражки</p>
    </div>
  );
}
