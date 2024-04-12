import "./MoviesCard.css";
import film1 from "../../images/film1.png";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function MoviesCard(props) {
  const location = useLocation();

  const isLiked = props.savedMovies?.some((m) => {
    return m.movieId === props.movie.id;
  });
  const moviesInSavePage = props.savedMovies?.find(
    (i) => i.movieId === props.movie.id
  );
  const handleLikeClick = () => {
    if (isLiked) {
      props.onCardDelete(moviesInSavePage._id);
    } else {
      props.onCardLike(
        {
          country: props.movie.country,
          director: props.movie.director,
          duration: props.movie.duration,
          year: props.movie.year,
          description: props.movie.description,
          image: `https://api.nomoreparties.co${props.movie.image.url}`,
          trailerLink: props.movie.trailerLink,
          nameRU: props.movie.nameRU,
          nameEN: props.movie.nameEN,
          thumbnail: `https://api.nomoreparties.co${props.movie.image.formats.thumbnail.url}`,
          movieId: props.movie.id,
        },
        location.pathname
      );
    }
  };
  return (
    <li className="MoviesCard">
      <a href={props.movie.trailerLink} target="_blank">
        <img
          className="MoviesCard__image"
          src={
            location.pathname === "/movies"
              ? `https://api.nomoreparties.co${props.movie.image.url}`
              : props.movie.image
          }
          alt={props.movie.nameRU || props.movie.nameEN}
        />
      </a>
      <div className="MoviesCard__info">
        <h3 className="MoviesCard__title">
          {props.movie.nameRU || props.movie.nameEN}
        </h3>
        <button
          type="button"
          className={`${
            location.pathname === "/movies"
              ? `MoviesCard__like ${isLiked ? "MoviesCard__like_active" : ""}`
              : "MoviesCard__delete"
          }`}
          onClick={handleLikeClick}
        ></button>
      </div>
      <p className="MoviesCard__time">{props.movie.duration}</p>
    </li>
  );
}

export default MoviesCard;
