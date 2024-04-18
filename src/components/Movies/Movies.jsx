import React from "react";
import { useState, useEffect } from "react";
import movieApi from "../../utils/MoviesApi";
import { apiMain } from "../../utils/MainApi";
import logo from "../../images/logo.svg";
import account from "../../images/account.png";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import searchFilter from "../../utils/Filter";
import Preloader from "../Preloader/Preloader";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import error from "../../images/Error.svg";
import InfoTooltip from "../InfoToolTip/InfoToolTip.js";
export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isToggled, setIsToggled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [infoTooltipImage, setInfoTooltipImage] = useState("");
  const [infoTooltipText, setInfoTooltipText] = useState("");
  const location = useLocation();
  const toggleClass = () => {
    setIsToggled(!isToggled);
  };
  function closeAllPopup() {
    setIsInfoTooltipOpen(false);
  }
  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = () => {
    const movies = JSON.parse(localStorage.getItem("movies") || "[]");
    const savedMovies = JSON.parse(localStorage.getItem("savedMovies") || "[]");
    if (movies.length === 0 || savedMovies.length === 0) {
      setIsLoading(true);
      Promise.all([movieApi.getMovies(), apiMain.getUserMovies()])
        .then(([movies, savedMovies]) => {
          movies.forEach((movie) => {
            if (savedMovies) {
              const isSelected = savedMovies.filter(
                (item) => item.movieId === movie.id
              );
              movie.isLiked = isSelected.length > 0;
              if (isSelected.length > 0) {
                movie._id = isSelected[0]._id;
              }
            } else {
              movie.isLiked = false;
            }
          });
          localStorage.setItem("movies", JSON.stringify(movies));
          localStorage.setItem(
            "savedMovies",
            JSON.stringify(movies.filter((movie) => movie.isLiked))
          );
          setSavedMovies(
            JSON.parse(localStorage.getItem("savedMovies") || "[]")
          );
          setIsLoading(false);
        })
        .catch((err) => {
          setIsInfoTooltipOpen(true);
          setInfoTooltipText("Ничего не найдено");
          setInfoTooltipImage(error);
          console.log(err);
        });
    } else {
      setSavedMovies(JSON.parse(localStorage.getItem("savedMovies") || "[]"));
    }
  };

  const filterMovies = (query, shorts, path) => {
    setIsLoading(true);
    if (path === "/movies") {
      const movies = JSON.parse(localStorage.getItem("movies"));
      const filtered = searchFilter(movies, query, shorts);
      if (filtered.length === 0) {
        setIsInfoTooltipOpen(true);
        setInfoTooltipText("Ничего не найдено");
        setInfoTooltipImage(error);
      }
      setMovies(filtered);
    } else {
      const savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
      const filteredSaved = searchFilter(savedMovies, query, shorts);
      if (filteredSaved.length === 0) {
        setIsInfoTooltipOpen(true);
        setInfoTooltipText("Ничего не найдено");
        setInfoTooltipImage(error);
      }
      setSavedMovies(filteredSaved);
    }
    setIsLoading(false);
  };

  const handleLikeMovie = (movie) => {
    const prepareMovie = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration.toString(),
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co/${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co/${movie.image.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    };

    if (movie.isLiked || location.pathname === "/savedMovies") {
      apiMain
        .deleteMovie(movie._id)
        .then(() => {
          changeLocalStorageData(movie, undefined);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      apiMain
        .saveMovie(prepareMovie)
        .then((movieResp) => {
          changeLocalStorageData(movie, movieResp._id);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  function changeLocalStorageData(movie, createdId) {
    const filtredMovies = movies.map((filtredMovie) => {
      if (filtredMovie.id === movie.id) {
        filtredMovie.isLiked = !filtredMovie.isLiked;
        if (createdId) {
          filtredMovie._id = createdId;
        }
      }
      return filtredMovie;
    });

    const allMovies = JSON.parse(localStorage.getItem("movies"));
    const localMovies = allMovies.map((localMovie) => {
      if (localMovie.id === movie.id) {
        localMovie.isLiked = !localMovie.isLiked;
        if (createdId) {
          localMovie._id = createdId;
        }
      }
      return localMovie;
    });

    localStorage.setItem("movies", JSON.stringify(localMovies));
    localStorage.setItem(
      "savedMovies",
      JSON.stringify(localMovies.filter((movieitem) => movieitem.isLiked))
    );
    setMovies(filtredMovies);
    setSavedMovies(localMovies.filter((movieitem) => movieitem.isLiked));
  }

  // обработчик кнопки Найти фильм
  const handleSearch = (query, shorts, path) => {
    setIsLoading(true);
    filterMovies(query, shorts, path);
    setIsLoading(false);
  };

  return (
    <>
      <main className="movies">
        <SearchForm
          handleSearch={handleSearch}
          setSavedMovies={setSavedMovies}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movies={movies}
            savedMoviesList={savedMovies}
            handleLikeMovie={handleLikeMovie}
          />
        )}
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopup}
          logo={infoTooltipImage}
          name={infoTooltipText}
        />
      </main>
      <footer className="footer">
        <h2 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className="footer__container">
          <p className="footer__year">&copy;2024</p>
          <nav className="footer__nav">
            <a className="footer__link" href="https://practicum.yandex.ru">
              Яндекс.Практикум
            </a>
            <a
              className="footer__link"
              href="https://github.com/Yandex-Practicum"
            >
              GitHub
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
