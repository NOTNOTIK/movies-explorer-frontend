import React from "react";
import { useLocation } from "react-router-dom";
import "./MovieCard.css";

export default function MovieCard({ movie, handleLikeMovie }) {
  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;
  const location = useLocation();

  function likeMovie(e) {
    handleLikeMovie(movie);
  }

  return (
    <>
      <li className="MoviesCard">
        <a href={movie.trailerLink} target="_blank">
          <img
            className="MoviesCard__image"
            src={`https://api.nomoreparties.co${movie.image.url}`}
            alt={movie.nameRU || movie.nameEN}
          />
        </a>
        <div className="MoviesCard__info">
          <h3 className="MoviesCard__title">{movie.nameRU || movie.nameEN}</h3>
          <button
            type="button"
            className={`${
              location.pathname === "/movies"
                ? `MoviesCard__like ${
                    movie.isLiked ? "MoviesCard__like_active" : ""
                  }`
                : "MoviesCard__delete"
            }`}
            onClick={likeMovie}
          ></button>
        </div>
        <p className="MoviesCard__time">
          {hours}ч. {minutes} мин.
        </p>
      </li>
    </>
  );
}
