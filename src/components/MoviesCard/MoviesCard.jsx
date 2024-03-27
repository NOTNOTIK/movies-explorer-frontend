import "./MoviesCard.css";
import "./MoviesCard.css";
import film1 from "../../images/film1.png";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function MoviesCard() {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <li className="MoviesCard">
      <section className="MoviesCard__container">
        <img className="MoviesCard__image" src={film1} alt={film1} />
        <main className="MoviesCard__info">
          <h3 className="MoviesCard__title">33 слова о дизайне</h3>
          <button
            type="button"
            className={`${
              location.pathname === "/movies"
                ? `MoviesCard__like ${isLiked ? "MoviesCard__like_active" : ""}`
                : "MoviesCard__delete"
            }`}
            onClick={handleLikeClick}
          ></button>
        </main>
        <p className="MoviesCard__time">1ч42м</p>
      </section>
    </li>
  );
}

export default MoviesCard;
