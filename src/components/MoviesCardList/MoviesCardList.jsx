import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MovieCard from "../MovieCard/MovieCard";

export default function MoviesCardList({
  handleLikeMovie,
  movies,
  savedMoviesList,
}) {
  const { pathname } = useLocation();

  const [cards, setCards] = useState(16);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        setCards(16);
      } else if (screenWidth >= 768) {
        setCards(8);
      } else if (screenWidth >= 320 && screenWidth <= 480) {
        setCards(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLoadMore = () => {
    if (window.innerWidth >= 1280) {
      setCards((prev) => prev + 4);
    } else if (window.innerWidth >= 768) {
      setCards((prev) => prev + 4);
    } else if (window.innerWidth >= 320 && window.innerWidth <= 480) {
      setCards((prev) => prev + 2);
    }
  };

  return (
    <>
      <section className="cards">
        {pathname === "/savedMovies" ? (
          <ul className="cards__list">
            {savedMoviesList.map(
              (movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  handleLikeMovie={handleLikeMovie}
                />
              ),
              12
            )}
          </ul>
        ) : (
          <div className="container">
            <ul className="cards__list">
              {movies.slice(0, cards).map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  handleLikeMovie={handleLikeMovie}
                />
              ))}
            </ul>
            {cards < movies.length ? (
              <button
                className="cards__button"
                type="button"
                onClick={handleLoadMore}
              >
                Ещё
              </button>
            ) : (
              ""
            )}
          </div>
        )}
      </section>
    </>
  );
}
