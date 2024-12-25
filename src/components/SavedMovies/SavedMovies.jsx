import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

export default function SavedMovies({ handleLikeMovie }) {
  return (
    <>
      <main className="movies">
        <SearchForm
          handleSearch={handleSearch}
          setSavedMovies={setSavedMovies}
        />

        <MoviesCardList
          movies={movies}
          savedMoviesList={savedMovies}
          handleLikeMovie={handleLikeMovie}
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
